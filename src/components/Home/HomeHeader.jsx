import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <>
        <div className='flex justify-between items-center p-4'>
            <div>
                <h1 className="text-[#18888A] font-bold text-[30px]">Cost Watch</h1>
            </div>
            <div>
                <ul className='flex gap-4 items-center'>
                    <li className='list-none text-[18px] font-bold hover:text-[#18888A] transition-colors duration-300'><a href="">Features</a></li>
                    <li className='list-none text-[18px] font-bold hover:text-[#18888A] transition-colors duration-300'><a href="">Pricing</a></li>
                    <li className='list-none text-[18px] font-bold hover:text-[#18888A] transition-colors duration-300'><a href="">Integrations</a></li>
                    <li className='list-none text-[18px] font-bold hover:text-[#18888A] transition-colors duration-300'><a href="">FAQ</a></li>
                    <li className='list-none bg-[#18888A] text-[18px]  text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#18888A]/90 transition-colors duration-300'><NavLink to={"/"}>Login</NavLink></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default HomeHeader