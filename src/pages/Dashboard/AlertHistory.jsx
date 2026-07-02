import React, { useState } from 'react'
import { Search, Calendar, Filter } from 'lucide-react'
import AmazonIcon from '../../assets/companyLogos/amazon.png'

const AlertsHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const historyData = [
    { id: 1, name: "Sony WH-1000XM5 Headphones", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "03/24/2026, 12:50:00 PM", status: "DELIVERED" },
    { id: 2, name: "Sony WH-1000XM5 Pema", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "03/24/2026, 12:50:00 PM", status: "PENDING" },
    { id: 3, name: "Sony WH-1000XM5 Headphones", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "03/24/2026, 12:50:00 PM", status: "PENDING" },
    { id: 4, name: "Sony WH-1000XM5 Pema", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "03/24/2026, 12:50:00 PM", status: "DELIVERED" },
    { id: 5, name: "Sony WH-1000XM5 Pema", logo: AmazonIcon, source: "Amazon", triggeredPrice: 348.00, targetPrice: 299.99, dateSent: "03/24/2026, 12:50:00 PM", status: "PENDING" }
  ];

  const filteredData = historyData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Alerts History</h1>
      </div>

      <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs p-6 overflow-hidden">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-bold text-slate-900 self-start md:self-center">Price Alert History</h3>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
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

            <button className="h-10 px-4 border border-slate-200 rounded-xl flex items-center gap-2 bg-white text-slate-600 hover:bg-slate-50 text-xs font-semibold cursor-pointer transition-colors">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Date range</span>
            </button>
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
                        ={alert.name}
                      </span>
                    </td>

                    <td className="p-4 text-slate-900 font-bold">${alert.triggeredPrice.toFixed(2)}</td>
                    <td className="p-4 text-indigo-600 font-bold">${alert.targetPrice.toFixed(2)}</td>

                    <td className="p-4 text-slate-500 text-xs">{alert.dateSent}</td>

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
                    No matching alert history found.
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