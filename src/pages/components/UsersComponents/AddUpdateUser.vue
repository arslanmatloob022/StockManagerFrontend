<script setup lang="ts">
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";
import { convertToFormData } from "/@src/commonScripts/commonComponents";
import { useStore } from "/@src/stores/useStore";
import { useUserStore } from "/@src/stores/usersStore";

const userStore = useUserStore();
const store = useStore();
const notyf = useNotyf();
const api = useApi();
const loading = ref(false);
const props = withDefaults(
  defineProps<{
    openUserModal?: boolean;
    userId?: string;
  }>(),
  {
    openUserModal: false,
    userId: "",
  }
);

const emits = defineEmits<{
  (e: "update:closeModalHandler", value: boolean): void;
  (e: "update:callOnSuccess", value: any): null;
}>();

const closeModalHandler = () => {
  emits("update:closeModalHandler", false);
};

const callOnSuccessHandler = () => {
  emits("update:callOnSuccess", null);
};

interface UserData {
  username: string;
  email: string;
  phone_number: string;
  role: string;
  password: string;
  last_login: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  store: string;
}

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
  store: "90fea8e0-4b77-4b87-b638-70b4f7f23b60",
});

const userRoles = ref([
  { value: "ultraAdmin", label: "Ultra Admin" },
  { value: "superAdmin", label: "Super Admin" },
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "distributer", label: "Distributer" },
  { value: "retailer", label: "Retailer" },
]);

const addUpdateUserHandler = async () => {
  try {
    loading.value = true;
    if (props.userId) {
      delete userDataModel.value.password;
      const resp = await api.patch(
        `/user/${props.userId}/`,
        convertToFormData(userDataModel.value, "")
      );
    } else {
      const resp = await api.post(
        "/user/",
        convertToFormData(userDataModel.value, "")
      );
    }
    callOnSuccessHandler();
    closeModalHandler();
    notyf.success("User added successfully");
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};

const getUserDetail = async () => {
  try {
    loading.value = true;
    const resp = await api.get(`/user/${props.userId}/`);
    userDataModel.value = resp.data;
  } catch (err) {
    console.log(err);
  }
};

const storesList = ref([]);
const getStores = async () => {
  try {
    loading.value = true;
    const resp = await api.get(`/store/${props.userId}`);
    storesList.value = resp.data;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  if (props.userId) {
    getUserDetail();
  }
  getStores();
});
</script>

<template>
  <VModal
    is="form"
    :open="props.openUserModal"
    size="medium"
    actions="right"
    :title="props.userId ? 'Update User' : 'Add User'"
    @submit.prevent="addUpdateUserHandler"
    @close="closeModalHandler"
  >
    <template #content>
      <div class="columns is-multiline">
        <VField class="column is-6">
          <VLabel>Full Name</VLabel>
          <VControl>
            <VInput
              v-model="userDataModel.username"
              type="text"
              placeholder="User Full Name"
            />
          </VControl>
        </VField>
        <VField class="column is-6">
          <VLabel>Email</VLabel>
          <VControl>
            <VInput
              v-model="userDataModel.email"
              type="mail"
              placeholder="email"
            />
          </VControl>
        </VField>
        <VField class="column is-6">
          <VLabel>Phone Number</VLabel>
          <VControl>
            <VInput
              v-model="userDataModel.phone_number"
              type="phone"
              placeholder="Phone Number"
            />
          </VControl>
        </VField>
        <VField class="column is-6">
          <VField>
            <VLabel>User Role</VLabel>
            <VControl>
              <VSelect v-model="userDataModel.role">
                <VOption value=""> Select a role </VOption>
                <VOption
                  v-for="(role, index) in userRoles"
                  :key="index"
                  :value="role.value"
                >
                  {{ role.label }}
                </VOption>
              </VSelect>
            </VControl>
          </VField>
        </VField>
        <VField class="column is-6">
          <VLabel>Password</VLabel>
          <VControl>
            <VInput
              v-model="userDataModel.password"
              type="password"
              placeholder="Enter Password"
            />
          </VControl>
        </VField>
        <VField class="column is-3">
          <VLabel>Account Status</VLabel>
          <VControl>
            <VSwitchBlock
              v-model="userDataModel.is_active"
              color="primary"
              label="Active user"
            />
          </VControl>
        </VField>
        <VField class="column is-3">
          <VLabel>In staff</VLabel>
          <VControl>
            <VSwitchBlock
              color="warning"
              v-model="userDataModel.is_staff"
              label="Staff"
            />
          </VControl>
        </VField>
        <VField class="column is-6">
          <VControl>
            <VSelect v-model="userDataModel.store" class="is-rounded">
              <VOption value=""> Select a Store </VOption>
              <VOption
                v-for="store in storesList"
                :key="store.id"
                :value="store.id"
              >
                {{ store.name }}
              </VOption>
            </VSelect>
          </VControl>
        </VField>
      </div>
    </template>
    <template #action>
      <VButton type="submit" color="primary">{{
        props.userId ? "Update User" : "Add User"
      }}</VButton>
    </template>
    <template #cancel> </template>
  </VModal>
</template>
<style lang="scss" scoped></style>
