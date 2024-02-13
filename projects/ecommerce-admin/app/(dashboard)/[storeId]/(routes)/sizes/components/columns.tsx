'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellActions } from './cell-actions'

export type SizeColumnProps = {
  id: string
  name: string
  value: string
  createdAt: string
}

export const columns: ColumnDef<SizeColumnProps>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'value',
    header: 'Value'
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
