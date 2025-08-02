<script lang="ts" setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import CategorySelect from '@/components/CategorySelect.vue'
import type { Note } from '@/types/note'

const router = useRouter()
const route = useRoute()

const content = ref('')
const title = ref('')
const category = ref('')

const loading = ref(false)

onMounted(async () => {
  try {
    const { data } = await axios.get<Note>(`http://localhost:8000/api/notes/${route.params.id}`)
    content.value = data.content!
    title.value = data.title!
    category.value = data.category!
  } catch (error) {
    console.error(error)
  }
})

const handleSubmit = async () => {
  if (!title.value || !content.value || !category.value) return
  try {
    loading.value = true
    await axios.patch(`http://localhost:8000/api/notes/${route.params.id}/`, {
      title: title.value,
      content: content.value,
      category: category.value,
    })
    router.push('/')
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

const handleCategoryChange = (value: string) => {
  category.value = value
}
</script>

<template>
  <div class="h-screen w-screen">
    <div class="container mx-auto max-w-5xl space-y-4 py-8">
      <div class="flex space-x-4">
        <Input placeholder="Title" v-model="title" />
        <CategorySelect @update:category="handleCategoryChange" :value="category" />
      </div>
      <div class="h-[400px]">
        <QuillEditor theme="snow" v-model:content="content" content-type="html" />
        <div class="flex justify-end py-4">
          <Button @click="handleSubmit" :disabled="loading">Save Changes</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AddNotePage',
}
</script>
