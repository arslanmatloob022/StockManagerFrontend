<script setup lang="ts">
import { useStoreManagement } from '/@src/composables/StoreManagement';
import StoreModal from "./StoreModal.vue";

const {
  filters,
  modalOpen,
  selectedProject,
  storeList,
  fetchStoreList,
  openAddModal,
  openEditModal,
  filteredData,
  DeleteStore,
} = useStoreManagement();
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
            <h3 class="dark-inverted">{{ store?.name }}</h3>
            <p>Owner: {{ store?.owner_name }}</p>
            <div class=" mt-5">
              <VButton class="" color="info" rounded size="small">
               
                View
              </VButton>
              <VButton
                class="ml-2" color="primary" rounded size="small"
                @click="openEditModal(store)"
              >
               
                <span>Edit</span>
              </VButton>
              <VButton
                class="ml-2" color="danger" rounded size="small"
                @click="DeleteStore(store.id)"
              >
              
                <span>Delete</span>
              </VButton>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>


    <StoreModal 
    :modalOpen="modalOpen"
      :project="selectedProject"
      @close="()=>{modalOpen = false}"
      @save="fetchStoreList"
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
