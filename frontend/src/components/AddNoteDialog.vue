<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Button from '@/components/ui/button/Button.vue'
import { Plus } from 'lucide-vue-next'
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button size="sm" onclick="">
        <Plus />
        Add Note
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter> Save changes </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
