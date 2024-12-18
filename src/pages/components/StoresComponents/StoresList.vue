<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";
import StoreModal from "./StoreModal.vue";

const notyf = useNotyf();
const api = useApi();

const filters = ref("");
const modalOpen = ref(false); // Control the modal visibility
const selectedProject = ref<any>(null); // Store the current store for editing or adding
const storeList = ref([]); // Holds data from the API

// Fetch the store list from the API
const fetchStoreList = async () => {
  try {
    const response = await api.get("/store/"); // Adjust the endpoint if needed
    storeList.value = response.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
  }
};

// Call the API on component mount
onMounted(() => {
  // fetchStoreList();
});

// Open modal to add a new store
const openAddModal = () => {
  selectedProject.value = null; // Clear selected store for adding
  modalOpen.value = true;
  console.log("hd",modalOpen.value)
};

// Open modal to edit an existing store
const openEditModal = (store: any) => {
  selectedProject.value = { ...store }; // Populate selected store for editing
  modalOpen.value = true;
};

// Update the store list after saving changes
const updateStoreList = (updatedStore: any) => {
  if (updatedStore.id) {
    // Update existing store
    const index = storeList.value.findIndex((s) => s.id === updatedStore.id);
    if (index !== -1) {
      storeList.value[index] = updatedStore;
    }
  } else {
    // Add new store
    updatedStore.id = Date.now(); // Temporary ID
    storeList.value.push(updatedStore);
  }
};

// Filtered data based on search input
const filteredData = computed(() => {
  if (!filters.value) {
    return storeList.value;
  } else {
    return storeList.value.filter((item) =>
      item.name.match(new RegExp(filters.value, "i")) ||
      item.email.match(new RegExp(filters.value, "i"))
    );
  }
});
</script>


<template>
  <div>
    <div class="card-grid-toolbar">
      <VControl icon="lucide:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search stores..."
        />
      </VControl>
      <div class="buttons">
        <VButton color="primary" raised @click="openAddModal">
          <span class="icon">
            <i aria-hidden="true" class="fas fa-plus" />
          </span>
          <span>New Store</span>
        </VButton>
      </div>
    </div>

    <div class="card-grid card-grid-v3">
      <VPlaceholderPage
        :class="[filteredData.length !== 0 && 'is-hidden']"
        title="No matching stores found."
        subtitle="Try different search terms or criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/images/illustrations/placeholders/search-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/images/illustrations/placeholders/search-3-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>

      <TransitionGroup
        name="list"
        tag="div"
        class="columns is-multiline is-flex-tablet-p is-half-tablet-p"
      >
        <div v-for="store in filteredData" :key="store.id" class="column is-4">
          <div class="card-grid-item">
            <VAvatar size="large" :picture="store.logo" squared />
            <h3 class="dark-inverted">{{ store.name }}</h3>
            <p>{{ store.email }}</p>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <VIcon icon="lucide:eye" />
                </span>
                <span>View</span>
              </button>
              <button
                class="button v-button is-dark-outlined"
                @click="openEditModal(store)"
              >
                <span class="icon">
                  <VIcon icon="lucide:edit-2" />
                </span>
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Modal Component -->
    <!-- <StoreModal 
    v-if="modalOpen"
      :modalOpen="modalOpen"
      :project="selectedProject"
      @close="()=>{modalOpen = false}"
      @save="updateStoreList"
    /> -->

    <StoreModal 
    :modalOpen="modalOpen"
      :project="selectedProject"
      @close="()=>{modalOpen = false}"
      @save="updateStoreList"
    />

    
  </div>

</template>


<style lang="scss">
@import "/@src/scss/abstracts/all";

.card-grid {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.card-grid-v3 {
  .card-grid-item {
    @include vuero-s-card;

    position: relative;
    text-align: center;
    padding: 30px;

    .h-toggle {
      position: absolute;
      top: 28px;
      inset-inline-end: 10px;
      transform: scale(0.85);
    }

    > .v-avatar {
      display: block;
      margin: 0 auto 10px;
      border-radius: 16px;

      .avatar {
        object-fit: cover;
        border: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);
        box-shadow: var(--light-box-shadow);
      }

      .badge {
        bottom: 22px;
        inset-inline-end: -12px;
      }
    }

    > h3 {
      font-size: 1.1rem;
      font-weight: 600;
      font-family: var(--font-alt);
      color: var(--dark-text);
    }

    > p {
      font-size: 0.9rem;
    }

    .description {
      padding: 12px 0;
    }

    .people {
      display: flex;
      justify-content: center;
      padding: 8px 0 30px;

      .v-avatar {
        margin: 0 4px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .button {
        width: calc(50% - 4px);
        color: var(--light-text);

        &:hover,
        &:focus {
          border-color: color-mix(in oklab, var(--fade-grey), black 4%);
          color: var(--primary);
          box-shadow: var(--light-box-shadow);
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v3 {
    .card-grid-item {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .card-grid-v3 .card-grid-item > h3 {
    font-size: 1rem;
  }
}
</style>
