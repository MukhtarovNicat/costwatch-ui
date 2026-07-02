import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeMain from '../components/Home/HomeMain'
import MainBottom from '../components/Home/MainBottom'

const Home = () => {
  return (
    <>
        <div className="main">
            <HomeHeader/>
            <HomeMain/>
            <MainBottom/>
        </div>
    </>
  )
}

export default Home