<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])

const { onceError } = useImageError()
</script>

<template>
  <div
    id="navbar-conversation-9"
    class="chat-area-content"
  >
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <VIcon
          icon="lucide:menu"
        />
      </button>
      <div class="chat-area-title">
        Jimmy H.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://media.cssninja.io/content/avatars/22.jpg"
          alt=""
          data-user-popover="5"
          @error.once="onceError($event, 150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://media.cssninja.io/content/avatars/22.jpg"
            alt=""
            data-user-popover="5"
            @error.once="onceError($event, 150)"
          >
          <div class="chat-msg-date">
            Sent at 9:12am
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            We sould sync sometime today.
          </div>
          <div class="chat-msg-text">
            When are you available?
          </div>
        </div>
      </div>
      <div class="chat-msg owner">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            data-user-popover="3"
            @error.once="onceError($event, 150)"
          >
          <div class="chat-msg-date">
            Sent at 9:13am
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Probably in the afternoon.
          </div>
          <div class="chat-msg-text">
            I'll let you know.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
