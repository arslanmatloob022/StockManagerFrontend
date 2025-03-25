/**
 * This is a store that hold the messaging-v1 state
 * It uses the useFetch composition component to make the api calls
 *
 * @see /src/pages/messaging-v1.vue
 * @see /src/composable/useFetch.ts
 * @see /src/components/partials/chat/*.vue
 * @see /src/utils/api/chat
 */

import { ref, computed } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";
import { useApi } from "../composables/useApi";
import { useUserSession } from "./useUserSession";
import { useStore } from "./useStore";
import { useNotyf } from "../composables/notyf";
// import { changeFavicon } from "../composable/useSupportElement";

export const useBatches = defineStore("batchesStore", () => {
  const userSession = useUserSession();
  const store = useStore();
  const api = useApi();
  const loading = ref(false);
  const notyf = useNotyf();

  interface batch {
    id: string;
    quantity: number;
    purchase_price: number;
    sale_price: string;
    created_at: string | null;
    updated_at: string;
    product: string;
    store: string;
  }

  const batchesList = ref<batch[]>([]);

  async function getStoreBatches() {
    loading.value = true;
    try {
      const response = await api.get(`/batch/store/${store.loggedStore.id}/`);
      batchesList.value = response.data;
    } finally {
      loading.value = false;
    }
  }

  async function addBatch(payload: any) {
    loading.value = true;
    try {
      payload.append("store", store.loggedStore.id);
      const response = await api.post(`/batch/`, payload);
      notyf.success("Batch added Successfully");
      getStoreBatches();
    } finally {
      loading.value = false;
    }
  }
  async function updateBatch(id: any, payload: any) {
    loading.value = true;
    try {
      payload.append("store", store.loggedStore.id);
      const response = await api.patch(`/batch/${id}/`, payload);
      notyf.info("Batch updated Successfully");
      getStoreBatches();
    } finally {
      loading.value = false;
    }
  }

  async function deleteBatch(id: any) {
    loading.value = true;
    try {
      const response = await api.delete(`/batch/${id}/`);
      notyf.success("Batch deleted Successfully");
      getStoreBatches();
    } finally {
      loading.value = false;
    }
  }

  return {
    getStoreBatches,
    addBatch,
    updateBatch,
    deleteBatch,
    batchesList,
    loading,
  } as const;
});

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBatches, import.meta.hot));
}
