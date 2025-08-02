<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ref, watch } from 'vue'

const emit = defineEmits<{
  (e: 'update:category', value: string): void
}>()

const selectedCategory = ref('')

watch(selectedCategory, (newVal) => {
  emit('update:category', newVal)
})

const props = defineProps<{ value?: string }>()

watch(
  () => props.value,
  (newVal) => {
    if (newVal) {
      selectedCategory.value = newVal
    }
  },
  { immediate: true },
)
</script>

<template>
  <Select v-model="selectedCategory">
    <SelectTrigger>
      <SelectValue placeholder="Select a Category" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Categories</SelectLabel>
        <SelectItem value="Daily">Daily</SelectItem>
        <SelectItem value="Personal">Personal</SelectItem>
        <SelectItem value="Works">Works</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
