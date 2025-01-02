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
    openPlaceOrderModal?: boolean;
    orderData?: string;
  }>(),
  {
    openPlaceOrderModal: false,
    orderData: "",
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
  emits("update:callOnSuccess", orderData.value);
};

const orderData = ref({
  storeName: "",
  ownerName: "",
  description: "",
  phoneNumber: "",
  orderNumber: "",
  dateIssued: "",
  paymentDate: "",
  totalAmount: 0,
  totalItems: 0,
});

const fetchOrderData = async () => {};

const UpdateOrderInfoHandler = async () => {
  try {
    loading.value = true;
    closeModalHandler();
    callOnSuccessHandler();
  } catch (err) {
    console.error("Error while adding/updating product:", err);
    notyf.error("An error occurred. Please try again.");
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  orderData.value = props.orderData;
});
</script>

<template>
  <VModal
    is="form"
    :open="props.openPlaceOrderModal"
    size="medium"
    actions="right"
    title="Product Information"
    @submit.prevent="UpdateOrderInfoHandler"
    @close="closeModalHandler"
  >
    <template #content>
      <div class="columns is-multiline">
        <VField class="column is-6">
          <VLabel>Store Name</VLabel>
          <VControl>
            <VInput
              v-model="orderData.storeName"
              type="text"
              placeholder="Store Name"
            />
          </VControl>
        </VField>
        <VField class="column is-6">
          <VLabel>Owner Name</VLabel>
          <VControl>
            <VInput
              v-model="orderData.ownerName"
              type="number"
              placeholder="Owner Name"
            />
          </VControl>
        </VField>

        <VField class="column is-6">
          <VLabel>Phone Number</VLabel>
          <VControl>
            <VInput
              v-model="orderData.phoneNumber"
              type="phone"
              placeholder="Phone Number"
            />
          </VControl>
        </VField>

        <VField class="column is-6">
          <VLabel>Order Number</VLabel>
          <VControl>
            <VInput
              v-model="orderData.orderNumber"
              type="text"
              placeholder="Order Number"
            />
          </VControl>
        </VField>
        <VField class="column is-12">
          <VLabel>Order Description</VLabel>
          <VControl>
            <VTextarea
              v-model="orderData.description"
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
        {{ props.orderData ? "Update" : "Add" }} Info
      </VButton>
    </template>
    <template #cancel></template>
  </VModal>
</template>

<style lang="scss" scoped></style>
