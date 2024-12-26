<script setup lang="ts">
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";
import { convertToFormData } from "/@src/commonScripts/commonComponents";
import { useStore } from "/@src/stores/useStore";
import { onMounted } from "vue";

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
  (e: "update:callOnSuccess", value: any): void;
}>();

const closeModalHandler = () => {
  emits("update:closeModalHandler", false);
};

const callOnSuccessHandler = () => {
  emits("update:callOnSuccess", null);
};

const tagsOptions = ref<string[]>([]);

interface ProductData {
  name: string;
  description: string;
  price: string;
  quantity: string;
  tag: string[];
  store: string;
}

const productDataModel = ref<ProductData>({
  name: "",
  description: "",
  price: "",
  quantity: "",
  tag: [],
  store: store.loggedStore.id,
});

// Fetch product data if editing
const fetchProductData = async () => {
  if (!props.productId) return;

  try {
    loading.value = true;
    const { data } = await api.get(`/product/${props.productId}/`);
    productDataModel.value = {
      ...data,
      tag: Array.isArray(data.tag) ? data.tag :data.tag, // Ensure tag is an array
      store: data.store || store.loggedStore.id,
    };
    tagsOptions.value = data.tag;
  } catch (err) {
    console.error("Error fetching product data:", err);
    notyf.error("Failed to load product details.");
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  if (props.productId) {
    fetchProductData();
  }
});

const addUpdateUserHandler = async () => {
  try {
    loading.value = true;

    const payload = {
      ...productDataModel.value,
      tag: JSON.stringify(productDataModel.value.tag), // Convert tag array to JSON string
    };

    if (props.productId) {
      // Update product
      await api.patch(`/product/${props.productId}/`, convertToFormData(payload, ""));
      notyf.success("Product updated successfully");
    } else {
      // Add product
      await api.post("/product/", convertToFormData(payload, ""));
      notyf.success("Product added successfully");
    }

    closeModalHandler();
    callOnSuccessHandler();
  } catch (err) {
    console.error("Error while adding/updating product:", err);
    notyf.error("An error occurred. Please try again.");
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
        <VField v-slot="{ id }" class="column is-6">
          <VLabel>Tags</VLabel>
          <VControl>
            <Multiselect
              v-model="productDataModel.tag"
              :attrs="{ id }"
              mode="tags"
              :searchable="true"
              :create-tag="true"
              :options="tagsOptions"
              placeholder="Add tags"
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
        {{ props.productId ? "Update" : "Add" }} Product
      </VButton>
    </template>
    <template #cancel></template>
  </VModal>
</template>

<style lang="scss" scoped></style>
