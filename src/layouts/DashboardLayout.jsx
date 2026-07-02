import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, Eye, Bell, Settings, LogOut, User, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full h-screen flex bg-slate-50 overflow-hidden relative">
      
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity duration-300"
        />
      )}

      <aside className={`h-full bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 z-50 
        fixed md:relative top-0 bottom-0 left-0 transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isCollapsed ? 'md:w-20' : 'md:w-64'}`}
      >
        <div>
          <div className="h-20 flex items-center justify-between px-5 border-b border-slate-100 relative">
            <span className={`text-[#18888A] font-extrabold tracking-tight transition-all duration-200 ${isCollapsed ? 'text-xl mx-auto' : 'text-2xl'}`}>
              {isCollapsed ? 'CW' : 'CostWatch'}
            </span>
            
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex absolute -right-3 top-7 w-6 h-6 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-500 hover:text-[#18888A] shadow-xs cursor-pointer hover:scale-105 transition-all z-50"
            >
              {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
            </button>
          </div>

          <nav className="p-3 space-y-1">
            
            <NavLink 
              to="/dashboard" 
              end
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isCollapsed ? 'justify-center px-0' : ''} ${isActive ? 'bg-[#18888A]/10 text-[#18888A]' : 'text-slate-600 hover:bg-slate-50'}`}
              title={isCollapsed ? "Dashboard" : ""}
            >
              <LayoutDashboard className="w-5 h-5 shrink-0" />
              <span className={`transition-opacity duration-200 ${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
            </NavLink>

            <NavLink 
              to="/dashboard/my-watches" 
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isCollapsed ? 'justify-center px-0' : ''} ${isActive ? 'bg-[#18888A]/10 text-[#18888A]' : 'text-slate-600 hover:bg-slate-50'}`}
              title={isCollapsed ? "My Watches" : ""}
            >
              <Eye className="w-5 h-5 shrink-0" />
              <span className={`transition-opacity duration-200 ${isCollapsed ? 'hidden' : 'block'}`}>My Watches</span>
            </NavLink>

            <NavLink 
              to="/dashboard/alerts" 
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isCollapsed ? 'justify-center px-0' : ''} ${isActive ? 'bg-[#18888A]/10 text-[#18888A]' : 'text-slate-600 hover:bg-slate-50'}`}
              title={isCollapsed ? "Alerts History" : ""}
            >
              <Bell className="w-5 h-5 shrink-0" />
              <span className={`transition-opacity duration-200 ${isCollapsed ? 'hidden' : 'block'}`}>Alerts History</span>
            </NavLink>

            <NavLink 
              to="/dashboard/settings" 
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isCollapsed ? 'justify-center px-0' : ''} ${isActive ? 'bg-[#18888A]/10 text-[#18888A]' : 'text-slate-600 hover:bg-slate-50'}`}
              title={isCollapsed ? "Account Settings" : ""}
            >
              <Settings className="w-5 h-5 shrink-0" />
              <span className={`transition-opacity duration-200 ${isCollapsed ? 'hidden' : 'block'}`}>Account Settings</span>
            </NavLink>
          </nav>
        </div>

        <div className="p-3 border-t border-slate-100">
          <button className={`w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl text-sm font-semibold transition-all cursor-pointer ${isCollapsed ? 'justify-center px-0' : ''}`} title={isCollapsed ? "Logout" : ""}>
            <LogOut className="w-5 h-5 shrink-0" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 h-full flex flex-col overflow-hidden">
        
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 shrink-0">
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-600 hover:text-[#18888A] transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-lg md:text-xl font-bold text-slate-800">CostWatch Panel</h2>
          </div>
          
          <div className="flex items-center gap-3 cursor-pointer p-1.5 hover:bg-slate-50 rounded-full transition-colors">
            <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
              <User className="w-5 h-5 text-slate-600" />
            </div>
            <span className="text-sm font-semibold text-slate-700 pr-2 hidden sm:inline">Sarah</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default DashboardLayout