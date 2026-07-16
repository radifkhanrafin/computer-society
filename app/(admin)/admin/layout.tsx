import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminTopbar } from '@/components/admin/AdminTopbar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-slate-900">
      {/* <AdminSidebar /> */}
      <div className="flex-1 flex flex-col  ">
        {/* <AdminTopbar /> */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
          {children}
        </main>
      </div>
    </div>
  )
}
