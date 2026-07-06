import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { GoogleLogin } from '@react-oauth/google'

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log('Google Real IdToken:', credentialResponse.credential);

    try {
      const response = await fetch('https://localhost:7003/api/auth/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: credentialResponse.credential 
        }),
      });

      if (!response.ok) {
        throw new Error('Backend authentication failed');
      }

      const data = await response.json();
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      localStorage.setItem('email', data.email);

      console.log('Backend JWT qəbul olundu. Giriş uğurludur!');
     navigate('/dashboard');
    } catch (error) {
      console.error('Error connecting to backend:', error);
      alert('Backend ilə əlaqə qurularkən xəta baş verdi!');
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-50">
      
      <div className="hidden md:flex flex-col items-center justify-center bg-white p-12 border-r border-slate-100 relative">
        <NavLink 
          to="/" 
          className="absolute top-8 left-8 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#18888A] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to home</span>
        </NavLink>

        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-[#18888A] font-bold text-[26px] md:text-[30px] tracking-tight">
            Cost Watch
          </h1>
          <p className="text-slate-500 mt-1 text-md">Price tracking made simple.</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 md:p-12 relative">
        <NavLink 
          to="/" 
          className="md:hidden absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#18888A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </NavLink>

        <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl md:shadow-xs border border-slate-150/60 md:border-slate-100 flex flex-col items-center text-center">
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
            Welcome to CostWatch
          </h2>

          <div className="w-full flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => console.log('Login Failed')}
              useOneTap
              shape="square"
              theme="outline"
              size="large"
              width="380px"
            />
          </div>

          <p className="text-sm text-slate-500 mt-6 font-medium">
            Get started quickly and securely.
          </p>

        </div>
      </div>

    </div>
  )
}

export default Login