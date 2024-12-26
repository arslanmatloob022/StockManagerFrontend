<script setup lang="ts">
import AddUpdateUser from "./AddUpdateUser.vue";
import { useApi } from "/@src/composables/useApi";
import { formatDateTime } from "/@src/commonScripts/commonComponents";
import { useUserStore } from "/@src/stores/usersStore";

const userStore = useUserStore();
const api = useApi();
const openUserModal = ref(false);
const selectedUser = ref("");

const closeUserModal = () => {
  openUserModal.value = false;
};

const openUserModalHandler = () => {
  openUserModal.value = true;
};
interface User {
  id: string;
  password: string;
  last_login: string;
  email: string;
  phone_number: string;
  username: string;
  role: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  store: string;
  user_permissions: string[];
}

const users = ref([
  {
    id: "",
    password: "",
    last_login: "",
    email: "",
    phone_number: "",
    username: "",
    role: "",
    is_active: false,
    is_staff: false,
    is_superuser: false,
    store: "",
    user_permissions: [],
  },
]);

const getUsersList = async () => {
  try {
    const resp = await api.get("/user/");
    users.value = resp.data;
  } catch (err) {
    console.log(err);
  }
};

function getInitials(username: string): string {
  if (username) {
    const nameParts = username.trim().split(" ");
    const firstInitial = nameParts[0]?.[0]?.toUpperCase() || "";
    const lastInitial = nameParts[1]?.[0]?.toUpperCase() || "";

    return `${firstInitial}${lastInitial}` || firstInitial || lastInitial;
  } else {
    return "N/A";
  }
}

const filters = ref("");
const openUserUpdateModal = (id: any) => {
  selectedUser.value = id;
  openUserModal.value = true;
};
const filteredData = computed(() => {
  if (!filters.value) {
    return users.value;
  } else {
    return users.value.filter((item) => {
      return (
        item?.username.match(new RegExp(filters.value, "i")) ||
        item?.email.match(new RegExp(filters.value, "i"))
      );
    });
  }
});

onMounted(() => {
  getUsersList();
});
</script>

<template>
  <div>
    <div class="list-view-toolbar">
      <VField>
        <VControl icon="lucide:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </VControl>
      </VField>

      <div class="list-info">
        <span v-if="filteredData.length === 1">1 record found</span>
        <span v-else>{{ filteredData.length }} records found</span>
      </div>

      <div class="buttons">
        <VButton
          @click="openUserModalHandler"
          color="primary"
          icon="fas fa-plus"
          elevated
        >
          New User
        </VButton>
      </div>
    </div>

    <!--List-->
    <div class="list-view list-view-v1">
      <VPlaceholderPage
        :class="[filteredData.length !== 0 && 'is-hidden']"
        title="We couldn't find any matching results."
        subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/images/illustrations/placeholders/search-1.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/images/illustrations/placeholders/search-1-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>

      <div class="list-view-inner">
        <!--Item-->
        <TransitionGroup
          v-if="filteredData.length"
          name="list-complete"
          tag="div"
        >
          <div
            v-for="(item, key) in filteredData"
            :key="key"
            class="list-view-item"
          >
            <div class="list-view-item-inner">
              <VAvatar
                color="primary"
                size="large"
                :initials="getInitials(item?.username)"
              />
              <div class="meta-left">
                <h3>{{ item?.username }}</h3>
                <span>
                  <VIcon icon="lucide:map-pin" />
                  <span>{{ item?.email }}</span>
                </span>
              </div>
              <div class="meta-right">
                <div class="tags">
                  <VTag :label="item?.role" color="primary" rounded elevated />
                </div>

                <div class="stats">
                  <div class="stat">
                    <span>{{ item?.phone_number }}</span>
                    <span>Phone</span>
                  </div>
                  <div class="separator" />
                  <div class="stat">
                    <span>{{ item?.role }}</span>
                    <span>Role</span>
                  </div>
                  <div class="separator" />
                  <div class="stat">
                    <span>{{ formatDateTime(item?.last_login) }}</span>
                    <span>Last login</span>
                  </div>
                </div>

                <VDropdown icon="lucide:more-vertical" spaced right>
                  <template #content>
                    <a role="menuitem" class="dropdown-item is-media">
                      <div class="icon">
                        <i aria-hidden="true" class="lnil lnil-user-alt" />
                      </div>
                      <div class="meta">
                        <span>Profile</span>
                        <span>View profile</span>
                      </div>
                    </a>

                    <a
                      role="menuitem"
                      class="dropdown-item is-media"
                      @click="openUserUpdateModal(item.id)"
                    >
                      <div class="icon">
                        <i aria-hidden="true" class="lnil lnil-bubble" />
                      </div>
                      <div class="meta">
                        <span>Edit</span>
                        <span>Update User Information</span>
                      </div>
                    </a>

                    <a role="menuitem" href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i aria-hidden="true" class="lnil lnil-travel" />
                      </div>
                      <div class="meta">
                        <span>Transfer</span>
                        <span>Transfer to other list</span>
                      </div>
                    </a>

                    <hr class="dropdown-divider" />

                    <a
                      role="menuitem"
                      @click="userStore.deleteUser(item.id)"
                      class="dropdown-item is-media"
                    >
                      <div class="icon">
                        <i aria-hidden="true" class="lnil lnil-trash" />
                      </div>
                      <div class="meta">
                        <span>Remove</span>
                        <span>Remove from list</span>
                      </div>
                    </a>
                  </template>
                </VDropdown>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>

    <VFlexPagination
      v-if="filteredData.length > 5"
      :item-per-page="10"
      :total-items="873"
      :current-page="42"
      :max-links-displayed="5"
    />
  </div>
  <AddUpdateUser
    v-if="openUserModal"
    :openUserModal="openUserModal"
    :userId="selectedUser"
    @update:closeModalHandler="closeUserModal"
    @update:callOnSuccess="getUsersList"
  />
