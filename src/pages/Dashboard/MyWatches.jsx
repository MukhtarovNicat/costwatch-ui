import React, { useState } from 'react'
import { Edit3, Trash2, TrendingUp, X } from 'lucide-react'
import AmazonIcon from '../../assets/companyLogos/amazon.png'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const MyWatches = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const watchesData = [
    { id: 1, name: "Sony WH-1000XM5 Headphones", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "ACTIVE" },
    { id: 2, name: "Sony WH-1000XM5 Pema", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "ACTIVE" },
    { id: 3, name: "Sony WH-1000XM5 Headphones", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "EXPIRED" },
    { id: 4, name: "Sony WH-1000XM5 Pema", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "ACTIVE" }
  ];

  const mockHistoryData = [
    { date: 'June 20', price: 380 },
    { date: 'June 22', price: 365 },
    { date: 'June 25', price: 348 },
    { date: 'June 28', price: 355 },
    { date: 'July 01', price: 348 },
  ];

  const handleOpenChart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">My Watches</h1>
      </div>

      <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs p-6 overflow-hidden">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Your Active Price Watches</h3>
        
        <div className="w-full overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full min-w-[800px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                <th className="p-4">Product</th>
                <th className="p-4">Source</th>
                <th className="p-4">Current Price</th>
                <th className="p-4">Target Price</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {watchesData.map((watch) => (
                <tr key={watch.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 flex items-center gap-3 max-w-xs">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 p-1 flex items-center justify-center shrink-0">
                      <img src={watch.logo} alt={watch.source} className="w-full h-full object-contain" />
                    </div>
                    <span className="truncate block text-slate-800 font-semibold">{watch.name}</span>
                  </td>
                  
                  <td className="p-4"><img src={watch.logo} alt={watch.source} className="h-4 w-auto object-contain" /></td>
                  
                  <td className="p-4 text-slate-900 font-bold">${watch.currentPrice.toFixed(2)}</td>
                  <td className="p-4 text-indigo-600 font-bold">${watch.targetPrice.toFixed(2)}</td>
                  
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${
                      watch.status === 'ACTIVE' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-rose-50 text-rose-700 border-rose-100'
                    }`}>
                      {watch.status}
                    </span>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-4 text-slate-400">
                      <button className="hover:text-slate-600 transition-colors cursor-pointer" title="Edit">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="hover:text-rose-600 transition-colors cursor-pointer" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleOpenChart(watch)}
                        className="hover:text-indigo-600 text-slate-400 transition-colors cursor-pointer" 
                        title="Price History Chart"
                      >
                        <TrendingUp className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl border border-slate-100 p-6 relative animate-fade-in">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Price Insights</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">{selectedProduct?.name}</h3>
              <p className="text-xs text-slate-500 mt-0.5">Historical price changes for the last 30 days.</p>
            </div>

            <div className="w-full h-64 bg-slate-50 rounded-xl p-4 border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockHistoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} domain={['dataMin - 10', 'dataMax + 10']} />
                  <Tooltip formatter={(value) => [`$${value}`, 'Price']} />
                  <Line type="monotone" dataKey="price" stroke="#18888A" strokeWidth={3} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default MyWatches