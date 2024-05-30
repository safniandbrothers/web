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
    <div className='h-screen min-h-fit w-full flex flex-col gap-8 bg-black pt-28 justify-center'>
        <section className='h-fit w-full '>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-8'>
                <div className=' rounded-[16px]'>
                    <Tabs aria-label="Options" 
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider px-2 rounded-[12px] py-2 mx-1 bg-gray-500",
                            cursor: "w-full group-data-[selected=true]:bg-[#181715]",
                            tab: "py-2 px-4 rounded-[6px] ",
                            tabContent: "group-data-[selected=true]:text-white text-black group-data-[selected=true]:bg-[#181715]"
                        }}
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
                                    className="w-full lg:max-w-md" 
                                    size='md'
                                    variant='faded'
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
                                        className="w-full lg:max-w-md" 
                                        granularity="second"
                                        label="Pickup Date and time"
                                        hideTimeZone
                                        value={date}
                                        onChange={setDate}
                                    />
                                    <DatePicker
                                        className="w-full lg:max-w-md" 
                                        granularity="second"
                                        label="Return Date and time"
                                        hideTimeZone
                                        value={date}
                                        onChange={setDate}
                                    />
                                </div>
                                <Select 
                                    label="VEHICLE TYPE" 
                                    className="w-full lg:max-w-md" 
                                    size='md'
                                    variant='faded'
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
                                    className="w-full lg:max-w-md" 
                                    size='md'
                                    variant='faded'
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
                                        className="w-full lg:max-w-md" 
                                        granularity="second"
                                        label="Pickup Date and time"
                                        hideTimeZone
                                        value={date}
                                        onChange={setDate}
                                    />
                                    <DatePicker
                                        className="w-full lg:max-w-md" 
                                        granularity="second"
                                        label="Return Date and time"
                                        hideTimeZone
                                        value={date}
                                        onChange={setDate}
                                    />
                                </div>
                                <Select 
                                    label="VEHICLE TYPE" 
                                    className="w-full lg:max-w-md" 
                                    size='md'
                                    variant='faded'
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