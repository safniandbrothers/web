import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import ReactWhatsapp from 'react-whatsapp';

import hbg from '../assets/HBG.png'

import GC from '../assets/GoldCoin.png'
import RCG from '../assets/RentaCar.png'
import SC from '../assets/SilverCoin.png'
import RCS from '../assets/RentaCarSilver.png'

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
    <div className='h-fit w-full flex flex-col relative items-center justify-center overflow-hidden'>
        <section className='h-screen flex items-center min-h-fit w-full bg-black relative'>
            <div className='h-fit w-full absolute z-0 opacity-35'>
                <img src={hbg} alt='' className='h-full w-full object-cover' />
            </div>
            <div className='h-fit w-full flex flex-col gap-8 items-center justify-center px-8 relative z-30'>
                <div className='flex flex-col gap-2 -mt-[100px]'>
                    <div className='flex flex-col text-center'>
                        <p className='text-xl font-semibold text-white capitalize'>Welcome to</p>
                        <p className='text-3xl sm:text-4xl font-black text-[#4093f1] uppercase'>Safny & Brothers </p>
                        <p className='text-sm font-black text-[#4093f1]'>(PVT) Ltd</p>
                        
                    </div>
                    {/* <p className='text-sm text-white/50 text-center'>A simple declarative syntax means you write less code. Less code means your codebase is easier to read and maintain.</p> */}
                </div>
                <div className='flex justify-center gap-8'>
                    <Link to={'/destribution'} className='h-[125px] w-[125px] relative  rounded-full'>
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
                    </Link>
                    <Link to={'/rent-car'} className='h-[125px] w-[125px] relative  rounded-full'>
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
                    </Link>
                    {/* <Link to={'/rent-car'}>
                        <Button variant='bordered' className='h-fit capitalize border-[2px] font-medium border-[#4093f1] bg-[#4093f1] text-xs md:text-sm text-black px-4 md:px-5 py-2 md:py-3 rounded-full'>
                            Rent car
                        </Button>
                    </Link> */}
                </div>
                <div className='flex gap-4 '>
                    <Button className='border-[2px] border-white/25' variant='bordered'>
                        <IoLogoFacebook className='text-white text-2xl' />
                        <p className='text-white capitalize'>facebook</p>
                    </Button>

                    <ReactWhatsapp number="+94777926383" message="Hello World!!!" >
                        <div className='relative -z-20'>
                            <Button className='border-[2px] border-white/50' variant='bordered'>
                                <IoLogoWhatsapp className='text-white text-2xl' />
                                <p className='text-white capitalize'>Whatsapp</p>
                            </Button>
                        </div>
                    </ReactWhatsapp>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default HomeScreen