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
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

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

import {getLocalTimeZone} from "@internationalized/date";

const RentCarScreen = () => {
    const [pDate, setPDate] = useState(now(getLocalTimeZone()));
    const [rDate, setRDate] = useState(now(getLocalTimeZone()));

    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [pLocation, setPLocation] = useState('')
    const [driver, setDriver] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: number,
      from_email: email,
      from_driver: JSON.stringify(driver.currentKey),
      from_vehicleType: JSON.stringify(vehicleType.currentKey),
      from_pLocation: JSON.stringify(pLocation.currentKey),
      from_pDate: JSON.stringify(pDate.year + "/" + pDate.month + "/" +  pDate.day + " " + pDate.hour+ ":" + pDate.minute+""+ pDate.timeZone),
      from_rDate: JSON.stringify(rDate.year + "/" + rDate.month + "/" +  rDate.day + " " + rDate.hour+ ":" + rDate.minute+""+ rDate.timeZone),
      to_name: 'SAFNY & BROTHERS (PVT) Ltd',
    };

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_xyfno1i';
    const templateId = 'template_4c3sa92';
    const publicKey = 'GziQZGOytK6C8SlEM';
  

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(
          () => {
            setNumber('');
            setEmail('');
            setPDate(now(getLocalTimeZone()));
            setVehicleType('')
            setPLocation('');
            setRDate(now(getLocalTimeZone()));
            setDriver('');
          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );
    };


  return (
    <div className='dark h-fit min-h-fit w-full flex flex-col gap-8 justify-center'>
        <section className='h-fit w-full relative flex items-center'>
            <img
            className='h-[500px] min-h-screen absolute top-0 object-cover w-full z-0 opacity-75'
                src={rcp}
            />
            <div className='h-[500px] min-h-screen w-full max-w-[1024px] mx-auto px-8 flex flex-col lg:flex-row lg:justify-between py-4 relative z-30'>
                <form ref={form} onSubmit={sendEmail} className='py-6 rounded-[24px] h-fit w-fit md:min-w-[400px] max-w-[500px] mx-auto backdrop-blur-2xl p-4'>
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
                                    selectedKeys={pLocation}
                                    onSelectionChange={setPLocation}
                                    variant=''
                                    required
                                >
                                    <SelectItem key='Casons Head Office' className=''>
                                        Casons Head Office
                                    </SelectItem>
                                    <SelectItem key='BIA airport' className=''>
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
                                    selectedKeys={vehicleType}
                                    onSelectionChange={setVehicleType}
                                    variant=''
                                    required
                                    
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
                                <Button type='submit' variant='solid' color='primary' className='max-w-lg'>
                                    Send
                                </Button>
                            </div>
                        </Tab>
                        <Tab key="With driver" title={
                            <div className='flex flex-row gap-2 items-center'>
                                <FaCar/>
                                <p>With driver</p>
                            </div>
                        }  className='bg-transparent flex flex-col gap-4'>
                            <div className='h-fit w-full flex flex-col gap-4'>
                                <Select 
                                    label="PICKUP/RETURN LOCATION" 
                                    className="w-full lg:max-w-lg" 
                                    selectedKeys={pLocation}
                                    onSelectionChange={setPLocation}
                                    variant=''
                                    required
                                >
                                    <SelectItem key='Casons Head Office' className=''>
                                        Casons Head Office
                                    </SelectItem>
                                    <SelectItem key='BIA airport' className=''>
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
                                        onSelectionChange={setPDate}
                                    />
                                    <DatePicker
                                        className="w-full lg:max-w-lg" 
                                        granularity="second"
                                        label="Return Date and time"
                                        hideTimeZone
                                        value={rDate}
                                        onSelectionChange={setRDate}
                                    />
                                </div>
                                <Select 
                                    label="VEHICLE TYPE" 
                                    className="w-full lg:max-w-lg" 
                                    selectedKeys={vehicleType}
                                    onSelectionChange={setVehicleType}
                                    variant=''
                                    required
                                    
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
                                <Button type='submit' variant='solid' color='primary' className='max-w-lg'>
                                    Send
                                </Button>
                            </div>
                        </Tab>
                    </Tabs>
                </form>
            </div>
        </section>

        <section className='h-fit w-full'>
          <div className='h-fit w-full max-w-[1024px] mx-auto px-8 py-8'>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl text-white font-bold'>Car Rental Services</p>
            </div>
            <div className='flex flex-col md:flex-row py-4 gap-4 flex-wrap mt-4 justify-between'>
              <button className='md:min-h-full w-full py-4 px-4 border-[1px] gap-2 max-w-[300px] hover:border-white/75 duration-200 border-white/25 mx-auto rounded-[12px] flex flex-col justify-center items-center'>
                <p className='text-base font-semibold text-white'>Airport Pick-Ups and Drop-Offs</p>
                <ul className='flex flex-col gap-4 mt-2'>
                    <li className='text-white/50 text-sm text-center'>- Scheduled Pick-Ups: Pre-booked rides to ensure timely arrival and departure.</li>
                    <li className='text-white/50 text-sm text-center'> - Flight Tracking: Monitoring flight statuses to adjust pick-up times in case of delays.</li>
                </ul>
              </button>
              <button className='md:min-h-full w-full py-4 px-4 border-[1px] gap-2 max-w-[300px] hover:border-white/75 duration-200 border-white/25 mx-auto rounded-[12px] flex flex-col justify-center items-center'>
                <p className='text-base font-semibold text-white'>City Rides</p>
                <ul className='flex flex-col gap-4 mt-2'>
                    <li className='text-white/50 text-sm text-center'>- Point-to-Point Transfers: Direct rides between specific locations within the city.</li>
                    <li className='text-white/50 text-sm text-center'>- Hourly Rentals: Renting a cab by the hour for multiple stops or errands.</li>
                    <li className='text-white/50 text-sm text-center'>- Corporate Transfers: Special services for business travelers and corporate clients.</li>
                </ul>
              </button>
              <button className='md:min-h-full w-full py-4 px-4 border-[1px] gap-2 max-w-[300px] hover:border-white/75 duration-200 border-white/25 mx-auto rounded-[12px] flex flex-col justify-center items-center'>
                <p className='text-base font-semibold text-white'>Long-Distance Rides</p>
                <ul className='flex flex-col gap-4 mt-2'>
                    <li className='text-white/50 text-sm text-center'>- Intercity Transfers: Rides between different cities or towns.</li>
                    <li className='text-white/50 text-sm text-center'>- Outstation Trips: Longer trips for business or leisure outside the main city area.</li>
                </ul>
              </button>
              <button className='md:min-h-full w-full py-4 px-4 border-[1px] gap-2 max-w-[300px] hover:border-white/75 duration-200 border-white/25 mx-auto rounded-[12px] flex flex-col justify-center items-center'>
                <p className='text-base font-semibold text-white'>Special Occasion Services</p>
                <ul className='flex flex-col gap-4 mt-2'>
                    <li className='text-white/50 text-sm text-center'>- Event Transportation: Rides to and from events like weddings, parties, or concerts.</li>
                    <li className='text-white/50 text-sm text-center'>- Luxury Car Services: High-end vehicles for special occasions or VIP clients.</li>
                </ul>
              </button>
              <button className='md:min-h-full w-full py-4 px-4 border-[1px] gap-2 max-w-[300px] hover:border-white/75 duration-200 border-white/25 mx-auto rounded-[12px] flex flex-col justify-center items-center'>
                <p className='text-base font-semibold text-white'>Customized Services</p>
                <ul className='flex flex-col gap-4 mt-2'>
                    <li className='text-white/50 text-sm text-center'>- Package Delivery: Transporting packages or documents within the city.</li>
                </ul>
              </button>
              <button className='md:min-h-full w-full py-4 px-4 border-[1px] gap-2 max-w-[300px] hover:border-white/75 duration-200 border-white/25 mx-auto rounded-[12px] flex flex-col justify-center items-center'>
                <p className='text-base font-semibold text-white'>Subscription and Membership Plans</p>
                <ul className='flex flex-col gap-4 mt-2'>
                    <li className='text-white/50 text-sm text-center'>- Frequent Rider Programs: Discounts or benefits for regular users.</li>
                </ul>
              </button>
              <button className='md:min-h-full w-full py-4 px-4 border-[1px] gap-2 max-w-[300px] hover:border-white/75 duration-200 border-white/25 mx-auto rounded-[12px] flex flex-col justify-center items-center'>
                <p className='text-base font-semibold text-white'>Safety and Convenience Features</p>
                <ul className='flex flex-col gap-4 mt-2'>
                    <li className='text-white/50 text-sm text-center'>- 24/7 Availability: Rides available at any time of day or night.</li>
                    <li className='text-white/50 text-sm text-center'>- Multiple Payment Options: Credit/debit cards, bank transfers, or cash.</li>
                </ul>
              </button>
            </div>
          </div>
        </section> 
    </div>
  )
}

export default RentCarScreen