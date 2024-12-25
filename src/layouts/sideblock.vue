<script setup lang="ts">
import { useStore } from "../stores/useStore";
import type { SideblockItem } from "/@src/components/layouts/sideblock/sideblock.types";

const store = useStore();
const links = ref<SideblockItem[]>([
  {
    type: "link",
    label: "Dashboard",
    icon: "lucide:grid",
    to: "/sidebar/dashboards",
  },
  {
    type: "collapse",
    label: "Manage Store",
    id: "reports",
    icon: "lucide:briefcase",
    children: [
      {
        to: "/sidebar/dashboards/stock",
        label: "Stock",
        icon: "lnil lnil-analytics-alt-1",
      },
      {
        to: "/sidebar/dashboards/batches",
        label: "Batch",
        icon: "lnil lnil-pie-chart",
      },
    ],
  },
  // {
  //   type: "link",
  //   label: "Manage Stock",
  //   icon: "lucide:briefcase",
  //   to: "/sidebar/dashboards/stock",
  // },
  {
    type: "link",
    label: "Manage Orders",
    icon: "lucide:message-circle",
    badge: 3,
    to: "/sidebar/dashboards/orders",
  },
  {
    type: "link",
    label: "Accounts",
    icon: "lucide:book",
    to: "/sidebar/dashboards/accounts",
  },
  {
    type: "link",
    label: "Users",
    icon: "lucide:users",
    to: "/sidebar/dashboards/users",
  },
  {
    type: "link",
    label: "Stores",
    icon: "lucide:building",
    to: "/sidebar/dashboards/our-stores",
  },

  // {
  //   type: "divider",
  // },
  // {
  //   type: "collapse",
  //   id: "settings",
  //   label: "Settings",
  //   icon: "lucide:settings",
  //   children: [
  //     {
  //       to: "/sidebar/layouts",
  //       label: "General",
  //       icon: "lnil lnil-home",
  //     },
  //     {
  //       to: "/sidebar/dashboards/stocks",
  //       label: "Security",
  //       icon: "lnil lnil-lock-alt",
  //     },
  //     {
  //       to: "/sidebar/dashboards/sales",
  //       label: "Transactions",
  //       icon: "lnil lnil-coin",
  //     },
  //   ],
  // },
  // {
  //   type: "collapse",
  //   id: "starters",
  //   label: "Starters",
  //   icon: "lucide:zap",
  //   children: [
  //     {
  //       to: "/starters/sidebar-blank-page-1",
  //       label: "Regular Sidebar",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sidebar-blank-page-2",
  //       label: "Curved Sidebar",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sidebar-blank-page-3",
  //       label: "Colored Sidebar",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sidebar-blank-page-4",
  //       label: "Curved Colored",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sidebar-blank-page-4",
  //       label: "Curved Colored Sidebar",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sidebar-blank-page-5",
  //       label: "Labels Sidebar",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sidebar-blank-page-6",
  //       label: "Labels Hover Sidebar",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sidebar-blank-page-7",
  //       label: "Float Sidebar",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sideblock-blank-page-1",
  //       label: "Regular Sideblock",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sideblock-blank-page-2",
  //       label: "Curved Sideblock",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sideblock-blank-page-3",
  //       label: "Colored Sideblock",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/sideblock-blank-page-4",
  //       label: "Curved Colored",
  //       icon: "lnil lnil-layout",
  //     },
  //     {
  //       to: "/starters/navbar-blank-page-1",
  //       label: "Regular Navbar",
  //       icon: "lnil lnil-layout-alt",
  //     },
  //     {
  //       to: "/starters/navbar-blank-page-2",
  //       label: "Fading Navbar",
  //       icon: "lnil lnil-layout-alt",
  //     },
  //     {
  //       to: "/starters/navbar-blank-page-3",
  //       label: "Colored Navbar",
  //       icon: "lnil lnil-layout-alt",
  //     },
  //     {
  //       to: "/starters/navbar-blank-page-4",
  //       label: "Dropdown Navbar",
  //       icon: "lnil lnil-layout-alt",
  //     },
  //     {
  //       to: "/starters/navbar-blank-page-5",
  //       label: "Colored Dropdown",
  //       icon: "lnil lnil-layout-alt",
  //     },
  //     {
  //       to: "/starters/navbar-blank-page-6",
  //       label: "Clean Navbar",
  //       icon: "lnil lnil-layout-alt",
  //     },
  //     {
  //       to: "/starters/navbar-blank-page-7",
  //       label: "Clean Center Navbar",
  //       icon: "lnil lnil-layout-alt",
  //     },
  //     {
  //       to: "/starters/navbar-blank-page-8",
  //       label: "Clean Fade Navbar",
  //       icon: "lnil lnil-layout-alt",
  //     },
  //   ],
  // },
]);
</script>

<template>
  <SideblockLayout :links class="my-layout">
    <!-- Propagating the context to the default slot -->
    <template #default="context">
      <slot v-bind="context" />
    </template>

    <template #logo>
      <RouterLink to="/">
        <AnimatedLogo width="36px" />
      </RouterLink>

      <h3 class="is-hidden-mobile ml-2">
        {{ store.loggedStore.name }}
      </h3>
    </template>

    <template #toolbar>
      <ToolbarThemeToggle />
      <ToolbarLanguage />
      <ToolbarNotification />
      <ToolbarActivity />
    </template>

    <template #toolbar-mobile>
      <ToolbarNotificationMobile />
      <ToolbarUserProfile />
    </template>

    <template #sideblock-end>
      <ToolbarUserProfile end />
      <LayoutSwitcher class="search-link" />
      <ToolbarSearch />
    </template>

    <template #extra>
      <CircularMenu />

      <PanelLanguages />
      <PanelActivity />
      <PanelSearch />
      <PanelTask />

      <ClientOnly>
        <VReloadPrompt app-name="Vuero" />
      </ClientOnly>
    </template>
  </SideblockLayout>
</template>
