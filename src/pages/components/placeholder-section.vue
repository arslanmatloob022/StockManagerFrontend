<script setup lang="ts">
import { VPlaceholderSectionMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VPlaceholderSection'
})

useHead({
  title: 'VPlaceholderSection - Components - Vuero',
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
          label: 'VPlaceholderSection',
          to: '/components/placeholder-section',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <div class="columns is-vcentered">
          <div class="column is-6">
            <VCard>
              <VPlaceholderSection
                title="You were invited"
                subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
              >
                <template #image>
                  <VAvatar
                    picture="https://media.cssninja.io/content/avatars/22.jpg"
                    badge="/images/icons/flags/united-states-of-america.svg"
                  />
                </template>
              </VPlaceholderSection>
            </VCard>
          </div>

          <div class="column is-6">
            <VPlaceholderSection
              title="Go Premium"
              subtitle="Unlock more features and business tools by going premium"
            >
              <template #action>
                <VButtons align="centered">
                  <VButton color="primary">
                    View plans
                  </VButton>
                </VButtons>
              </template>
            </VPlaceholderSection>
          </div>
        </div>

        <DocumentationMeta
          name="VPlaceholderSection"
          :meta="VPlaceholderSectionMeta"
        />
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
