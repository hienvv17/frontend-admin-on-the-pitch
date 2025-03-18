'use client'

import type {
  RowSelectionState,
  PaginationState,
  SortingState,
  ColumnDef,
  Row,
} from '@tanstack/react-table'

import {
  getSortedRowModel,
  functionalUpdate,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table'

import {
  TableHeader,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from '@/components/ui/table'

import { DataTablePagination } from './table-pagination'
import { cn } from '../utils'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onPaginationChange?: (paginationState: PaginationState) => void
  pagination: PaginationState
  onSortingChange?: (sortingState: SortingState) => void
  sorting?: SortingState
  pageCount?: number
  rowSelection?: RowSelectionState
  onRowSelectionChange?: (sortingState: RowSelectionState) => void
  onRowClick?: (data: Row<TData>) => void
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onPaginationChange,
  pagination,
  onSortingChange,
  sorting = [],
  pageCount,
  rowSelection = {},
  onRowSelectionChange,
  onRowClick,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: (updater) => {
      const newValue = functionalUpdate(updater, sorting)
      onSortingChange?.(newValue)
    },
    getSortedRowModel: getSortedRowModel(),
    pageCount,
    onPaginationChange: (updater) => {
      const newValue = functionalUpdate(updater, pagination)
      onPaginationChange?.(newValue)
    },
    onRowSelectionChange: (updater) => {
      const newValue = functionalUpdate(updater, rowSelection)
      onRowSelectionChange?.(newValue)
    },
    state: {
      sorting,
      pagination,
      rowSelection,
    },
    manualPagination: true,
    manualSorting: true,
  })

  return (
    <div>
      <div className="rounded-lg border border-slate-200">
        <Table>
          <TableHeader className="bg-slate-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        width: header.getSize(),
                      }}
                      className="font-semibold text-slate-500"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={cn({
                    'hover:cursor-pointer': !!onRowClick,
                  })}
                  onClick={
                    onRowClick
                      ? (e) => {
                          e.stopPropagation()

                          onRowClick(row)
                        }
                      : undefined
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="px-2 py-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  )
}
