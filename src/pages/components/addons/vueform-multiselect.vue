<script setup lang="ts">
const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'vueform/multiselect'
})

useHead({
  title: 'vueform/multiselect - Addons - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'lucide:home',
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'Addons',
        },
        {
          label: 'vueform/multiselect',
          to: '/components/addons/vueform-multiselect',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Autocomplete-->
        <MultiselectAutocompleteDocumentation />

        <!--Simple select-->
        <MultiselectBaseDocumentation />

        <!--Multiselect-->
        <MultiselectMultipleObjectDocumentation />

        <!--Multiselect custom label-->
        <MultiselectMultipleCustomLabelDocumentation />

        <!--Disabled option-->
        <MultiselectDisabledOptionDocumentation />

        <!--Tags-->
        <MultiselectTagsBaseDocumentation />

        <!--Slot-->
        <MultiselectSelectSlotDocumentation />

        <!--Slot search-->
        <MultiselectSelectSlotSearchDocumentation />

        <!--Slot search-->
        <MultiselectSelectSlotUsersDocumentation />

        <!--Slot icons search-->
        <MultiselectSelectSlotIconsDocumentation />

        <!--Tags images-->
        <MultiselectTagsImageSlotDocumentation />

        <!--Tags users-->
        <MultiselectTagsCustomSlotDocumentation />

        <!--Tags images stacked-->
        <MultiselectTagsImagesStackedDocumentation />

        <!--Tags users stacked-->
        <MultiselectTagsUsersStackedDocumentation />

        <div class="pb-6 mb-6" />
      </div>
      <div
        v-if="toc.length"
        class="column is-3 toc-column"
      >
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
