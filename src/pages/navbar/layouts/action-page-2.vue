<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Action Page 2'
})

useHead({
  title: 'Action Page 2 - Navbar - Vuero',
})
</script>

<template>
  <ActionPageV2 />
</template>
