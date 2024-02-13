'use client'

import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { OrderColumnProps, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'

interface OrderClientProps {
  data: OrderColumnProps[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
  data
}) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description='Manage orders for your store'
      />

      <Separator />

      <DataTable columns={columns} data={data} searchKey='label' />
    </>
  )
}
