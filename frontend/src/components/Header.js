import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import logo from '../assets/logo.png'
import logo1 from '../assets/logo2.png'
import { Link, useLocation } from 'react-router-dom';

import GC from '../assets/GoldCoin.png'
import RCG from '../assets/RentaCar.png'
import SC from '../assets/SilverCoin.png'
import RCS from '../assets/RentaCarSilver.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Autoplay, Navigation } from 'swiper/modules';


const Header = () => {
  const location = useLocation()
  return (
    <Navbar position="static" shouldHideOnScroll className='h-[100px] w-full flex items-center backdrop-blur-md bg-transparent border-b-[1px] bg-black border-[#4093f1] border-opacity-50 py-4 px-2'>
        <div>
          <Link to={'/'} className='py-4'>
            <img src={logo1} alt='' className='h-16 object-contain'/>
          </Link>
        </div>

        {
          location.pathname == "/rent-car"?
          <Link to={'/rent-car'} className='h-[75px] w-[75px] ml-auto relative  rounded-full'>
              <Swiper
                  effect={'flip'}
                  grabCursor={true}
                  autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                  }}
                  modules={[EffectFlip, Autoplay]}
              >
                
                  <SwiperSlide>
                      <img src={RCS} />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={RCG} />
                  </SwiperSlide>
              </Swiper>
          </Link>:
          location.pathname == "/destribution"?
          <Link to={'/destribution'} className='h-[75px] w-[75px] ml-auto relative  rounded-full'>
              <Swiper
                  effect={'flip'}
                  grabCursor={true}
                  autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                  }}
                  modules={[EffectFlip, Autoplay]}
              >
                  <SwiperSlide>
                      <img src={GC} />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={SC} />
                  </SwiperSlide>
              </Swiper>
          </Link>:
          ''
        }

    </Navbar>
  )
}

export default Header