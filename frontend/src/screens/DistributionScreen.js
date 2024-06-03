import { Button, DateInput, Input, Textarea } from '@nextui-org/react'
import { color, transform } from 'framer-motion';
import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import {now, parseAbsoluteToLocal} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";
import {parseZonedDateTime} from "@internationalized/date";
import dp from '../assets/dp.jpg'
import { Link } from 'react-router-dom';
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';

const DistributionScreen = () => {
  let [date, setDate] = useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));
  return (
    <div className='dark h-fit w-full flex flex-col gap-14 overflow-hidden'>
        <section className='h-fit w-full relative'>
            <div className='h-[500px] w-full absolute z-0 opacity-35'>
                <img src={dp} alt='' className='h-full w-full object-cover' />
            </div>
            <div className='h-fit min-h-[400px] w-full max-w-[1024px] mx-auto flex flex-col gap-4 px-8 relative z-30 items-center justify-center lg:justify-center '>
              <div className='h-fit w-full max-w-[600px] lg:mt-[100px] flex flex-col gap-2'>
                <p className='text-6xl font-bold text-white text-center'>Who we are?</p>
                <p className='text-white/75 text-sm text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p> 
              </div>      
            </div>
        </section>  

        <section className='h-fit w-full relative'>
          <div className='absolute bottom-0 h-[150px] w-full py-4 flex flex-col gap-4'>
            <Swiper
              slidesPerView={'4'}
              spaceBetween={20}
              freeMode={true}
              loop={true}
              centeredSlides={true}
              modules={[FreeMode, Autoplay]}
              autoplay={{
                delay: 2000,
            }}
              className=' w-full'
            >
              <SwiperSlide className='h-[100px] w-fit flex items-center' >
                <img src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg' alt='' className='h-full w-full object-contain' />
              </SwiperSlide>
              <SwiperSlide className='h-[100px] w-fit' >
                <img src='https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940' alt='' className='h-full w-full object-contain' />
              </SwiperSlide>
              <SwiperSlide className='h-[100px] w-fit' >
                <img src='https://i.pinimg.com/originals/74/79/a0/7479a0a02cf333e01e13d1b6d08af800.jpg' alt='' className='h-full w-full object-contain' />
              </SwiperSlide>
              <SwiperSlide className='h-[100px] w-fit' >
                <img src='https://wallpapercave.com/wp/wp2860517.jpg' alt='' className='h-full w-full object-contain' />
              </SwiperSlide>
              <SwiperSlide className='h-[100px] w-fit' >
                <img src='https://seekvectors.com/files/download/Amazon-Logo-31.jpg' alt='' className='h-full w-full object-contain' />
              </SwiperSlide>
              <SwiperSlide className='h-[100px] w-fit' >
                <img src='https://i.pinimg.com/564x/0e/9b/1e/0e9b1e7319dae4b8046c5366d62532e3.jpg' alt='' className='h-full w-full object-contain' />
              </SwiperSlide>

            </Swiper>
            
          </div>
          <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
            <div className='flex flex-col gap-1 justify-center items-center'>
              <p className='text-2xl text-center text-white font-bold'>Our collaborators</p>
              <p className='text-sm text-center text-white/25'>Lorem Ipsum is simply dummy text,</p>
            </div>
            <div className='flex flex-col md:flex-row py-4 gap-4 h-[150px]'>
            
            </div>
          </div>
        </section> 

        <section className='h-fit w-full bg-gray-900 py-16'>
          <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl text-white font-bold'>Do you want to Collaborate?</p>
              <p className='text-sm text-white/50 font-semibold'>With us,</p>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-4 mt-4'>
              <div className='w-full flex flex-col gap-4'>
                    <div className='w-full flex flex-col lg:flex-row gap-4'>
                      <div className='w-full flex items-start gap-4'>
                          <Input variant="bordered" type="email" label="Email" className='text-white ' style={{
                                  color:'white'
                              }} placeholder="Enter your email" />
                      </div>

                      <div className='w-full flex items-start gap-4'>
                          <Input variant="bordered" type="text" label="Subject" placeholder="Enter Subject" className="" />
                      </div>
                    </div>

                    <div className='w-full flex items-start gap-4'>
                      <Textarea
                      variant='bordered'
                        label="Description"
                        placeholder="Enter your description"
                        className=""
                      />
                    </div>

                    <Link to={'/rent-car'}>
                        <Button variant='bordered' className='h-fit w-fit capitalize border-[2px] font-medium border-[#4093f1] bg-[#4093f1] text-xs md:text-sm text-white px-5 py-3 rounded-full'>
                            Submit
                        </Button>
                    </Link>
                    
                </div>
            </div>
          </div>
        </section> 

        <section className='h-fit w-full'>
          <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl text-white font-bold'>Our Services</p>
              <p className='text-sm text-white/25'>Lorem Ipsum is simply dummy text,</p>
            </div>
            <div className='flex flex-col md:flex-row py-4 gap-4'>
              <div className='h-fit w-full py-4 px-4 border-[1px] gap-2 border-white/25 rounded-[12px] flex flex-col '>
                <p className='text-lg font-medium text-white'>Service 1</p>
                <p className='text-white/50 text-sm'>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
              </div>
              <div className='h-fit w-full py-4 px-4 border-[1px] gap-2 border-white/25 rounded-[12px] flex flex-col '>
                <p className='text-lg font-medium text-white'>Service 2</p>
                <p className='text-white/50 text-sm'>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
              </div>
              <div className='h-fit w-full py-4 px-4 border-[1px] gap-2 border-white/25 rounded-[12px] flex flex-col '>
                <p className='text-lg font-medium text-white'>Service 3</p>
                <p className='text-white/50 text-sm'>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
              </div>
            </div>
          </div>
        </section>      
    </div>
  )
}

export default DistributionScreen