import prismadb from '@/lib/prismadb'
import { format } from 'date-fns'
import { SizesClient } from './components/client'
import { ColorColumnProps } from './components/columns'

const ColorsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedColors: ColorColumnProps[] = colors.map(size => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: format(size.createdAt, 'MMMM do, yyyy')
  }))

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <SizesClient data={formattedColors} />
      </div>
    </div>
  )
}

export default ColorsPage
