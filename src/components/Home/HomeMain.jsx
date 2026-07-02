import React from 'react'
import googleIcon from '../../assets/google.png'

const HomeMain = () => {
  return (
    <div className='bg-[#91CFCC] m-auto w-[50%] rounded-[10px] p-5 flex flex-col items-center'>
        <span className='text-[30px] font-bold'>AUTOMATE YOUR PRICE TRACKING</span>
        <span className='text-[20px]'>Sign in once, Track always. Get alerts when prices drop.</span>
        <div className='bg-[#F5F5F5] w-[50%] h-[50px] rounded-[10px] flex items-center justify-center gap-3 cursor-pointer mt-[30px]'>
            <img className='w-[30px] h-[30px]' src={googleIcon} alt="google" />
            <span>START TRACKING INSTANLY - SIGN IN WITH GOOGLE</span>
        </div>
    </div>
  )
}

export default HomeMain