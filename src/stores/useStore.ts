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
// import { changeFavicon } from "../composable/useSupportElement";

export const useStore = defineStore("store", () => {
  const userSession = useUserSession();
  const api = useApi();
  const loading = ref(false);

  interface AssignedModuleInfo {
    id: string;
    name: string;
    value: string;
    description: string | null;
  }

  interface LoggedStore {
    id: string;
    name: string;
    owner_name: string;
    address: string;
    phone_number: string;
    created_at: string;
    updated_at: string;
    state: string;
    storeLogo: string;
    favIcon: string;
  }

  const loggedStore = ref<LoggedStore>({
    id: "",
    name: "",
    owner_name: "",
    address: "",
    phone_number: "",
    created_at: "",
    updated_at: "",
    state: "",
    storeLogo: "",
    favIcon: "",
  });

  async function loadStore(id: any) {
    loading.value = true;
    try {
      const response = await api.get(`/store/${id}/`);
      loggedStore.value = response.data;
    } finally {
      loading.value = false;
    }
  }

  async function loadRotaStat(stats: any) {}
  return {
    loadStore,
    loggedStore,
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
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
