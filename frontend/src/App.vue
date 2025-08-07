<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { useRoute } from 'vue-router'
import 'vue-sonner/style.css'

const route = useRoute()
</script>

<template>
  <Toaster />
  <router-view :key="route.fullPath" />
</template>

<style scoped></style>
