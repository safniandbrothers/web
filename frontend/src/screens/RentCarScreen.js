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
import { FaCar } from "react-icons/fa";
import {Select, SelectItem} from "@nextui-org/react";
import {DateRangePicker} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/react";

import RCG from '../assets/RentaCar.png'
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

const RentCarScreen = () => {
    let [pDate, setPDate] = useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));
    let [rDate, setRDate] = useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));
    const [selected, setSelected] = React.useState("login");

  return (
    <div className='dark h-fit min-h-fit w-full flex flex-col gap-8 justify-center'>
        <section className='h-fit w-full relative flex items-center'>
            <img
            className='h-[500px] min-h-screen absolute top-0 object-cover w-full z-0 opacity-75'
                src={rcp}
            />
            <div className='h-[500px] min-h-screen w-full max-w-[1024px] mx-auto px-8 flex flex-col lg:flex-row lg:justify-between py-4 relative z-30'>
                <div className='py-6 rounded-[24px] h-fit w-fit md:min-w-[400px] max-w-[500px] mx-auto backdrop-blur-2xl p-4'>
                    <Tabs size='lg' aria-label="Options" 
                    variant='solid' color='primary'
                        className='px-1 w-full'
                       >
                        <Tab key="Self drive" title={
                            <div className='flex flex-row gap-2 items-center'>
                                <FaCar/>
                                <p>Self drive</p>
                            </div>
                        }  className='bg-transparent flex flex-col gap-4'>
                            <div className='h-fit w-full flex flex-col gap-4'>
                                <Select 
                                    label="PICKUP/RETURN LOCATION" 
                                    className="w-full lg:max-w-lg" 
                                    
                                    variant=''
                                    
                                >
                                    <SelectItem key='hi' className=''>
                                        Casons Head Office
                                    </SelectItem>
                                    <SelectItem key='hi' className=''>
                                        BIA airport
                                    </SelectItem>
                                </Select>
                                <div className='flex flex-col gap-4'>
                                    <DatePicker
                                        className="w-full lg:max-w-lg" 
                                        granularity="second"
                                        label="Pickup Date and time"
                                        hideTimeZone
                                        value={pDate}
                                        onChange={setPDate}
                                    />
                                    <DatePicker
                                        className="w-full lg:max-w-lg" 
                                        granularity="second"
                                        label="Return Date and time"
                                        hideTimeZone
                                        value={rDate}
                                        onChange={setRDate}
                                    />
                                </div>
                                <Select 
                                    label="VEHICLE TYPE" 
                                    className="w-full lg:max-w-lg" 
                                    
                                    variant=''
                                    
                                >
                                    <SelectItem key='All' className=''>
                                        All
                                    </SelectItem>
                                    <SelectItem key='Cars' className=''>
                                        Cars
                                    </SelectItem>
                                    <SelectItem key='Vans' className=''>
                                        Vans
                                    </SelectItem>
                                </Select>
                                <Button variant='solid' color='primary' className='max-w-lg'>
                                    Send
                                </Button>
                            </div>
                        </Tab>
                        <Tab key="With driver" title={
                            <div className='flex flex-row gap-2 items-center'>
                                <FaCar/>
                                <p>With driver</p>
                            </div>
                        } className='bg-transparent flex flex-col gap-4'>
                            <div className='h-fit w-full flex flex-col gap-4'>
                                <Select 
                                    label="PICKUP/RETURN LOCATION" 
                                    className="w-full lg:max-w-lg" 
                                    
                                    variant=''
                                    
                                >
                                    <SelectItem key='hi' className=''>
                                        Casons Head Office
                                    </SelectItem>
                                    <SelectItem key='hi' className=''>
                                        BIA airport
                                    </SelectItem>
                                </Select>
                                <div className='flex flex-col gap-4'>
                                    <DatePicker
                                        className="w-full lg:max-w-lg" 
                                        granularity="second"
                                        label="Pickup Date and time"
                                        hideTimeZone
                                        value={pDate}
                                        onChange={setPDate}
                                    />
                                    <DatePicker
                                        className="w-full lg:max-w-lg" 
                                        granularity="second"
                                        label="Return Date and time"
                                        hideTimeZone
                                        value={pDate}
                                        onChange={setRDate}
                                    />
                                </div>
                                <Select 
                                    label="VEHICLE TYPE" 
                                    className="w-full lg:max-w-lg" 
                                    
                                    variant=''
                                    
                                >
                                    <SelectItem key='All' className=''>
                                        All
                                    </SelectItem>
                                    <SelectItem key='Cars' className=''>
                                        Cars
                                    </SelectItem>
                                    <SelectItem key='Vans' className=''>
                                        Vans
                                    </SelectItem>
                                </Select>
                                <Button variant='solid' color='primary' className='max-w-lg'>
                                    Send
                                </Button>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
    </div>
  )
}

export default RentCarScreen