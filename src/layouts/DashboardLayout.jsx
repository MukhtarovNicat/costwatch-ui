import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, Eye, Bell, Settings, LogOut, User } from 'lucide-react'

const DashboardLayout = () => {
  return (
    <div className="w-full h-screen flex bg-slate-50 overflow-hidden">
      
      <aside className="w-64 h-full bg-white border-r border-slate-200 flex flex-col justify-between shrink-0">
        <div>
          <div className="h-20 flex items-center px-6 border-b border-slate-100">
            <span className="text-[#18888A] font-extrabold text-2xl tracking-tight">CostWatch</span>
          </div>

          <nav className="p-4 space-y-1">
            <NavLink 
              to="/dashboard" 
              end
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-[#18888A]/10 text-[#18888A]' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>

            <NavLink 
              to="/dashboard/my-watches" 
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-[#18888A]/10 text-[#18888A]' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Eye className="w-5 h-5" />
              <span>My Watches</span>
            </NavLink>

            <NavLink 
              to="/dashboard/alerts" 
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-[#18888A]/10 text-[#18888A]' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Bell className="w-5 h-5" />
              <span>Alerts History</span>
            </NavLink>

            <NavLink 
              to="/dashboard/settings" 
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-[#18888A]/10 text-[#18888A]' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Settings className="w-5 h-5" />
              <span>Account Settings</span>
            </NavLink>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl text-sm font-semibold transition-all cursor-pointer">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 h-full flex flex-col overflow-hidden">
        
        {/* NAVBAR */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-bold text-slate-800">CostWatch Panel</h2>
          
          <div className="flex items-center gap-3 cursor-pointer p-1.5 hover:bg-slate-50 rounded-full transition-colors">
            <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
              <User className="w-5 h-5 text-slate-600" />
            </div>
            <span className="text-sm font-semibold text-slate-700 pr-2">Sarah</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default DashboardLayout