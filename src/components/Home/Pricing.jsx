import React from 'react'
import Trendyol from '../../assets/companyLogos/trendyol.png'
import Temu from '../../assets/companyLogos/temu.png'
import Birmarket from '../../assets/companyLogos/birmarket.png'
import { NavLink } from 'react-router-dom'

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col items-center justify-center gap-4 py-16 px-6 bg-slate-50/50">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-1">PRICING</h2>
        <p className="text-slate-500 text-sm mb-8 text-center">Choose the perfect retail tracking pack that fits your budget.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center max-w-5xl mx-auto w-full">

            <div className="flex flex-col items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 w-full max-w-sm">
                <div className="h-16 flex items-center justify-center">
                    <img className="h-12 w-auto object-contain" src={Trendyol} alt="Trendyol" />
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">Trendyol Pack</span>
                <NavLink to="/login" className="w-full text-center inline-block bg-[#268E8B] hover:bg-[#1f7370] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 tracking-wide">
                    Purchase pack for $1
                </NavLink>
            </div>

            <div className="flex flex-col items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 w-full max-w-sm">
                <div className="h-16 flex items-center justify-center">
                    <img className="h-12 w-auto object-contain" src={Temu} alt="Temu" />
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">Temu Pack</span>
                <NavLink to="/login" className="w-full text-center inline-block bg-[#268E8B] hover:bg-[#1f7370] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 tracking-wide">
                    Purchase pack for $1
                </NavLink>
            </div>
            
            <div className="flex flex-col items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 w-full max-w-sm">
                <div className="h-16 flex items-center justify-center">
                    <img className="h-12 w-auto object-contain" src={Birmarket} alt="Birmarket" />
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">Birmarket Pack</span>
                <NavLink to="/login" className="w-full text-center inline-block bg-[#268E8B] hover:bg-[#1f7370] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 tracking-wide">
                    Purchase pack for $1
                </NavLink>
            </div>

        </div>
    </div>
  )
}

export default Pricing