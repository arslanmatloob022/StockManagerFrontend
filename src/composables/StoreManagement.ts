import { ref, computed, onMounted } from "vue";
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";

export function useStoreManagement() {
  const notyf = useNotyf();
  const api = useApi();
  const loading=ref(false)
  const filters = ref("");
  const modalOpen = ref(false); 
  const selectedProject = ref<any>(null); 
  const storeList = ref([]);

 
  const fetchStoreList = async () => {
    loading.value=true;
    try {
      const response = await api.get("/store/"); // Adjust the endpoint if needed
      storeList.value = response.data;
      setTimeout(() => {
        loading.value=false;
      }, 15000);
    } catch (error) {
      console.error("Error fetching stores:", error);
    }
  };

  onMounted(() => {
    fetchStoreList();
  });

  // Open modal to add a new store
  const openAddModal = () => {
    selectedProject.value = null; // Clear selected store for adding
    modalOpen.value = true;
  };

  // Open modal to edit an existing store
  const openEditModal = (store: any) => {
    selectedProject.value = { ...store }; // Populate selected store for editing
    modalOpen.value = true;
  };

  // Filtered data based on search input
  const filteredData = computed(() => {
    if (!filters.value) {
      return storeList.value;
    } else {
      return storeList.value.filter(
        (item) =>
          item.name.match(new RegExp(filters.value, "i")) ||
          item.email.match(new RegExp(filters.value, "i"))
      );
    }
  });

  // Delete store
  const DeleteStore = async (id: any) => {
    try {
      await api.delete(`/store/${id}/`); // Adjust the endpoint if needed
      notyf.success("Store Deleted Successfully");
      fetchStoreList();
    } catch (error) {
      notyf.error("Store Delete Failed");
    }
  };

  return {
    filters,
    modalOpen,
    selectedProject,
    storeList,
    loading,
    filteredData,
    fetchStoreList,
    openAddModal,
    openEditModal,
    DeleteStore,
  };
}
