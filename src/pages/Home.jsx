import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeMain from '../components/Home/HomeMain'

const Home = () => {
  return (
    <>
        <div className="main">
            <HomeHeader/>
            <HomeMain/>
        </div>
    </>
  )
}

export default Home