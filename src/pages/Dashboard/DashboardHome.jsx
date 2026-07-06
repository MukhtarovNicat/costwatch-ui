import React, { useState, useEffect } from 'react'
import { DollarSign, Play, Edit3, Trash2, TrendingUp, X, AlertTriangle, Save, Loader2 } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import TrendyolIcon from '../../assets/companyLogos/trendyol.png'
import AmazonIcon from '../../assets/companyLogos/amazon.png'

const DashboardHome = () => {
  const [productUrl, setProductUrl] = useState('');
  const [alertPrice, setAlertPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [editTargetPrice, setEditTargetPrice] = useState('');
  const [editStatus, setEditStatus] = useState('ACTIVE');

  const [watchesData, setWatchesData] = useState([]);
  const [chartData, setChartData] = useState([]);

  const token = localStorage.getItem('token');

  const fetchWatches = async () => {
    try {
      const response = await fetch('https://localhost:7003/api/PriceWatch/my-watches', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setWatchesData(data);
      }
    } catch (error) {
      console.error("Error fetching watches:", error);
    } finally {
      setGlobalLoading(false);
    }
  };

  useEffect(() => {
    fetchWatches();
  }, []);

  const handleCreateWatch = async (e) => {
    e.preventDefault();
    if (!productUrl || !alertPrice) return;

    setLoading(true);
    try {
      const response = await fetch('https://localhost:7003/api/PriceWatch/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
   body: JSON.stringify({
  productUrl: productUrl, 
  targetPrice: parseFloat(alertPrice)
})
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Skrap zamanı xəta yarandı.');

      alert(data.message);
      setProductUrl('');
      setAlertPrice('');
      fetchWatches(); 
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChart = async (product) => {
    setSelectedProduct(product);
    setIsChartModalOpen(true);
    
    try {
      const response = await fetch(`https://localhost:7003/api/PriceWatch/history/${product.id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setChartData(data); 
      }
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  const handleOpenEdit = (product) => {
    setSelectedProduct(product);
    setEditTargetPrice(product.targetPrice);
    setEditStatus(product.status ? 'ACTIVE' : 'EXPIRED');
    setIsEditModalOpen(true);
  };

  const handleOpenDelete = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

const handleSaveEdit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`https://localhost:7003/api/PriceWatch/update/${selectedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        targetPrice: parseFloat(editTargetPrice),
        status: editStatus === 'ACTIVE'
      })
    });

    if (response.ok) {
      setIsEditModalOpen(false);
      fetchWatches(); 
    } else {
      alert("Yenilənmə zamanı xəta baş verdi.");
    }
  } catch (error) {
    console.error("Error updating watch:", error);
  }
};

const handleConfirmDelete = async () => {
  try {
    const response = await fetch(`https://localhost:7003/api/PriceWatch/delete/${selectedProduct.id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (response.ok) {
      setIsDeleteModalOpen(false);
      fetchWatches();
    } else {
      alert("Silinmə zamanı xəta baş verdi.");
    }
  } catch (error) {
    console.error("Error deleting watch:", error);
  }
};

  const getLogo = (source) => {
    if (!source) return TrendyolIcon;
    return source.toLowerCase().includes('trendyol') ? TrendyolIcon : AmazonIcon;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Price Watch Dashboard
        </h1>
      </div>

      <form onSubmit={handleCreateWatch} className="w-full bg-[#1A365D] rounded-2xl p-6 shadow-sm border border-slate-800 text-white">
        <h3 className="text-lg font-bold mb-4 tracking-wide">Create New Price Watch</h3>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input 
                type="url" 
                placeholder="Paste Trendyol or Amazon Product URL..." 
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                className="w-full h-12 bg-white text-slate-800 px-4 rounded-xl text-sm font-medium border border-transparent focus:outline-hidden focus:ring-2 focus:ring-[#18888A] placeholder-slate-400"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 pr-3 bg-slate-50 rounded-l-xl h-full">
                <DollarSign className="w-4 h-4 text-slate-500" />
              </div>
              <input 
                type="number" 
                step="0.01"
                placeholder="Set Alert Target Price (TL / $)" 
                value={alertPrice}
                onChange={(e) => setAlertPrice(e.target.value)}
                className="w-full h-12 bg-white text-slate-800 pl-16 pr-4 rounded-xl text-sm font-medium border border-transparent focus:outline-hidden focus:ring-2 focus:ring-[#18888A] placeholder-slate-400"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="sm:w-48 h-12 bg-[#18888A] hover:bg-[#157577] text-white font-bold text-sm rounded-xl transition-all shadow-xs active:scale-99 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider disabled:opacity-70"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-white" />}
              {loading ? 'Analyzing...' : 'Start Watching'}
            </button>
          </div>
        </div>
      </form>

      <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs p-6 overflow-hidden">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Your Active Watches</h3>
        
        {globalLoading ? (
          <div className="flex items-center justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-[#18888A]" /></div>
        ) : watchesData.length === 0 ? (
          <p className="text-center text-sm text-slate-500 py-8">Hələ heç bir məhsul izlənilmir.</p>
        ) : (
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
                        <img src={getLogo(watch.source)} alt={watch.source} className="w-full h-full object-contain" />
                      </div>
                      <span className="truncate block text-slate-800 font-semibold" title={watch.productName}>
                        {watch.productName}
                      </span>
                    </td>
                    
                    <td className="p-4 text-slate-500">{watch.source}</td>
                    <td className="p-4 text-slate-900 font-bold">{watch.currentPrice} TL</td>
                    <td className="p-4 text-indigo-600 font-bold">{watch.targetPrice} TL</td>
                    
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${
                        watch.status 
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                          : 'bg-rose-50 text-rose-700 border-rose-100'
                      }`}>
                        {watch.status ? 'ACTIVE' : 'EXPIRED'}
                      </span>
                    </td>
                    
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-3 text-slate-400">
                        <button onClick={() => handleOpenEdit(watch)} className="hover:text-[#18888A] transition-colors cursor-pointer"><Edit3 className="w-4 h-4" /></button>
                        <button onClick={() => handleOpenDelete(watch)} className="hover:text-rose-600 transition-colors cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                        <button onClick={() => handleOpenChart(watch)} className="hover:text-indigo-600 transition-colors cursor-pointer"><TrendingUp className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl border border-slate-100 p-6 relative">
            <button onClick={() => setIsEditModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-5 h-5" /></button>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-slate-900">Edit Price Watch</h3>
              <p className="text-xs text-slate-500 mt-0.5 truncate max-w-xs">{selectedProduct?.productName}</p>
            </div>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Target Price (TL)</label>
                <input type="number" step="0.01" value={editTargetPrice} onChange={(e) => setEditTargetPrice(e.target.value)} className="w-full h-11 border border-slate-200 rounded-xl px-4 text-sm font-semibold text-slate-800 focus:outline-hidden bg-white" required />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Watch Status</label>
                <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)} className="w-full h-11 border border-slate-200 rounded-xl px-4 text-sm font-semibold text-slate-800 focus:outline-hidden bg-white cursor-pointer">
                  <option value="ACTIVE">Active (Keep Tracking)</option>
                  <option value="EXPIRED">Expired (Pause Tracking)</option>
                </select>
              </div>
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-6">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="h-10 px-4 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50">Cancel</button>
                <button type="submit" className="h-10 px-5 bg-[#18888A] hover:bg-[#157577] text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5"><Save className="w-3.5 h-3.5" /> Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl border border-rose-50 p-6 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-4 border border-rose-100"><AlertTriangle className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Delete this watch?</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed px-2">You are about to stop tracking <span className="font-semibold text-slate-800">"{selectedProduct?.productName}"</span> permanently.</p>
              <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-4 border-t border-slate-150/60">
                <button type="button" onClick={() => setIsDeleteModalOpen(false)} className="h-11 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl">Cancel</button>
                <button type="button" onClick={handleConfirmDelete} className="h-11 bg-rose-600 text-white font-bold text-xs rounded-xl shadow-md">Delete</button>
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
              <h3 className="text-lg font-bold text-slate-900 mt-1">{selectedProduct?.productName}</h3>
            </div>
            <div className="w-full h-64 bg-slate-50 rounded-xl p-4 border border-slate-100">
              {chartData.length === 0 ? (
                <p className="text-center text-sm text-slate-500 pt-24">Qiymət tarixçəsi hələ yığılmayıb.</p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                    <Tooltip formatter={(value) => [`${value} TL`, 'Price']} />
                    <Line type="monotone" dataKey="price" stroke="#18888A" strokeWidth={3} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default DashboardHome;