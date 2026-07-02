import React from 'react'
import googleIcon from '../../assets/google.png'

const HomeMain = () => {
  return (
    <div className='max-w-3xl mx-auto w-full px-4 mt-12 mb-8'>
        <div className='bg-[#91CFCC] w-full rounded-2xl p-6 md:p-12 flex flex-col items-center text-center shadow-sm'>
            
            <h2 className='text-2xl md:text-4xl font-extrabold tracking-tight text-slate-950 max-w-xl leading-tight'>
                AUTOMATE YOUR PRICE TRACKING
            </h2>
            
            <p className='text-sm md:text-lg text-slate-800 mt-4 max-w-lg font-medium leading-relaxed'>
                Sign in once, track always. Get instant alerts when prices drop.
            </p>
            
            <div className='bg-[#F5F5F5] hover:bg-white w-full max-w-md h-12 md:h-14 rounded-xl flex items-center justify-center gap-3 cursor-pointer mt-8 shadow-xs hover:shadow-md transition-all active:scale-98 select-none px-4'>
                <img className='w-5 h-5 md:w-6 md:h-6 object-contain' src={googleIcon} alt="Google" />
                <span className='text-xs md:text-sm font-bold text-slate-700 tracking-wide whitespace-nowrap'>
                    START TRACKING INSTANTLY - SIGN IN WITH GOOGLE
                </span>
            </div>

        </div>
    </div>
  )
}

export default HomeMain