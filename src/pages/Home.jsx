import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeMain from '../components/Home/HomeMain'
import MainBottom from '../components/Home/MainBottom'
import Features from '../components/Home/Features'

const Home = () => {
  return (
    <>
        <div className="main">
            <HomeHeader/>
            <HomeMain/>
            <MainBottom/>
            <Features/>
        </div>
    </>
  )
}

export default Home