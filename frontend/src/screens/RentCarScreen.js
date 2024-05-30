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

const RentCarScreen = () => {
    let [date, setDate] = useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));
    const [selected, setSelected] = React.useState("login");

  return (
    <div className='h-fit min-h-fit w-full flex flex-col gap-8  pt-24 justify-center'>
        <section className='h-fit w-full relative'>
            <img
            className='h-[500px] min-h-screen absolute top-0 object-cover w-full z-0'
                src='https://images.wondershare.com/pixcut/assets/Blog/blogimages202103/5-car-photography-tips-you-should-know-%234.jpg'
            />
            <div className='h-[500px] min-h-screen w-full max-w-[1024px] mx-auto px-8 flex justify-center py-4 relative z-30'>
                <div className=' rounded-[24px] h-fit w-full max-w-[500px] mx-auto bg-white p-4'>
                    <Tabs aria-label="Options" 
                    variant='solid' color='primary'
                        className='px-1 w-full'
                       >
                        <Tab key="Self drive" title={
                            <div className='flex flex-row gap-2 items-center'>
                                <FaCar/>
                                <p>Self drive</p>
                            </div>
                        }  className='bg-transparent flex flex-col gap-4'>
                            <div className='h-fit w-full py-4 flex flex-col gap-4'>
                                <Select 
                                    label="PICKUP/RETURN LOCATION" 
                                    className="w-full lg:max-w-lg" 
                                    size='sm'
                                    variant=''
                                    // classNames={{
                                    //     label: "group-data-[filled=true]:-translate-y-5 text-white",
                                    //     trigger: "min-h-16 bg-black hover:bg-black",
                                    //     listboxWrapper: "max-h-[400px] ",
                                    // }}
                                    // // popoverProps={{
                                    // //     classNames: {
                                    // //         base: "before:bg-black bg-black rounded-[12px]",
                                    // //         content: "p-0 border-small border-divider bg-black rounded-[12px]",
                                    // //     },
                                    // //     }}
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
                                        value={date}
                                        onChange={setDate}
                                    />
                                    <DatePicker
                                        className="w-full lg:max-w-lg" 
                                        granularity="second"
                                        label="Return Date and time"
                                        hideTimeZone
                                        value={date}
                                        onChange={setDate}
                                    />
                                </div>
                                <Select 
                                    label="VEHICLE TYPE" 
                                    className="w-full lg:max-w-lg" 
                                    size='sm'
                                    variant=''
                                    // classNames={{
                                    //     label: "group-data-[filled=true]:-translate-y-5 text-white",
                                    //     trigger: "min-h-16 bg-black hover:bg-black",
                                    //     listboxWrapper: "max-h-[400px] ",
                                    // }}
                                    // // popoverProps={{
                                    // //     classNames: {
                                    // //         base: "before:bg-black bg-black rounded-[12px]",
                                    // //         content: "p-0 border-small border-divider bg-black rounded-[12px]",
                                    // //     },
                                    // //     }}
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
                            <div className='h-fit w-full py-4 flex flex-col gap-4'>
                                <Select 
                                    label="PICKUP/RETURN LOCATION" 
                                    className="w-full lg:max-w-lg" 
                                    size='sm'
                                    variant=''
                                    // classNames={{
                                    //     label: "group-data-[filled=true]:-translate-y-5 text-white",
                                    //     trigger: "min-h-16 bg-black hover:bg-black",
                                    //     listboxWrapper: "max-h-[400px] ",
                                    // }}
                                    // // popoverProps={{
                                    // //     classNames: {
                                    // //         base: "before:bg-black bg-black rounded-[12px]",
                                    // //         content: "p-0 border-small border-divider bg-black rounded-[12px]",
                                    // //     },
                                    // //     }}
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
                                        value={date}
                                        onChange={setDate}
                                    />
                                    <DatePicker
                                        className="w-full lg:max-w-lg" 
                                        granularity="second"
                                        label="Return Date and time"
                                        hideTimeZone
                                        value={date}
                                        onChange={setDate}
                                    />
                                </div>
                                <Select 
                                    label="VEHICLE TYPE" 
                                    className="w-full lg:max-w-lg" 
                                    size='sm'
                                    variant=''
                                    // classNames={{
                                    //     label: "group-data-[filled=true]:-translate-y-5 text-white",
                                    //     trigger: "min-h-16 bg-black hover:bg-black",
                                    //     listboxWrapper: "max-h-[400px] ",
                                    // }}
                                    // // popoverProps={{
                                    // //     classNames: {
                                    // //         base: "before:bg-black bg-black rounded-[12px]",
                                    // //         content: "p-0 border-small border-divider bg-black rounded-[12px]",
                                    // //     },
                                    // //     }}
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