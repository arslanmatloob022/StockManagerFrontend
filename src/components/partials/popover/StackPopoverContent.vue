<script setup lang="ts">
export type Stack = {
  logo: string
  name: string
  description: string
  subtitle?: string
  homepage?: string
  github?: string
}

const props = defineProps<{
  stack: Stack
}>()
</script>

<template>
  <div class="v-popover-profile has-loader">
    <div class="profile-popover-block">
      <div class="profile-popover-wrapper">
        <div
          v-if="props.stack.logo"
          class="popover-avatar"
        >
          <img
            class="avatar"
            :src="props.stack.logo"
            alt=""
          >
        </div>
        <div class="popover-meta">
          <span class="stack-meta">
            <span class="stackname dark-inverted">{{ props.stack.name }}</span>
          </span>
          <span
            v-if="props.stack.subtitle"
            class="job-title mb-1"
          >{{
            props.stack.subtitle
          }}</span>
          <span class="bio">{{ props.stack.description }}</span>
        </div>
      </div>
      <div class="popover-actions">
        <a
          v-if="props.stack.homepage"
          class="popover-icon"
          :href="props.stack.homepage"
        >
          <VIcon
            icon="lucide:link"
          />
        </a>
        <a
          v-if="props.stack.github"
          class="popover-icon"
          :href="props.stack.github"
        >
          <VIcon
            icon="lucide:github"
          />
        </a>
      </div>
    </div>
  </div>
</template>
