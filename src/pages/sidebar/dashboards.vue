<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
const layoutSwitcher = useLayoutSwitcher()
</script>

<template>
  <component
    :is="(layoutSwitcher.dynamicLayoutComponent as any)"
    v-bind="layoutSwitcher.dynamicLayoutProps"
    close-on-change
    :open-on-mounted="true"
    default-sidebar="dashboard"
  >
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <Transition
        name="fade-fast"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </component>
</template>
