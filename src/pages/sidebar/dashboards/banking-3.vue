<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Banking 3'
})

useHead({
  title: 'Banking 3 - Sidebar - Vuero',
})
</script>

<template>
  <BankingDashboardV3 />
</template>
