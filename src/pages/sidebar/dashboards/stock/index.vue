<script setup lang="ts">
import ItemsList from "/@src/pages/components/StockComponents/ItemsList.vue";

const pageTitle = useVueroContext<string>("page-title");
onMounted(() => {
  pageTitle.value = "Manage Stock";
});

useHead({
  title: "Manage Stock",
});
</script>

<template>
  <ItemsList />
</template>
