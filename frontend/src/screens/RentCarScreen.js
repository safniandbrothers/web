import { Button, DateInput, Input } from '@nextui-org/react'
import { color, transform } from 'framer-motion';
import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import {now, parseAbsoluteToLocal} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";
import {parseZonedDateTime} from "@internationalized/date";
import rcp from '../assets/rcp.png'
import { Link } from 'react-router-dom';
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

const RentCarScreen = () => {
    let [date, setDate] = useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));
  return (
    <div className='h-fit w-full flex flex-col gap-8'>
        <section className='h-fit w-full relative flex lg:justify-end'>
            <div className='h-[500px] w-full absolute z-0'>
                <img src={rcp} alt='' className='h-full w-full object-cover' />
            </div>
            <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col px-8 relative z-30 pt-[300px] lg:pt-[110px] lg:ml-auto'>
                
                <div className='w-full lg:max-w-[400px] min-w-full lg:min-w-[400px] flex flex-col gap-4 px-6 py-8 bg-transparent backdrop-blur-md rounded-[16px] border-[2px] border-white/25'>
                    <div className='w-full'>
                        <p className='text-2xl font-bold text-white'>Rent car</p>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className='p-2 rounded-full border-[2px] border-white border-opacity-50'>
                            <HiOutlineMail  className='text-2xl text-white opacity-50' />
                        </div>
                        <Input type="email" variant='flat' label="Email" className='text-white' style={{
                                color:'white'
                            }} placeholder="Enter your email" />
                    </div>

                    <div className='flex items-start gap-4'>
                        <div className='p-2 rounded-full border-[2px] border-white border-opacity-50'>
                            <IoLocationSharp className='text-2xl text-white opacity-50' />
                        </div>
                        <Input type="text" variant='flat' label="Pickup & Drop" placeholder="Enter address" />
                    </div>

                    <div className='flex items-start gap-4'>
                        <DateInput
                            label="Appointment time"
                            hideTimeZone
                            defaultValue={parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]")}
                        />
                    </div>
                    <Link to={'/rent-car'}>
                        <Button variant='bordered' className='h-fit w-fit capitalize border-[2px] font-medium border-[#4093f1] bg-[#4093f1] text-xs md:text-sm text-white px-5 py-3 rounded-full'>
                            Rent car
                        </Button>
                    </Link>
                    
                </div>
            </div>
        </section>      
        <section className=''>
            <div className='h-fit w-full lg:w-1/2 max-w-[1024px] mx-auto flex flex-col gap-4 px-8 relative z-30'>
                <p className='text-2xl font-bold text-white'>Our Services</p>
                <div className='py-8 px-6 border-[2px] border-white/20 rounded-[24px] flex flex-col items-start gap-4 backdrop-blur-md'>
                    <p className='text-white text-sm text-justify'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</p>
                </div>              
            </div>
        </section>  
    </div>
  )
}

export default RentCarScreen