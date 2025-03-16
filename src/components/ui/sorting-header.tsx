import type { HeaderContext } from '@tanstack/react-table'

import type { PropsWithChildren } from 'react'

import { ArrowsUpDownIcon } from '@/components/icons/fixed-color/ArrowsUpDownIcon'
import { Button } from '@/components/ui/button'

export function SortingHeader<TData>({
  children,
  column,
}: PropsWithChildren<HeaderContext<TData, string>>) {
  const getDirection = () => {
    if (!column.getIsSorted()) {
      return undefined
    }
    return column.getIsSorted() === 'asc' ? 'up' : 'down'
  }

  return (
    <Button
      variant="ghost"
      className="gap-x-1 whitespace-pre-wrap !px-0"
      onClick={() => {
        if (column.getIsSorted() === 'desc') {
          column.clearSorting()
        } else {
          column.toggleSorting(column.getIsSorted() === 'asc')
        }
      }}
    >
      {children}
      <ArrowsUpDownIcon
        className="h-4 w-4 text-slate-400"
        direction={getDirection()}
      />
    </Button>
  )
}
