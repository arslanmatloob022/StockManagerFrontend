<script setup lang="ts">
const emit = defineEmits(['toggleMobileConversation'])

const { onceError } = useImageError()
</script>

<template>
  <div
    id="navbar-conversation-5"
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
        Irina V.
      </div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="https://media.cssninja.io/content/avatars/23.jpg"
          alt=""
          data-user-popover="21"
          @error.once="onceError($event, 150)"
        >
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="https://media.cssninja.io/content/avatars/23.jpg"
            alt=""
            data-user-popover="0"
            @error.once="onceError($event, 150)"
          >
          <div class="chat-msg-date">
            Sent at 11:12am
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Do you have a moment?
          </div>
          <div class="chat-msg-text">
            I need some help on something Iam working on.
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
            Sent at 11:14am
          </div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            Sure
          </div>
          <div class="chat-msg-text">
            I'll drop by your office.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
