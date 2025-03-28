/**
 * This is a store that hold the messaging-v1 state
 * It uses the useFetch composition component to make the api calls
 *
 * @see /src/pages/messaging-v1.vue
 * @see /src/composable/useFetch.ts
 * @see /src/components/partials/chat/*.vue
 * @see /src/utils/api/chat
 */

import { acceptHMRUpdate, defineStore } from 'pinia'
import type { $Fetch } from 'ofetch'

export interface Conversation {
  id: number
  name: string
  lastMessage: string
  unreadMessages: boolean
  avatar: string
}
export interface Message {
  id: number
  conversationId: number
  messageId: number
  type: 'msg' | 'image' | 'imagelink' | 'system'
  sender: string | null
  avatar: string | null
  content: {
    time: string | null
    text?: string
    subtext?: string
    image_url?: string
    link_image?: string
    link_badge?: string
  }
}

const defaultConversation: Conversation = {
  id: 0,
  name: '',
  lastMessage: '',
  unreadMessages: false,
  avatar: '/images/avatars/placeholder.jpg',
}

export const useChat = defineStore('chat', () => {
  const $fetch = useApiFetch()
  const conversations = ref<Conversation[]>([])
  const messages = ref<Message[]>([])
  const selectedConversationId = ref(0)
  const addConversationOpen = ref(false)
  const mobileConversationDetailsOpen = ref(false)
  const loading = ref(false)

  const selectedConversation = computed(() => {
    const conversation = conversations.value?.find(
      item => item.id === selectedConversationId.value,
    )

    if (!conversation) {
      return defaultConversation
    }
    else {
      return conversation
    }
  })

  async function loadConversations(start = 0, limit = 10) {
    if (loading.value) return

    loading.value = true

    try {
      const response = await fetchConversations($fetch, start, limit)
      conversations.value = response.conversations ?? []
    }
    finally {
      loading.value = false
    }
  }

  async function selectConversastion(conversationId: number) {
    if (loading.value) return

    loading.value = true

    try {
      const response = await fetchMessages($fetch, conversationId)
      selectedConversationId.value = conversationId
      messages.value = response.messages
    }
    finally {
      loading.value = false
    }
  }

  function unselectConversation() {
    selectedConversationId.value = 0
    messages.value = []
  }

  function setAddConversationOpen(value: boolean) {
    addConversationOpen.value = value
  }

  function setMobileConversationDetailsOpen(value: boolean) {
    mobileConversationDetailsOpen.value = value
  }

  return {
    conversations,
    messages,
    selectedConversation,
    selectedConversationId,
    addConversationOpen,
    mobileConversationDetailsOpen,
    loading,
    loadConversations,
    setAddConversationOpen,
    setMobileConversationDetailsOpen,
    selectConversastion,
    unselectConversation,
  } as const
})

async function fetchConversations(
  $fetch: $Fetch,
  start = 0,
  limit = 20,
): Promise<{ conversations: Conversation[], count: number }> {
  let count = 0

  const { _data: conversations = [], headers } = await $fetch.raw<Conversation[]>(
    `/api/conversations`,
    {
      query: {
        _start: start,
        _limit: limit,
      },
    },
  )

  if (headers.has('X-Total-Count')) {
    count = parseInt(headers.get('X-Total-Count') ?? '0')
  }

  return { conversations, count }
}

async function fetchMessages(
  $fetch: $Fetch,
  conversationId: number,
  start = 0,
  limit = 20,
): Promise<{ messages: Message[], count: number }> {
  let count = 0

  const { _data: messages = [], headers } = await $fetch.raw<Message[]>(
    `/api/conversations/${conversationId}/messages?_start=${start}&_limit=${limit}`,
  )

  if (headers.has('X-Total-Count')) {
    count = parseInt(headers.get('X-Total-Count') ?? '0')
  }

  return { messages, count }
}

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useChat, import.meta.hot))
}
