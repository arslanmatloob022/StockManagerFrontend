<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Profile Edit 2'
})

useHead({
  title: 'Profile Edit 2 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileExperience />
</template>
