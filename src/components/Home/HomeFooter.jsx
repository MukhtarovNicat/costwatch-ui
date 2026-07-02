import React from 'react'

const HomeFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-100 py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-sm text-slate-500 text-center sm:text-left">
          <span>&copy; {currentYear} </span>
          <span className="font-semibold text-indigo-600">CostWatch</span>. 
          <span> Built with by </span>
          <span className="font-medium text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer">
            Nicat Mukhtarov
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
          <a href="#features" className="hover:text-slate-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-slate-600 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-slate-600 transition-colors">FAQ</a>
        </div>

      </div>
    </footer>
  )
}

export default HomeFooter