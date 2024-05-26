import React from 'react'
import hbg from '../assets/HBG.png'
import stikS from '../assets/stickS.png'
import stikG from '../assets/stickG.png'

import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";
import {Card, Skeleton} from "@nextui-org/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Autoplay, Navigation } from 'swiper/modules';


const HomeScreen = () => {
  return (
    <div className='h-fit w-full flex flex-col relative items-center justify-center'>
        <section className='h-screen min-h-screen w-full bg-black relative'>
            <div className='h-[500px] w-full absolute z-0 opacity-35'>
                <img src={hbg} alt='' className='h-full w-full object-cover' />
            </div>
            <div className='h-full w-full flex flex-col gap-4 items-center justify-center  px-8 relative z-30'>
                <div className='flex gap-2 justify-center lg:mt-8'>
                    <Link to={'/destribution'} className='h-[200px] w-[200px] relative  rounded-full'>
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
                            <img src={stikG} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={stikS} />
                        </SwiperSlide>
                    </Swiper>
                    </Link>
                    {/* <Link to={'/rent-car'}>
                        <Button variant='bordered' className='h-fit capitalize border-[2px] font-medium border-[#4093f1] bg-[#4093f1] text-xs md:text-sm text-black px-4 md:px-5 py-2 md:py-3 rounded-full'>
                            Rent car
                        </Button>
                    </Link> */}
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col text-center'>
                        <p className='text-xl font-semibold text-white capitalize'>Welcome to</p>
                        <p className='text-3xl sm:text-4xl font-black text-[#4093f1] uppercase'>Safny & Brothers </p>
                        <p className='text-sm font-black text-[#4093f1]'>(PVT) Ltd</p>
                        
                    </div>
                    {/* <p className='text-sm text-white/50 text-center'>A simple declarative syntax means you write less code. Less code means your codebase is easier to read and maintain.</p> */}
                </div>
                <div className='flex gap-4'>
                    <Button className='border-[2px] border-white/25' variant='bordered'>
                        <IoLogoFacebook className='text-white text-2xl' />
                        <p className='text-white capitalize'>facebook</p>
                    </Button>
                    <Button className='border-[2px] border-white/50' variant='bordered'>
                        <IoLogoWhatsapp className='text-white text-2xl' />
                        <p className='text-white capitalize'>WatsApp</p>
                    </Button>
                    
                </div>
            </div>
        </section>
        <section className='h-fit w-full bg-gray-900 py-16'>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col sm:flex-row justify-center gap-4'>
                
            </div>
        </section>
    </div>
  )
}

export default HomeScreen