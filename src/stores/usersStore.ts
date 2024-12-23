import { defineStore } from "pinia";
import { ref } from "vue";
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";
import { convertToFormData } from "/@src/commonScripts/commonComponents";
import { useStore } from "/@src/stores/useStore";

interface UserData {
  username: string;
  email: string;
  phone_number: string;
  role: string;
  password?: string;
  last_login: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  store: string;
}

export const useUserStore = defineStore("userStore", () => {
  const api = useApi();
  const notyf = useNotyf();
  const store = useStore();
  const loading = ref(false);

  const userDataModel = ref<UserData>({
    username: "",
    email: "",
    phone_number: "",
    role: "",
    password: "",
    last_login: "",
    is_active: false,
    is_staff: false,
    is_superuser: false,
    store: store.loggedStore.id,
  });

  const userRoles = ref([
    { value: "ultraAdmin", label: "Ultra Admin" },
    { value: "superAdmin", label: "Super Admin" },
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "distributer", label: "Distributer" },
    { value: "retailer", label: "Retailer" },
  ]);

  const addUser = async (): Promise<void> => {
    try {
      loading.value = true;
      await api.post("/user/", convertToFormData(userDataModel.value, ""));
      notyf.success("User added successfully");
    } catch (error) {
      console.error(error);
      notyf.error("Failed to add user");
    } finally {
      loading.value = false;
    }
  };

  const updateUser = async (id: string): Promise<void> => {
    try {
      loading.value = true;
      const updatedData = { ...userDataModel.value };
      delete updatedData.password; // Avoid sending password if not updated
      await api.patch(`/user/${id}/`, convertToFormData(updatedData, ""));
      notyf.success("User updated successfully");
    } catch (error) {
      console.error(error);
      notyf.error("Failed to update user");
    } finally {
      loading.value = false;
    }
  };

  const deleteUser = async (id: string): Promise<void> => {
    try {
      loading.value = true;
      await api.delete(`/user/${id}/`);
      notyf.success("User deleted successfully");
    } catch (error) {
      console.error(error);
      notyf.error("Failed to delete user");
    } finally {
      loading.value = false;
    }
  };

  return {
    userDataModel,
    userRoles,
    loading,
    addUser,
    updateUser,
    deleteUser,
  };
});
