import React, { useState } from 'react'
import { Link, Search, DollarSign, Play, Edit3, Trash2 } from 'lucide-react'
import TrendyolIcon from '../../assets/companyLogos/trendyol.png'
import AmazonIcon from '../../assets/companyLogos/amazon.png'

const DashboardHome = () => {
  const [productUrl, setProductUrl] = useState('');
  const [alertPrice, setAlertPrice] = useState('');

  const activeWatches = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Wireless Headphones",
      source: "Amazon",
      logo: AmazonIcon,
      currentPrice: 348.00,
      targetPrice: 299.99,
      status: "ACTIVE"
    },
    {
      id: 2,
      name: "Sony WH-1000XM5 Pema Black Edition",
      source: "Amazon",
      logo: AmazonIcon,
      currentPrice: 348.00,
      targetPrice: 299.99,
      status: "ACTIVE"
    },
    {
      id: 3,
      name: "Trendyol Smart Watch Series 8 Pro",
      source: "Trendyol",
      logo: TrendyolIcon,
      currentPrice: 85.50,
      targetPrice: 70.00,
      status: "ACTIVE"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Price Watch Dashboard
        </h1>
      </div>

      <div className="w-full bg-[#1A365D] rounded-2xl p-6 shadow-sm border border-slate-800 text-white">
        <h3 className="text-lg font-bold mb-4 tracking-wide">Create New Price Watch</h3>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Paste Product URL (e.g., Amazon, eBay, BestBuy, Trendyol...)" 
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                className="w-full h-12 bg-white text-slate-800 pl-4 pr-4 rounded-xl text-sm font-medium border border-transparent focus:outline-hidden focus:ring-2 focus:ring-[#18888A] placeholder-slate-400"
              />
            </div>
            <button className="h-12 px-6 bg-[#0F2342] border border-slate-700 hover:bg-[#152e54] text-white font-semibold text-sm rounded-xl transition-all cursor-pointer shadow-xs active:scale-98">
              Analyze
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 pr-3 bg-slate-50 rounded-l-xl h-full">
                <DollarSign className="w-4 h-4 text-slate-500" />
              </div>
              <input 
                type="number" 
                placeholder="Set Alert Price ($)" 
                value={alertPrice}
                onChange={(e) => setAlertPrice(e.target.value)}
                className="w-full h-12 bg-white text-slate-800 pl-16 pr-4 rounded-xl text-sm font-medium border border-transparent focus:outline-hidden focus:ring-2 focus:ring-[#18888A] placeholder-slate-400"
              />
            </div>

            <button className="w-full h-12 bg-[#18888A] hover:bg-[#157577] text-white font-bold text-sm rounded-xl transition-all shadow-xs active:scale-99 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider">
              <Play className="w-4 h-4 fill-white" />
              Start Watching
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs p-6 overflow-hidden">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Your Active Watches</h3>
        
        <div className="w-full overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                <th className="p-4">Product Name</th>
                <th className="p-4">Source</th>
                <th className="p-4">Current Price</th>
                <th className="p-4">Target Price</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {activeWatches.map((watch) => (
                <tr key={watch.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 flex items-center gap-3 max-w-xs">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 p-1 flex items-center justify-center shrink-0">
                      <img src={watch.logo} alt={watch.source} className="w-full h-full object-contain" />
                    </div>
                    <span className="truncate block text-slate-800 font-semibold" title={watch.name}>
                      {watch.name}
                    </span>
                  </td>
                  
                  <td className="p-4 text-slate-500">{watch.source}</td>
                  
                  <td className="p-4 text-slate-900 font-bold">${watch.currentPrice.toFixed(2)}</td>
                  
                  <td className="p-4 text-indigo-600 font-bold">${watch.targetPrice.toFixed(2)}</td>
                  
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {watch.status}
                    </span>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-3 text-slate-400">
                      <button className="hover:text-[#18888A] transition-colors cursor-pointer" title="Edit">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="hover:text-rose-600 transition-colors cursor-pointer" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default DashboardHome