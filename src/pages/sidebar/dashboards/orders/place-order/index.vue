<script setup lang="ts">
import PlaceOrderComponent from "/@src/pages/components/OrdersComponent/PlaceOrderComponent.vue";

const props = withDefaults(
  defineProps<{
    activeTab?: "project" | "team" | "tasks";
  }>(),
  {
    activeTab: "project",
  }
);

const pageTitle = useVueroContext<string>("page-title");
onMounted(() => {
  pageTitle.value = "Place Order";
});

useHead({
  title: "Place Order",
});
</script>

<template>
  <div class="project-details">
    <PlaceOrderComponent></PlaceOrderComponent>
  </div>
</template>

<style lang="scss"></style>
