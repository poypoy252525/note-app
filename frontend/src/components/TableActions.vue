<script setup lang="ts">
import axios from 'axios'
import Button from './ui/button/Button.vue'
import { useRouter } from 'vue-router'
import { Pencil, Trash, Eye } from 'lucide-vue-next'

const props = defineProps<{
  id: number
}>()

const router = useRouter()

const handleDelete = async () => {
  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/notes/${props.id}/`)
    await router.replace({
      path: router.currentRoute.value.fullPath,
      query: {
        ...router.currentRoute.value.query,
        refresh: new Date().getTime().toString(),
      },
    })
  } catch (error) {
    console.error(error)
  }
}

const handleView = () => {
  router.push(`/${props.id}`)
}
</script>

<template>
  <div class="flex justify-end mr-4 space-x-2">
    <Button size="icon" variant="outline" @click="handleView"><Eye /></Button>
    <Button size="icon" variant="outline" @click="router.push(`/${props.id}/update`)"
      ><Pencil
    /></Button>
    <Button size="icon" variant="destructive" @click="handleDelete"><Trash /></Button>
  </div>
</template>
