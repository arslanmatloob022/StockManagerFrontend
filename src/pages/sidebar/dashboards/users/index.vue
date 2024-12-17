<script setup lang="ts">
import UsersList from "/@src/pages/components/UsersComponents/UsersList.vue";

const pageTitle = useVueroContext<string>("page-title");
onMounted(() => {
  pageTitle.value = "System Users";
});

useHead({
  title: "System Users",
});
</script>

<template>
  <UsersList />
</template>
