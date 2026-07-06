import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell, ShieldAlert, X, Camera, AlertTriangle } from 'lucide-react'
import googleIcon from '../../assets/google.png'

const AccountSettings = () => {
  const navigate = useNavigate();

  // State-lər
  const [priceDropAlert, setPriceDropAlert] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);
  
  const [fullName, setFullName] = useState('İstifadəçi');
  const [username, setUsername] = useState('user');
  const [email, setEmail] = useState('email@gmail.com');

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 

  useEffect(() => {
    const savedName = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');

    if (savedName) {
      setFullName(savedName);
      setUsername(savedName.toLowerCase().replace(/\s+/g, '_'));
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    localStorage.setItem('username', fullName);
    setIsEditModalOpen(false);
  };

  const handleDeleteAccountConfirm = async () => {
    console.log("Account deletion triggered.");
    
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch('https://localhost:7003/api/users/delete-account', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      localStorage.clear(); 
      console.log("Account deleted permanently and session cleared.");
      
      setIsDeleteModalOpen(false);
      navigate('/login'); 
    } catch (error) {
      console.error("Error during account deletion:", error);
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <div className="max-w-3xl space-y-6 animate-fade-in relative">
      
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Account Settings</h1>
      </div>

      {/* PROFİL KART-I (Dinamik data ilə) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 shrink-0 text-xl font-bold text-slate-700 select-none">
              {fullName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{fullName}</h3>
              <p className="text-xs text-slate-400 font-medium -mt-0.5">@{username}</p>
              <div className="flex items-center gap-2 mt-2 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg w-fit">
                <img src={googleIcon} alt="Google" className="w-3.5 h-3.5 object-contain" />
                <span className="text-xs text-slate-600 font-medium">{email}</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setIsEditModalOpen(true)}
            className="h-10 px-5 bg-[#18888A] hover:bg-[#157577] text-white font-semibold text-sm rounded-xl transition-all cursor-pointer shadow-xs active:scale-98 self-start sm:self-center"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* BİLDİRİŞ AYARLARI */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Bell className="w-4 h-4 text-[#18888A]" />
          <h3 className="text-md font-bold text-slate-900">Notification Preferences</h3>
        </div>

        <div className="divide-y divide-slate-100">
          <div className="flex items-center justify-between py-3.5">
            <div>
              <span className="block text-sm font-semibold text-slate-800">Price Drop Alerts</span>
              <span className="block text-xs text-slate-400 mt-0.5">Get instant emails when watched items hit your target price.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input type="checkbox" checked={priceDropAlert} onChange={() => setPriceDropAlert(!priceDropAlert)} className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#18888A]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3.5">
            <div>
              <span className="block text-sm font-semibold text-slate-800">Weekly Performance Report</span>
              <span className="block text-xs text-slate-400 mt-0.5">Receive a weekly digest of your tracked products and general price trends.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input type="checkbox" checked={weeklySummary} onChange={() => setWeeklySummary(!weeklySummary)} className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#18888A]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* DANGER ZONE */}
      <div className="bg-white rounded-2xl border border-rose-100 shadow-xs p-6 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-rose-50/50 text-rose-700">
          <ShieldAlert className="w-4 h-4" />
          <h3 className="text-md font-bold">Danger Zone</h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-rose-50/30 p-4 rounded-xl border border-rose-100/50">
          <div>
            <span className="block text-sm font-bold text-slate-800">Delete Account</span>
            <span className="block text-xs text-slate-500 mt-0.5">Permanently delete your account and stop all price watches.</span>
          </div>
          <button 
            onClick={() => setIsDeleteModalOpen(true)}
            className="h-10 px-4 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 hover:border-rose-300 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-xs active:scale-98 shrink-0"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* EDIT MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl border border-slate-100 p-6 relative">
            <button onClick={() => setIsEditModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-5 h-5" /></button>
            <div className="mb-6"><h3 className="text-lg font-bold text-slate-900">Edit Profile</h3></div>
            <form onSubmit={handleSaveChanges} className="space-y-4">
              <div className="flex flex-col items-center justify-center py-2 mb-2">
                <div className="relative group">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-2xl font-bold text-slate-700 border-2 border-slate-200 select-none">{fullName.charAt(0).toUpperCase()}</div>
                  <div className="absolute inset-0 bg-slate-900/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"><Camera className="w-5 h-5 text-white" /></div>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Full Name</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full h-11 border border-slate-200 rounded-xl px-4 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#18888A]/50 bg-white" required />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Username</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400 text-sm font-semibold">@</span>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full h-11 border border-slate-200 rounded-xl pl-8 pr-4 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#18888A]/50 bg-white" required />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-6">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="h-10 px-4 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer">Cancel</button>
                <button type="submit" className="h-10 px-5 bg-[#18888A] hover:bg-[#157577] text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl border border-rose-50 p-6 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-4 border border-rose-100">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Are you absolutely sure?</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed px-2">
                This action <span className="font-bold text-rose-600">cannot be undone</span>. All your active price watches and alert histories will be wiped out from our database permanently.
              </p>

              <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-4 border-t border-slate-150/60">
                <button 
                  type="button"
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="h-11 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-xs active:scale-98"
                >
                  No, Keep It
                </button>
                <button 
                  type="button"
                  onClick={handleDeleteAccountConfirm}
                  className="h-11 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-98"
                >
                  Yes, Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default AccountSettings;