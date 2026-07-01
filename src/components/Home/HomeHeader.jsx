import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <>
        <div>
            <div>
                <h1 className="text-indigo-600">Cost Watch</h1>
            </div>
            <div>
                <ul>
                    <li><a className='text-3xl font-bold underline' href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Integrations</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><NavLink to={"/"}>Login</NavLink></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default HomeHeader