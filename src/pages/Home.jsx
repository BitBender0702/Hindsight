import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerImg01 from '../assets/banner-img01.png'
import BannerImg02 from '../assets/banner-img02.png'

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Banner from '../components/sections/Banner'
import WhatDoWe from '../components/sections/WhatDoWe'
import Features from '../components/sections/Features'
import Roadmap from '../components/sections/Stages'

const BANNER_LIST = [
  { 
    title: 'Blockchain data <br /> visualization<br> made easy.',
    desc: 'A platform designed to help you gain insights into token trends<br />and network activity from different blockchain networks in a visually<br />appealing and easy-to-understand format.',
    img: BannerImg02
  }
];

function Home() {
  return (
    <>
      <Header />
      
      {BANNER_LIST.map((item, idx) => (
        <Banner { ...item } key={ idx } />
      ))}
      <WhatDoWe />
      <Features />
      <Roadmap />
      
      <div className='main-bg block w-full h-full top-0 bg-main-bg bg-cover absolute z-[-3]'></div>
      
      <Footer />
    </>
  )
}

export default Home