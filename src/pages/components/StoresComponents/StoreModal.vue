<script setup lang="ts">
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";
import StoreModal from "./StoreModal.vue";

const notyf = useNotyf();
const api = useApi();
const props = defineProps<{
  modalOpen: boolean;
  project: {
    name: string;
    owner_name: string;
    phone_number: string;
    address: string;
    id: string;
  } | null;
}>();

const emit = defineEmits(["close", "save"]);

const localStore = ref({
  id: "",
  name: "",
  owner_name: "",
  phone_number: "",
  address: "",
});

// Sync props.project with localStore when the modal opens
watch(
  () => props.project,
  (newProject) => {
    if (newProject) {
      localStore.value = { ...newProject };
    } else {
      localStore.value = {
        name: "",
        owner_name: "",
        phone_number: "",
        address: "",
        id: "",
      };
    }
  },
  { immediate: true }
);

const saveStore = async () => {
  try {
    const method = localStore.value.id ? "patch" : "post";
    const url = localStore.value.id
      ? `/store/${localStore.value.id}/`
      : "/store/";

    await api[method](url, localStore.value);

    emit("save", { ...localStore.value });
    emit("close");
  } catch (error) {
    console.error("Error saving store:", error);
  }
};

const closeModal = () => {
  emit("close");
};
onMounted(() => {
  console.log("prps", props.modalOpen);
});
</script>

<template>
  <VModal
    is="form"
    @submit.prevent="saveStore"
    :title="localStore.id ? 'Edit Store' : 'Add Store'"
    :open="props.modalOpen"
    size="medium"
    actions="right"
    @close="closeModal"
  >
    <template #content>
      <VField>
        <VLabel>Store Name*</VLabel>
        <VControl>
          <VInput
            required
            v-model="localStore.name"
            type="text"
            placeholder="Enter store name"
          />
        </VControl>
      </VField>

      <VField>
        <VLabel>Owner Name*</VLabel>
        <VControl>
          <VInput
            required
            v-model="localStore.owner_name"
            type="text"
            placeholder="Enter owner name"
          />
        </VControl>
      </VField>

      <VField>
        <VLabel>Phone Number</VLabel>
        <VControl>
          <VInput
            v-model="localStore.phone_number"
            type="tel"
            placeholder="Enter phone number"
          />
        </VControl>
      </VField>

      <VField>
        <VLabel>Store Address*</VLabel>
        <VControl>
          <VInput
            required
            v-model="localStore.address"
            type="text"
            placeholder="Enter address"
          />
        </VControl>
      </VField>
    </template>

    <template #action>
      <VButton color="primary" raised type="submit">Save</VButton>
    </template>
  </VModal>
</template>
