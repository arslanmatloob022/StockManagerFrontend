<script setup lang="ts">
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";
import { convertToFormData } from "/@src/commonScripts/commonComponents";
import { useStore } from "/@src/stores/useStore";
import { onMounted } from "vue";
import { useProducts } from "/@src/stores/products";

const products = useProducts();
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
  // image: null | File | String;
}

const productDataModel = ref<ProductData>({
  name: "",
  description: "",
  price: "",
  quantity: "",
  tag: [],
  // store: store.loggedStore.id,
  store: "90fea8e0-4b77-4b87-b638-70b4f7f23b60",
  // image: null,
});

// Fetch product data if editing
const fetchProductData = async () => {
  if (!props.productId) return;

  try {
    loading.value = true;
    const { data } = await api.get(`/product/${props.productId}/`);
    productDataModel.value = {
      ...data,
      tag: Array.isArray(data.tag) ? data.tag : data.tag, // Ensure tag is an array
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

const addUpdateUserHandler = async () => {
  try {
    loading.value = true;

    const payload = {
      ...productDataModel.value,
      tag: JSON.stringify(productDataModel.value.tag),
    };

    const ProductData = convertToFormData(payload, "image");
    products.addProduct(ProductData);
    closeModalHandler();
    callOnSuccessHandler();
  } catch (err) {
    console.error("Error while adding/updating product:", err);
    notyf.error("An error occurred. Please try again.");
  } finally {
    loading.value = false;
  }
};
const onAddFile = (error: any, fileInfo: any) => {
  if (error) {
    console.error(error);
    return;
  }

  const _file = fileInfo.file as File;
  if (_file) {
    productDataModel.value.image = _file;
  }
};

const onRemoveFile = (error: any, fileInfo: any) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(fileInfo);
  productDataModel.value.image = null;
};

onMounted(() => {
  if (props.productId) {
    fetchProductData();
  }
});
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
        <div class="column is-6">
          <div class="columns is-multiline">
            <VField class="column is-12">
              <VLabel>Product Name</VLabel>
              <VControl>
                <VInput
                  v-model="productDataModel.name"
                  type="text"
                  placeholder="Product Name"
                />
              </VControl>
            </VField>
            <VField class="column is-12">
              <VLabel>Price (Unit)</VLabel>
              <VControl>
                <VInput
                  v-model="productDataModel.price"
                  type="number"
                  placeholder="Unit Price"
                />
              </VControl>
            </VField>
          </div>
        </div>
        <div class="column is-6">
          <VField label="Product Image">
            <VControl>
              <VFilePond
                class="profile-filepond"
                name="profile_filepond"
                :chunk-retry-delays="[500, 1000, 3000]"
                label-idle="<i class='lnil lnil-cloud-upload'></i>"
                :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
                :image-preview-height="140"
                :image-resize-target-width="140"
                :image-resize-target-height="140"
                image-crop-aspect-ratio="1:1"
                style-panel-layout="compact circle"
                style-load-indicator-position="center bottom"
                style-progress-indicator-position="right bottom"
                style-button-remove-item-position="left bottom"
                style-button-process-item-position="right bottom"
                @addfile="onAddFile"
                @removefile="onRemoveFile"
              />
            </VControl>
          </VField>
        </div>

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
