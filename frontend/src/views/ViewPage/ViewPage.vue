<script setup lang="ts">
import type { Note } from '@/types/note'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const note = ref({} as Note)

onMounted(async () => {
  const { data } = await axios.get(`http://localhost:8000/api/notes/${route.params.id}`)
  note.value = data

  console.log(note.value)
})
</script>

<template>
  <div class="container max-w-5xl mx-auto space-y-4">
    <div class="flex flex-col py-6">
      <div class="font-bold text-3xl">{{ note.title }}</div>
      <div class="text-muted-foreground text-sm">Category - {{ note.category }}</div>
      <div class="text-muted-foreground text-xs">
        Last updated,
        {{
          new Date(note.updated_at!).toLocaleDateString('en-PH', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          })
        }}
      </div>
    </div>
    <div class="prose">
      <div v-html="note.content"></div>
    </div>
  </div>
</template>

<style>
.prose h1 {
  font-size: 2rem;
  font-weight: bold;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.prose h3 {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
