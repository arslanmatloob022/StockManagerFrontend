<script setup lang="ts">
const pageTitle = useVueroContext<string>("page-title");
onMounted(() => {
  pageTitle.value = "Manage Accounts";
});

useHead({
  title: "Manage Accounts",
});
</script>

<template>
  <p>Manage Accounts here</p>
</template>
