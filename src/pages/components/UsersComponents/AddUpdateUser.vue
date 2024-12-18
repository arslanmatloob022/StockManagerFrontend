<script setup lang="ts">
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";

const notyf = useNotyf();
const api = useApi();

const props = withDefaults(
  defineProps<{
    openUserModal?: boolean;
  }>(),
  {
    openUserModal: false,
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

const addUpdateUserHandler = () => {
  try {
  } catch (err) {
    console.log(err);
  }
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
  store: "",
});

const userRoles = ref([
  { value: "ultraAdmin", label: "Ultra Admin" },
  { value: "superAdmin", label: "Super Admin" },
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "distributer", label: "Distributer" },
  { value: "retailer", label: "Retailer" },
]);
</script>

<template>
  <VModal
    is="form"
    :open="props.openUserModal"
    size="medium"
    actions="right"
    title="User Information"
    rounded
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
      </div>
    </template>
    <template #action> </template>
    <template #cancel> </template>
  </VModal>
</template>
<style lang="scss" scoped></style>
