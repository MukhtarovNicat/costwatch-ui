import React, { useState } from 'react'
import { Search, Calendar, Filter, X } from 'lucide-react'
import AmazonIcon from '../../assets/companyLogos/amazon.png'

const AlertsHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const historyData = [
    { id: 1, name: "Sony WH-1000XM5 Headphones", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "2026-03-24", displayDate: "03/24/2026, 12:50:00 PM", status: "DELIVERED" },
    { id: 2, name: "Sony WH-1000XM5 Pema", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "2026-03-25", displayDate: "03/25/2026, 02:15:00 PM", status: "PENDING" },
    { id: 3, name: "Sony WH-1000XM5 Headphones", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "2026-04-02", displayDate: "04/02/2026, 09:30:00 AM", status: "PENDING" },
    { id: 4, name: "Sony WH-1000XM5 Pema", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "2026-04-10", displayDate: "04/10/2026, 11:45:00 PM", status: "DELIVERED" },
    { id: 5, name: "Sony WH-1000XM5 Pema", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "2026-04-12", displayDate: "04/12/2026, 04:20:00 PM", status: "PENDING" }
  ];

  const filteredData = historyData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    
    let matchesDate = true;
    if (startDate && item.dateSent < startDate) matchesDate = false;
    if (endDate && item.dateSent > endDate) matchesDate = false;

    return matchesSearch && matchesStatus && matchesDate;
  });

  const resetDateFilter = () => {
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Alerts History</h1>
      </div>

      <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs p-6 overflow-hidden">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-bold text-slate-900 self-start lg:self-center">Price Alert History</h3>
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            <div className="relative flex-1 min-w-[200px] md:w-56">
              <input 
                type="text"
                placeholder="Filter by Product Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 bg-white border border-slate-200 pl-4 pr-4 rounded-xl text-xs font-semibold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-[#18888A]/50 placeholder-slate-400"
              />
            </div>

            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-10 bg-white border border-slate-200 pl-4 pr-8 rounded-xl text-xs font-semibold text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-[#18888A]/50 appearance-none cursor-pointer"
              >
                <option value="ALL">All Statuses</option>
                <option value="DELIVERED">Delivered</option>
                <option value="PENDING">Pending</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 h-10 rounded-xl">
              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              
              <input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-600 focus:outline-hidden cursor-pointer"
                title="Start Date"
              />
              <span className="text-slate-300 text-xs">-</span>
              <input 
                type="date" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-600 focus:outline-hidden cursor-pointer"
                title="End Date"
              />

              {(startDate || endDate) && (
                <button 
                  onClick={resetDateFilter}
                  className="ml-1 p-0.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

          </div>
        </div>

        <div className="w-full overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                <th className="p-4">Product Name</th>
                <th className="p-4">Triggered Price</th>
                <th className="p-4">Target Price</th>
                <th className="p-4">Date Sent</th>
                <th className="p-4 text-center">Email Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {filteredData.length > 0 ? (
                filteredData.map((alert) => (
                  <tr key={alert.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 flex items-center gap-3 max-w-xs">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 p-1 flex items-center justify-center shrink-0">
                        <img src={alert.logo} alt={alert.source} className="w-full h-full object-contain" />
                      </div>
                      <span className="truncate block text-slate-800 font-semibold" title={alert.name}>
                        {alert.name}
                      </span>
                    </td>

                    <td className="p-4 text-slate-900 font-bold">${alert.triggeredPrice.toFixed(2)}</td>
                    <td className="p-4 text-indigo-600 font-bold">${alert.targetPrice.toFixed(2)}</td>

                    <td className="p-4 text-slate-500 text-xs">{alert.displayDate}</td>

                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold border ${
                        alert.status === 'DELIVERED'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                          : 'bg-amber-50 text-amber-700 border-amber-100'
                      }`}>
                        {alert.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-slate-400 font-medium">
                    No matching alert history found within the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default AlertsHistory