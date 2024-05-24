import { Button, DateInput, Input } from '@nextui-org/react'
import { color, transform } from 'framer-motion';
import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import {now, parseAbsoluteToLocal} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";
import {parseZonedDateTime} from "@internationalized/date";
import dp from '../assets/dp.png'
import { Link } from 'react-router-dom';
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

const DistributionScreen = () => {
  let [date, setDate] = useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));
  return (
    <div className='h-fit w-full'>
        <section className='h-fit w-full relative'>
            <div className='h-[500px] w-full absolute z-0'>
                <img src={dp} alt='' className='h-full w-full object-cover' />
            </div>
            
            <div className='h-[700px] w-full lg:w-1/2 max-w-[1024px] mx-auto flex flex-col gap-4 px-8 relative z-30 pt-[300px] '>
              <p className='text-4xl font-bold text-[#4093f1]'>Who we are?</p>
              <Tabs 
                classNames={{
                  tabList: "backdrop-blur-md",
                  cursor: "",
                  tab: "",
                  tabContent: "group-data-[selected=true]:text-black"
                }}
                aria-label="Dynamic tabs" className='px-1'>
                <Tab key={"services"} title={"Services"}>
                  <div className='py-8 px-6 border-[2px] border-white/20 rounded-[24px] flex flex-col items-start gap-4 backdrop-blur-md'>
                      <p className='text-xl font-bold text-white'>Our Services</p>
                      <p className='text-white text-sm text-justify'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</p>
                  </div>
                </Tab>
                <Tab key={"about"} title={'About'}>
                  <div className='py-8 px-6 border-[2px] border-white/20 rounded-[24px] flex flex-col items-start gap-4 backdrop-blur-md'>
                      <p className='text-xl font-bold text-white'>About us</p>
                      <p className='text-white text-sm text-justify'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                  </div>
                </Tab>
              </Tabs>
              
              
            </div>
        </section>  

        <section>
        </section>      
    </div>
  )
}

export default DistributionScreen