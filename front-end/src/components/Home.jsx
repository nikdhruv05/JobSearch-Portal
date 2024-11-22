import React from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        {/* <CategoryCarousel/>
        <LatestJobs/>
        <Footer/> */}
    </div>
  )
}
