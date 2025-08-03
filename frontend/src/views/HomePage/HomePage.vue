<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import type { Note } from '@/types/note'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { columns } from './columns'

const data = ref<Note[]>([])

onMounted(async () => {
  const { data: notes } = await axios.get<Note[]>(`${import.meta.env.VITE_API_URL}/api/notes/`)
  data.value = notes
})
</script>

<template>
  <div class="container py-10 mx-auto lg:max-w-5xl">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>
