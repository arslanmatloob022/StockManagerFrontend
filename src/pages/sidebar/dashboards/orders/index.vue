<script setup lang="ts">
import OrdersList from "/@src/pages/components/OrdersComponent/OrdersList.vue";

const pageTitle = useVueroContext<string>("page-title");
onMounted(() => {
  pageTitle.value = "Manage Order";
});

useHead({
  title: "Manage Order",
});
</script>

<template>
  <div>
    <OrdersList />
  </div>
</template>
