<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Onboarding Page 5'
})

useHead({
  title: 'Onboarding Page 5 - Navbar - Vuero',
})
</script>

<template>
  <OnboardingV5 />
</template>
