<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Cards 3'
})

useHead({
  title: 'Grid Cards 3 - Navbar - Vuero',
})
</script>

<template>
  <CardsGridV3 />
</template>
