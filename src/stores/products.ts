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

export const useProducts = defineStore("productsStore", () => {
  const userSession = useUserSession();
  const store = useStore();
  const api = useApi();
  const loading = ref(false);
  const notyf = useNotyf();

  interface product {
    id: string;
    name: string;
    description: string | null;
    price: number;
    tag: string[];
    created_at: string;
    updated_at: string;
    store: string;
    image: null | File | String;
  }

  const productList = ref<product[]>([]);

  async function getStoreProducts() {
    loading.value = true;

    try {
      const response = await api.get(`/product/store/${store.loggedStore.id}/`);
      // const response = await api.get(
      //   `/product/store/90fea8e0-4b77-4b87-b638-70b4f7f23b60/`
      // );

      productList.value = response.data;
    } finally {
      loading.value = false;
    }
  }

  async function addProduct(payload: any) {
    loading.value = true;
    try {
      payload.append("store", store.loggedStore.id);
      const response = await api.post(`/product/`, payload);
      notyf.success("Product added Successfully");
      getStoreProducts();
    } finally {
      loading.value = false;
    }
  }
  async function updateProduct(id: any, payload: any) {
    loading.value = true;
    try {
      payload.append("store", store.loggedStore.id);
      const response = await api.patch(`/product/${id}/`, payload);
      notyf.info("Product updated Successfully");
      getStoreProducts();
    } finally {
      loading.value = false;
    }
  }
  async function deleteProduct(id: any) {
    loading.value = true;
    try {
      const response = await api.delete(`/product/${id}/`);
      notyf.success("Product deleted Successfully");
      getStoreProducts();
    } finally {
      loading.value = false;
    }
  }

  return {
    getStoreProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    productList,
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
  import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot));
}