</template>

<style lang="scss">
@import "/@src/scss/abstracts/all";

.list-view-v1 {
  .list-view-item {
    @include vuero-r-card;

    margin-bottom: 16px;
    padding: 16px;

    .list-view-item-inner {
      display: flex;
      align-items: center;

      .meta-left {
        margin-inline-start: 16px;

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 600;
          font-size: 1rem;
          line-height: 1;
        }

        > span:not(.tag) {
          font-size: 0.9rem;
          color: var(--light-text);

          .iconify {
            height: 12px;
            width: 12px;
          }
        }
      }

      .meta-right {
        margin-inline-start: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .tags {
          margin-inline-end: 30px;
          margin-bottom: 0;

          .tag {
            margin-bottom: 0;
          }
        }

        .stats {
          display: flex;
          align-items: center;
          margin-inline-end: 30px;

          .stat {
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            color: var(--light-text);

            > span {
              font-family: var(--font);

              &:first-child {
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--dark-text);
                line-height: 1.4;
              }

              &:nth-child(2) {
                text-transform: uppercase;
                font-family: var(--font-alt);
                font-size: 0.75rem;
              }
            }

            .iconify {
              height: 16px;
              width: 16px;
            }

            .iconify {
              font-size: 1.4rem;
            }
          }

          .separator {
            height: 25px;
            width: 2px;
            border-inline-end: 1px solid
              color-mix(in oklab, var(--fade-grey), black 3%);
            margin: 0 16px;
          }
        }

        .network {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-width: 145px;

          > span {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
            margin-inline-start: 6px;
          }
        }

        .dropdown {
          margin-inline-start: 30px;
        }
      }
    }
  }
}

.is-dark {
  .list-view-v1 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;
          }
        }

        .meta-right {
          .stats {
            .stat {
              span {
                &:first-child {
                  color: var(--dark-dark-text);
                }
              }
            }

            .separator {
              border-color: color-mix(
                in oklab,
                var(--dark-sidebar),
                white 16%
              ) !important;
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .list-view-v1 {
    .list-view-item {
      .list-view-item-inner {
        position: relative;
        flex-direction: column;

        .v-avatar {
          margin-bottom: 10px;
        }

        .meta-left {
          margin-inline-start: 0;
        }

        .meta-right {
          flex-direction: column;
          margin-inline-start: 0;

          .tags {
            margin: 10px 0;
          }

          .stats {
            margin: 10px 0;
          }

          .network {
            margin: 10px 0 0;
            justify-content: center;

            > span {
              display: none;
            }
          }

          .dropdown {
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            margin-inline-start: 0;
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .list-view-v1 {
    display: flex;
    flex-wrap: wrap;

    .list-view-item {
      margin: 10px;
      width: calc(50% - 20px);

      .list-view-item-inner {
        position: relative;
        flex-direction: column;

        .v-avatar {
          margin-bottom: 10px;
        }

        .meta-left {
          margin-inline-start: 0;
        }

        .meta-right {
          flex-direction: column;
          margin-inline-start: 0;

          .tags {
            margin: 10px 0;
          }

          .stats {
            margin: 10px 0;
          }

          .network {
            margin: 10px 0 0;
            justify-content: center;

            > span {
              display: none;
            }
          }

          .dropdown {
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            margin-inline-start: 0;
          }
        }
      }
    }
  }
}
</style>
