import TableActions from '@/components/TableActions.vue'
import type { Note } from '@/types/note'
import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'

export const columns: ColumnDef<Note>[] = [
  {
    accessorKey: 'title',
    header: () => h('div', 'Title'),
    cell: ({ row }) => {
      const title = row.getValue('title') as string
      return h('div', title)
    },
  },
  {
    accessorKey: 'category',
    header: () => h('div', 'Category'),
    cell: ({ row }) => {
      const category = row.getValue('category') as string
      return h('div', category)
    },
  },
  {
    accessorKey: 'updated_at',
    header: () => h('div', 'Last Updated'),
    cell: ({ row }) => {
      const rawDate = row.getValue('updated_at') as string
      const formattedDate = new Date(rawDate).toLocaleDateString('en-PH', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
      return h('div', formattedDate)
    },
  },
  {
    accessorKey: 'id',
    header: () => h('div', ''),
    cell: ({ row }) => {
      const id = row.getValue('id') as number
      return h(TableActions, { id })
    },
  },
]
