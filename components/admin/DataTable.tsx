'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

interface Column {
  key: string
  label: string
  render?: (value: any, item: any) => React.ReactNode
}

interface DataTableProps {
  data: any[]
  columns: Column[]
  onEdit: (item: any) => void
  onDelete: (item: any) => void
  loading?: boolean
}

export function DataTable({ data, columns, onEdit, onDelete, loading }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  // console.log('[DataTable] Props received:', data, columns, loading)
  const filteredData = data.filter((item) => {
    // console.log("Item:", item);

    return data.some((col) => {
      const value = item[col.key];

      return String(value ?? "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  });
  // console.log('[DataTable] Filtered data:', filteredData, 'Search term:', searchTerm)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1)
          }}
          className="bg-slate-700/50 border-slate-600 text-white"
        />
      </div>

      <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-slate-700/50 bg-slate-800/80">
              {columns.map((col) => (
                <th key={col.key} className="px-3 py-3 text-left text-sm font-semibold text-slate-300">
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-slate-400">
                  Loading...
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-slate-400">
                  No data found
                </td>
              </tr>
            ) : (
              paginatedData.map((item, idx) => (
                <motion.tr
                  key={item._id || idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors"
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4 text-sm text-slate-300">
                      {col.render ? col.render(item[col.key], item) : item[col.key]?.toString() || '-'}
                    </td>
                  ))}
                  <td className="px-6 py-6 text-sm  flex gap-2 items-center justify-center">
                    <Button
                      size="sm"
                      onClick={() => onEdit(item)}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => onDelete(item)}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Delete
                    </Button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400">
            Page {currentPage} of {totalPages}
          </p>
          <div className="space-x-2">
            <Button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              variant="outline"
              className="bg-slate-700/50 border-slate-600 text-slate-300"
            >
              Previous
            </Button>
            <Button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              variant="outline"
              className="bg-slate-700/50 border-slate-600 text-slate-300"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  )
}
