import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeMain from '../components/Home/HomeMain'
import MainBottom from '../components/Home/MainBottom'
import Features from '../components/Home/Features'
import Integrations from '../components/Home/Integrations'
import Pricing from '../components/Home/Pricing'
import Faq from '../components/Home/Faq'

const Home = () => {
  return (
    <>
        <div className="main">
            <HomeHeader/>
            <HomeMain/>
            <MainBottom/>
            <Features/>
            <Integrations/>
            <Pricing/>
            <Faq/>
        </div>
    </>
  )
}

export default Home