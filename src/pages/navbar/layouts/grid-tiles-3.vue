<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Tiles 3'
})

useHead({
  title: 'Grid Tiles 3 - Navbar - Vuero',
})
</script>

<template>
  <TilesGridV3 />
</template>
