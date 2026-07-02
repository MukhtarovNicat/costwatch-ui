import React, { useState } from 'react'
import { DollarSign, Play, Edit3, Trash2, TrendingUp, X, AlertTriangle, Save } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import TrendyolIcon from '../../assets/companyLogos/trendyol.png'
import AmazonIcon from '../../assets/companyLogos/amazon.png'

const DashboardHome = () => {
  const [productUrl, setProductUrl] = useState('');
  const [alertPrice, setAlertPrice] = useState('');

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [editTargetPrice, setEditTargetPrice] = useState('');
  const [editStatus, setEditStatus] = useState('ACTIVE');

  const [watchesData, setWatchesData] = useState([
    { id: 1, name: "Sony WH-1000XM5 Wireless Headphones", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "ACTIVE" },
    { id: 2, name: "Sony WH-1000XM5 Pema Black Edition", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "ACTIVE" },
    { id: 3, name: "Trendyol Smart Watch Series 8 Pro", source: "Trendyol", logo: TrendyolIcon, currentPrice: 85.50, targetPrice: 70.00, status: "ACTIVE" }
  ]);

  const mockHistoryData = [
    { date: 'June 20', price: 380 },
    { date: 'June 22', price: 365 },
    { date: 'June 25', price: 348 },
    { date: 'June 28', price: 355 },
    { date: 'July 01', price: 348 },
  ];

  const handleOpenEdit = (product) => {
    setSelectedProduct(product);
    setEditTargetPrice(product.targetPrice);
    setEditStatus(product.status);
    setIsEditModalOpen(true);
  };

  const handleOpenDelete = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleOpenChart = (product) => {
    setSelectedProduct(product);
    setIsChartModalOpen(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setWatchesData(prev => prev.map(item => 
      item.id === selectedProduct.id 
        ? { ...item, targetPrice: parseFloat(editTargetPrice), status: editStatus }
        : item
    ));
    setIsEditModalOpen(false);
  };

  // Məhsulu siyahıdan sil
  const handleConfirmDelete = () => {
    setWatchesData(prev => prev.filter(item => item.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
  };

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
              {watchesData.map((watch) => (
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
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${
                      watch.status === 'ACTIVE' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-rose-50 text-rose-700 border-rose-100'
                    }`}>
                      {watch.status}
                    </span>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-3 text-slate-400">
                      <button onClick={() => handleOpenEdit(watch)} className="hover:text-[#18888A] transition-colors cursor-pointer" title="Edit">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleOpenDelete(watch)} className="hover:text-rose-600 transition-colors cursor-pointer" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleOpenChart(watch)} className="hover:text-indigo-600 transition-colors cursor-pointer" title="Price History">
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

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl border border-slate-100 p-6 relative">
            <button onClick={() => setIsEditModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-5 h-5" /></button>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-slate-900">Edit Price Watch</h3>
              <p className="text-xs text-slate-500 mt-0.5 truncate max-w-xs">{selectedProduct?.name}</p>
            </div>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Target Price ($)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={editTargetPrice}
                  onChange={(e) => setEditTargetPrice(e.target.value)}
                  className="w-full h-11 border border-slate-200 rounded-xl px-4 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#18888A]/50 bg-white"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Watch Status</label>
                <select 
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full h-11 border border-slate-200 rounded-xl px-4 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#18888A]/50 bg-white cursor-pointer"
                >
                  <option value="ACTIVE">Active (Keep Tracking)</option>
                  <option value="EXPIRED">Expired (Pause Tracking)</option>
                </select>
              </div>
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-6">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="h-10 px-4 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer">Cancel</button>
                <button type="submit" className="h-10 px-5 bg-[#18888A] hover:bg-[#157577] text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5">
                  <Save className="w-3.5 h-3.5" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl border border-rose-50 p-6 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-4 border border-rose-100">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Delete this watch?</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed px-2">
                You are about to stop tracking <span className="font-semibold text-slate-800">"{selectedProduct?.name}"</span> permanently.
              </p>
              <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-4 border-t border-slate-150/60">
                <button type="button" onClick={() => setIsDeleteModalOpen(false)} className="h-11 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer">Cancel</button>
                <button type="button" onClick={handleConfirmDelete} className="h-11 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl cursor-pointer shadow-md">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isChartModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl border border-slate-100 p-6 relative animate-fade-in">
            <button onClick={() => setIsChartModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-5 h-5" /></button>
            <div className="mb-6">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Price Insights</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">{selectedProduct?.name}</h3>
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

export default DashboardHome