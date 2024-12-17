<script setup lang="ts">
import ItemsList from "/@src/pages/components/StockComponents/ItemsList.vue";
import StoresList from "/@src/pages/components/StoresComponents/StoresList.vue";

const pageTitle = useVueroContext<string>("page-title");
onMounted(() => {
  pageTitle.value = "Manage Stores";
});

useHead({
  title: "Manage Stores",
});
</script>

<template>
  <StoresList />
</template>
