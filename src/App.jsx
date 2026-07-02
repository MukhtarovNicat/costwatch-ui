import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/Dashboard/DashboardHome'
import MyWatches from './pages/Dashboard/MyWatches'
import AlertsHistory from './pages/Dashboard/AlertHistory'
import AccountSettings from './pages/Dashboard/AccountSettings'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<DashboardHome />} />
          <Route path="my-watches" element={<MyWatches />} />
          <Route path="alerts" element={<AlertsHistory />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App