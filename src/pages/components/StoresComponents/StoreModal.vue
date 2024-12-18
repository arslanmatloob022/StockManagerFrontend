<script setup lang="ts">

const props = defineProps<{
  modalOpen: boolean;
  project: { name: string; email: string; logo: string } | null;
}>();

const emit = defineEmits(["close", "save"]);

const localStore = ref({
  name: "",
  email: "",
  logo: "",
});

// Sync props.project with localStore when the modal opens
watch(
  () => props.project,
  (newProject) => {
    if (newProject) {
      localStore.value = { ...newProject };
    } else {
      localStore.value = { name: "", email: "", logo: "" };
    }
  },
  { immediate: true }
);

const saveStore = () => {
  emit("save", { ...localStore.value });
  emit("close");
};

const closeModal = () => {
  emit("close");
};
onMounted(() => {
    console.log("prps",props.modalOpen)
})
</script>

<template>
    
  <VModal title="test" :open="props.modalOpen"  @close="closeModal">
    <template #content>
      <div class="field">
        <label class="label">Store Name</label>
        <div class="control">
          <input
            class="input"
            v-model="localStore.name"
            placeholder="Enter store name"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            v-model="localStore.email"
            placeholder="Enter email"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Logo URL</label>
        <div class="control">
          <input
            class="input"
            v-model="localStore.logo"
            placeholder="Enter logo URL"
          />
        </div>
      </div>
    </template>
    <template #action>
      <VButton color="primary" raised @click="saveStore">Save</VButton>
      <VButton color="dark" outlined @click="closeModal">Cancel</VButton>
    </template>
  </VModal>
</template>
