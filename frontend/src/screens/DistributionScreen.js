import { Button, DateInput, Input, Textarea } from '@nextui-org/react'
import { color, transform } from 'framer-motion';
import React, { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import {now, parseAbsoluteToLocal} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";
import {parseZonedDateTime} from "@internationalized/date";
import dp from '../assets/dp.jpg'
import { Link } from 'react-router-dom';
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import axios from 'axios'
import logo1 from '../assets/logo1.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';

const DistributionScreen = () => {
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();


    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: number,
      from_email: email,
      to_name: 'SAFNY & BROTHERS (PVT) Ltd',
      message: description,
    };

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_xyfno1i';
    const templateId = 'template_nahy6bg';
    const publicKey = 'GziQZGOytK6C8SlEM';
  
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(
          () => {
            setNumber('');
            setSubject('');
            setEmail('');
            setDescription('');
          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );
    };

  return (
    <div className='dark h-fit w-full flex flex-col gap-14 overflow-hidden'>
        <section className='h-fit w-full relative'>
            <div className='h-[400px] w-full absolute z-0 opacity-25'>
                <img src={dp} alt='' className='h-full w-full object-cover' />
            </div>
            <div className='h-fit min-h-[400px] w-full max-w-[1024px] mx-auto flex flex-col gap-4 px-8 relative z-30 items-center justify-center lg:justify-center '>
              <div className='h-fit w-full max-w-[600px] lg:mt-[100px] flex flex-col gap-2'>
                <img src={logo1} alt='' className='h-12 object-contain'/>
                <p className='text-6xl font-bold text-white text-center mt-4'>Who we are?</p>
                <p className='text-white/75 text-base text-center'>A leading distributor of Consumer Packaged Goods (CPGs) serving Organized Retail, General Trade, and Online Retail channels exclusively in Eastern Province (Ampara and Batticaloa)</p> 
              </div>      
            </div>
        </section>  

        <section className='h-fit w-full relative'>
          <div className='absolute bottom-0 h-[150px] w-full py-4 flex flex-col gap-4 justify-center'>
            <Swiper
              slidesPerView={'1'}
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
                <img src={c1} alt='' className='h-full w-full object-contain' />
              </SwiperSlide>
              <SwiperSlide className='h-[100px] w-fit' >
                <img src={c2} alt='' className='h-full w-full object-contain' />
              </SwiperSlide>
            </Swiper>
            
          </div>
          <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
            <div className='flex flex-col gap-1 justify-center items-center'>
              <p className='text-2xl text-center text-white font-bold'>Our collaborators</p>
              <p className='text-sm text-center text-white/25'></p>
            </div>
            <div className='w-full justify-center flex-col md:flex-row py-4 gap-16 h-[150px] flex flex-wrap'>             
            </div>
          </div>
        </section> 

        <section className='h-fit w-full bg-gray-900 py-16'>
          <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
            <div className='flex flex-col md:flex-row md:items-center gap-16'>
              <div className='md:min-w-[500px] '>
                <div className='flex flex-col gap-1'>
                  <p className='text-3xl text-white font-bold'>Inquiries</p>
                  <p className='text-sm text-white/50 font-semibold'>With us,</p>
                </div>
                <div className='w-full flex flex-col md:flex-row mt-4 gap-16'>
                  <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col gap-4'>
                        <div className='w-full flex items-start gap-4'>
                            <Input variant="bordered" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" className='text-white ' style={{
                                    color:'white'
                                }} placeholder="Enter your email" />
                        </div>

                        <div className='w-full flex items-start gap-4'>
                            <Input variant="bordered" type="number" value={number} onChange={(e) => setNumber(e.target.value)} label="Mobile number" className='text-white ' style={{
                                    color:'white'
                                }} placeholder="Enter your mobile number" />
                        </div>

                        <div className='w-full flex items-start gap-4'>
                            <Input variant="bordered" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} label="Subject" className='text-white ' placeholder="Enter Subject" />
                        </div>

                        <div className='w-full flex items-start gap-4'>
                          <Textarea
                            value={description} 
                            className='text-white '
                            onChange={(e) => setDescription(e.target.value)}
                            variant='bordered'
                            label="Description"
                            placeholder="Enter your description"
                          />
                        </div>

                 
                        <Button type="submit" variant='bordered' className='h-fit w-fit capitalize border-[2px] font-medium border-[#4093f1] bg-[#4093f1] text-xs md:text-sm text-white px-5 py-3 rounded-full'>
                            Submit
                        </Button>
                        
                    </form>
                  
                </div>
              </div>
              <div className='flex flex-col gap-8'>
                  <p className='text-white text-sm  lg:text-xl text-center'>
                  We would like to become the exclusive distributor for your goods and services company in Ampara and Batticaloa.
                  </p>
                  <p className='text-xs lg:text-sm text-white/50 text-center'>Feel free to contact us at 0777926383.</p>
                </div>
            </div>
          </div>
          
        </section> 

        <section className='h-fit w-full'>
          <div className='h-fit w-full max-w-[1024px] mx-auto px-8 py-8'>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl text-white font-bold'>Our Facilities</p>
            </div>
            <div className='flex flex-col md:flex-row py-4 gap-4'>
              <div className='h-fit w-full py-4 px-4 border-[1px] gap-2 border-white/25 rounded-[12px] flex flex-col '>
                <p className='text-base font-semibold text-white'>Warehousing and Storage: Inventory Management and Storage Solutions </p>
                <p className='text-white/50 text-sm'>Facilitating Warehouse and storage solutions for inventory management and ideal storage facilities.</p>
              </div>
              <div className='h-fit w-full py-4 px-4 border-[1px] gap-2 border-white/25 rounded-[12px] flex flex-col '>
                <p className='text-base font-semibold text-white'>Transportation and Logistics: Freight Management and Route Optimization</p>
                <p className='text-white/50 text-sm'>Facilitating transportation and logistics for freight management and route optimization.</p>
              </div>
              <div className='h-fit w-full py-4 px-4 border-[1px] gap-2 border-white/25 rounded-[12px] flex flex-col '>
                <p className='text-base font-semibold text-white'>Customer Relationship Management (CRM): Order Processing and Customer Service</p>
                <p className='text-white/50 text-sm'>Available Customer Relationship Management for efficient order processing and various customer services.</p>
              </div>
            </div>
          </div>
        </section>      
    </div>
  )
}

export default DistributionScreen