import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import googleIcon from '../assets/google.png'

const Login = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-50">
      
      <div className="hidden md:flex flex-col items-center justify-center bg-white p-12 border-r border-slate-100 relative">
        
        <NavLink 
          to="/" 
          className="absolute top-8 left-8 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#18888A] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to home</span>
        </NavLink>

        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-[#18888A] font-bold text-[26px] md:text-[30px] tracking-tight">
            Cost Watch
          </h1>
          <div>
            <p className="text-slate-500 mt-1 text-md">Price tracking made simple.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 md:p-12 relative">
        
        <NavLink 
          to="/" 
          className="md:hidden absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#18888A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </NavLink>

        <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl md:shadow-xs border border-slate-150/60 md:border-slate-100 flex flex-col items-center text-center">
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
            Welcome to CostWatch
          </h2>

          <button className="w-full h-12 border border-slate-200 rounded-lg flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all shadow-xs active:scale-99 cursor-pointer select-none px-4">
            <img src={googleIcon} alt="Google" className="w-5 h-5 object-contain" />
            <span>Sign in with Google</span>
          </button>

          <p className="text-sm text-slate-500 mt-6 font-medium">
            Get started quickly and securely.
          </p>

        </div>
      </div>

    </div>
  )
}

export default Login