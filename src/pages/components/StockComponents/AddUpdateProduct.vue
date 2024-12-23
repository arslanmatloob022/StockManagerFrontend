<script setup lang="ts">
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";
import { convertToFormData } from "/@src/commonScripts/commonComponents";
import { useStore } from "/@src/stores/useStore";
const notyf = useNotyf();
const api = useApi();
const loading = ref(false);
const store = useStore();
const props = withDefaults(
  defineProps<{
    openProductModal?: boolean;
    productId?: string;
  }>(),
  {
    openProductModal: false,
    productId: "",
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

interface productData {
  name: string;
  description: string;
  price: string;
  quantity: string;
  tag: string;
  store: string;
}

const productDataModel = ref<productData>({
  name: "",
  description: "",
  price: "",
  quantity: "",
  tag: "",
  store: store.loggedStore.id,
});

const addUpdateUserHandler = async () => {
  try {
    loading.value = true;
    const resp = await api.post(
      "/product/",
      convertToFormData(productDataModel.value, "")
    );
    closeModalHandler();
    notyf.success("User added successfully");
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <VModal
    is="form"
    :open="props.openProductModal"
    size="medium"
    actions="right"
    title="Product Information"
    @submit.prevent="addUpdateUserHandler"
    @close="closeModalHandler"
  >
    <template #content>
      <div class="columns is-multiline">
        <VField class="column is-6">
          <VLabel>Product Name</VLabel>
          <VControl>
            <VInput
              v-model="productDataModel.name"
              type="text"
              placeholder="Product Name"
            />
          </VControl>
        </VField>
        <VField class="column is-6">
          <VLabel>Price (Unit)</VLabel>
          <VControl>
            <VInput
              v-model="productDataModel.price"
              type="number"
              placeholder="Unit Price"
            />
          </VControl>
        </VField>

        <VField class="column is-6">
          <VLabel>Quantity</VLabel>
          <VControl>
            <VInput
              v-model="productDataModel.quantity"
              type="number"
              placeholder="Quantity"
            />
          </VControl>
        </VField>
        <VField class="column is-6">
          <VLabel>Tag</VLabel>
          <VControl>
            <VInput
              v-model="productDataModel.tag"
              type="text"
              placeholder="Product tag"
            />
          </VControl>
        </VField>
        <VField class="column is-12">
          <VLabel>Description</VLabel>
          <VControl>
            <VTextarea
              v-model="productDataModel.description"
              type="text"
              rows="2"
              placeholder="Description"
            />
          </VControl>
        </VField>
      </div>
    </template>
    <template #action>
      <VButton type="submit" color="primary">
        {{ props.productId ? "Update" : "Add" }}Product</VButton
      >
    </template>
    <template #cancel> </template>
  </VModal>
</template>
<style lang="scss" scoped></style>
