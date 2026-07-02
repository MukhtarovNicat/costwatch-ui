import React from 'react'
import { MonitorCloud, Siren, MonitorSpeaker, FileChartColumn } from 'lucide-react';

const Features = () => {
  return (
    <div id="features" className="text-center py-16 max-w-7xl mx-auto px-6">
        {/* Başlıq dizaynı */}
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">FEATURES</h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-12 text-sm">Everything you need to smart-track your retail pricing and save more money.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            
            {/* ONE */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                    <MonitorCloud className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-800 text-base">1. Continuous Monitoring</span>
                    <p className="text-sm text-slate-500 leading-relaxed">Continuous monitoring and lowest price alert across major web stores.</p>
                </div>
            </div>

            {/* TWO */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                    <Siren className="w-6 h-6 text-rose-600" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-800 text-base">2. Target Price Alerts</span>
                    <p className="text-sm text-slate-500 leading-relaxed">Target price alerts that drop straight into your preferred notification channel.</p>
                </div>
            </div>

            {/* THREE */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <MonitorSpeaker className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-800 text-base">3. Multi-Device Sync</span>
                    <p className="text-sm text-slate-500 leading-relaxed">Sync your alerts and preferences smoothly across multiple devices in real-time.</p>
                </div>
            </div>

            {/* FOUR */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <FileChartColumn className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-800 text-base">4. Detailed Analytics</span>
                    <p className="text-sm text-slate-500 leading-relaxed">Access detailed analytics and insights about your tracking and shopping history.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Features