<script setup lang="ts">
import ItemsList from "/@src/pages/components/StockComponents/ItemsList.vue";

const showItems = ref(false);
const pageTitle = useVueroContext<string>("page-title");
onMounted(() => {
  pageTitle.value = "Manage Stock";
});

useHead({
  title: "Manage Stock",
});
onMounted(() => {
  showItems.value = true;
});
</script>

<template>
  <div>
    <ItemsList v-if="showItems" />
  </div>
</template>
