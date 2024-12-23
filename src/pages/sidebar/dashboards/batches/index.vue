<script setup lang="ts">
import ItemsList from "/@src/pages/components/StockComponents/ItemsList.vue";

const pageTitle = useVueroContext<string>("page-title");
onMounted(() => {
  pageTitle.value = "Manage Batches";
});

useHead({
  title: "Manage Batches",
});
</script>

<template>
  <ItemsList />
</template>
