import React, { useState } from 'react'
import { User, Bell, ShieldAlert, CheckCircle } from 'lucide-react'
import googleIcon from '../../assets/google.png'

const AccountSettings = () => {
  // Switch state-ləri
  const [priceDropAlert, setPriceDropAlert] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <div className="max-w-3xl space-y-6 animate-fade-in">
      
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Account Settings</h1>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Profil Avatarı */}
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 shrink-0 text-xl font-bold text-slate-700">
              S
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Sarah From</h3>
              <div className="flex items-center gap-2 mt-1 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg w-fit">
                <img src={googleIcon} alt="Google" className="w-3.5 h-3.5 object-contain" />
                <span className="text-xs text-slate-600 font-medium">imian1@gmail.com</span>
              </div>
            </div>
          </div>
          
          <button className="h-10 px-5 bg-[#18888A] hover:bg-[#157577] text-white font-semibold text-sm rounded-xl transition-all cursor-pointer shadow-xs active:scale-98 self-start sm:self-center">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Bell className="w-4 h-4 text-[#18888A]" />
          <h3 className="text-md font-bold text-slate-900">Notification Preferences</h3>
        </div>

        <div className="divide-y divide-slate-100">
          <div className="flex items-center justify-between py-3.5">
            <div>
              <span className="block text-sm font-semibold text-slate-800">Price Drop Alerts</span>
              <span className="block text-xs text-slate-400 mt-0.5">Get instant emails when watched items hit your target price.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={priceDropAlert} 
                onChange={() => setPriceDropAlert(!priceDropAlert)} 
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#18888A]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3.5">
            <div>
              <span className="block text-sm font-semibold text-slate-800">Weekly Performance Report</span>
              <span className="block text-xs text-slate-400 mt-0.5">Receive a weekly digest of your tracked products and general price trends.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={weeklySummary} 
                onChange={() => setWeeklySummary(!weeklySummary)} 
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#18888A]"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-rose-100 shadow-xs p-6 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-rose-50/50 text-rose-700">
          <ShieldAlert className="w-4 h-4" />
          <h3 className="text-md font-bold">Danger Zone</h3>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-rose-50/30 p-4 rounded-xl border border-rose-100/50">
          <div>
            <span className="block text-sm font-bold text-slate-800">Delete Account</span>
            <span className="block text-xs text-slate-500 mt-0.5">Permanently delete your account and stop all price watches. This action is irreversible.</span>
          </div>
          <button className="h-10 px-4 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 hover:border-rose-300 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-xs active:scale-98 shrink-0">
            Delete Account
          </button>
        </div>
      </div>

    </div>
  )
}

export default AccountSettings