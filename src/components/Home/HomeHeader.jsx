import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 shadow-xs sticky top-0 z-50">
      <div className='flex justify-between items-center p-4 max-w-7xl mx-auto h-20'>
        
        {/* Loqo */}
        <div>
          <h1 className="text-[#18888A] font-bold text-[26px] md:text-[30px] tracking-tight">
            Cost Watch
          </h1>
        </div>

        <nav className='hidden md:flex items-center'>
          <ul className='flex gap-6 items-center m-0 p-0 list-none'>
            <li className='text-[16px] lg:text-[18px] font-bold hover:text-[#18888A] transition-colors duration-300'>
              <a href="#features">Features</a>
            </li>
            <li className='text-[16px] lg:text-[18px] font-bold hover:text-[#18888A] transition-colors duration-300'>
              <a href="#integrations">Integrations</a>
            </li>
            <li className='text-[16px] lg:text-[18px] font-bold hover:text-[#18888A] transition-colors duration-300'>
              <a href="#pricing">Pricing</a>
            </li>
            <li className='text-[16px] lg:text-[18px] font-bold hover:text-[#18888A] transition-colors duration-300'>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <NavLink 
                to="/login" 
                className='inline-block bg-[#18888A] text-[16px] lg:text-[18px] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#18888A]/90 transition-all duration-300 shadow-xs active:scale-98'
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='md:hidden flex items-center'>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='text-slate-700 hover:text-[#18888A] transition-colors cursor-pointer'
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-slate-50 ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className='flex flex-col gap-4 p-5 list-none m-0'>
          <li className='text-[16px] font-bold text-slate-700 hover:text-[#18888A] transition-colors' onClick={() => setIsOpen(false)}>
            <a href="#features" className="block w-full">Features</a>
          </li>
          <li className='text-[16px] font-bold text-slate-700 hover:text-[#18888A] transition-colors' onClick={() => setIsOpen(false)}>
            <a href="#pricing" className="block w-full">Pricing</a>
          </li>
          <li className='text-[16px] font-bold text-slate-700 hover:text-[#18888A] transition-colors' onClick={() => setIsOpen(false)}>
            <a href="#integrations" className="block w-full">Integrations</a>
          </li>
          <li className='text-[16px] font-bold text-slate-700 hover:text-[#18888A] transition-colors' onClick={() => setIsOpen(false)}>
            <a href="#faq" className="block w-full">FAQ</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink 
              to="/login" 
              className='block w-full text-center bg-[#18888A] text-white py-2.5 rounded-md font-semibold'
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default HomeHeader