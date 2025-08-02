<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { watch, ref } from 'vue'

// Define props and emits
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])

const content = ref(props.modelValue)

// Watch for changes and emit updates to parent
watch(content, (newVal) => {
  emit('update:modelValue', newVal)
})
</script>

<template>
  <div class="h-[400px]">
    <QuillEditor theme="snow" v-model:content="content" content-type="html" />
  </div>
</template>
