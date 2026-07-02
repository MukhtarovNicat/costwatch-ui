import React, { useState } from 'react'
import { Edit3, Trash2, TrendingUp, X, AlertTriangle, CheckCircle, Save } from 'lucide-react'
import AmazonIcon from '../../assets/companyLogos/amazon.png'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const MyWatches = () => {
  // Mövcut Qrafik Modalı State-ləri
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // YENİ: EDİT VƏ DELETE MODAL STATE-LƏRİ
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Edit üçün keçici form state-ləri
  const [editTargetPrice, setEditTargetPrice] = useState('');
  const [editStatus, setEditStatus] = useState('ACTIVE');

  // Dinamik Data Massivi (Daxili vəziyyəti dəyişə bilmək üçün statik massiv)
  const [watchesData, setWatchesData] = useState([
    { id: 1, name: "Sony WH-1000XM5 Headphones", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "ACTIVE" },
    { id: 2, name: "Sony WH-1000XM5 Pema", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "ACTIVE" },
    { id: 3, name: "Sony WH-1000XM5 Headphones", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "EXPIRED" },
    { id: 4, name: "Sony WH-1000XM5 Pema", source: "Amazon", logo: AmazonIcon, currentPrice: 348.00, targetPrice: 299.99, status: "ACTIVE" }
  ]);

  const mockHistoryData = [
    { date: 'June 20', price: 380 },
    { date: 'June 22', price: 365 },
    { date: 'June 25', price: 348 },
    { date: 'June 28', price: 355 },
    { date: 'July 01', price: 348 },
  ];

  // Qrafiki Açan Funksiya
  const handleOpenChart = (product) => {
    setSelectedProduct(product);
    setIsChartModalOpen(true);
  };

  // Edit Modalı Açan Funksiya
  const handleOpenEdit = (product) => {
    setSelectedProduct(product);
    setEditTargetPrice(product.targetPrice);
    setEditStatus(product.status);
    setIsEditModalOpen(true);
  };

  // Delete Modalı Açan Funksiya
  const handleOpenDelete = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  // Editi Yadda Saxlayan Funksiya
  const handleSaveEdit = (e) => {
    e.preventDefault();
    setWatchesData(prev => prev.map(item => 
      item.id === selectedProduct.id 
        ? { ...item, targetPrice: parseFloat(editTargetPrice), status: editStatus }
        : item
    ));
    setIsEditModalOpen(false);
  };

  // Məhsulu Massivdən Silən Funksiya (Real-time filter)
  const handleConfirmDelete = () => {
    setWatchesData(prev => prev.filter(item => item.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
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
                      <button 
                        onClick={() => handleOpenEdit(watch)}
                        className="hover:text-[#18888A] transition-colors cursor-pointer" 
                        title="Edit Watch"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      
                      <button 
                        onClick={() => handleOpenDelete(watch)}
                        className="hover:text-rose-600 transition-colors cursor-pointer" 
                        title="Delete Watch"
                      >
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

      {isChartModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl border border-slate-100 p-6 relative animate-fade-in">
            <button onClick={() => setIsChartModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-5 h-5" /></button>
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
                You are about to stop tracking <span className="font-semibold text-slate-800">"{selectedProduct?.name}"</span>. This tracking item will be deleted permanently.
              </p>
              <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-4 border-t border-slate-150/60">
                <button type="button" onClick={() => setIsDeleteModalOpen(false)} className="h-11 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer">No, Cancel</button>
                <button type="button" onClick={handleConfirmDelete} className="h-11 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl cursor-pointer shadow-md">Yes, Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default MyWatches