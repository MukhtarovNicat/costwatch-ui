import React from 'react'
import { Mail, MonitorCheck } from 'lucide-react';
import AmazonLogo from '../../assets/social.png'

const MainBottom = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-10 mt-10">
        
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#91CFCC]/20 flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#91CFCC]" />
          </div>
          <span className="text-sm font-medium text-slate-700">Email Notifications</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#91CFCC]/20 flex items-center justify-center">
            <img className="w-5 h-5 object-contain" src={AmazonLogo} alt="Amazon Logo" />
          </div>
          <span className="text-sm font-medium text-slate-700">Major Retailer Support</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#91CFCC]/20 flex items-center justify-center">
            <MonitorCheck className="w-5 h-5 text-[#91CFCC]" />
          </div>
          <span className="text-sm font-medium text-slate-700">Simplified Setup</span>
        </div>

    </div>
  )
}

export default MainBottom