'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellActions } from './cell-actions'

export type CategoryColumnProps = {
  id: string
  name: string
  billboardLabel: string
  createdAt: string
}

export const columns: ColumnDef<CategoryColumnProps>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'billboardLabel',
    header: 'Billboard',
    cell: ({ row }) => row.original.billboardLabel
  },
  {
    accessorKey: 'createdAt',
    header: 'Date'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellActions data={row.original} />
  }
]
