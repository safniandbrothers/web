import React from 'react'
import hbg from '../assets/HBG.png'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const HomeScreen = () => {
  return (
    <div className='h-fit w-full flex flex-col gap-14 relative'>
        <section className='h-fit w-full bg-black pt-[100px] '>
            <img src={hbg} alt='' className='h-[600px] lg:h-[500px] w-full lg:w-[800px] object-cover absolute z-10 lg:right-0' />
            <div className='h-[600px] lg:h-[500px] w-full max-w-[1024px] mx-auto flex lg:flex-row items-end lg:items-center lg:justify-start px-8 relative z-30'>
                <div className='h-fit w-full lg:w-[400px] flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <p className='text-4xl font-bold text-white capitalize'>Welcome to</p>
                            <p className='text-4xl font-bold text-[#4093f1] capitalize'>sufrian brothers</p>
                        </div>
                        <p className='text-sm text-white/80'>A simple declarative syntax means you write less code. Less code means your codebase is easier to read and maintain.</p>
                    </div>
                    <div className='flex gap-2'>
                        <Link to={'/destribution'}>
                            <Button variant='bordered' className='h-fit capitalize border-[2px] font-medium border-[#4093f1] text-xs md:text-sm text-[#4093f1] px-4 md:px-5 py-2 md:py-3 rounded-full'>
                                destribution
                            </Button>
                        </Link>
                        <Link to={'/rent-car'}>
                            <Button variant='bordered' className='h-fit capitalize border-[2px] font-medium border-[#4093f1] bg-[#4093f1] text-xs md:text-sm text-black px-4 md:px-5 py-2 md:py-3 rounded-full'>
                                Rent car
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className='h-fit w-full'>
            <div className='h-fit w-full max-w-[1024px] mx-auto px-8 flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3'>
                {/* <div className='py-8 px-6 border-[2px] border-white/20 rounded-[24px] flex items-center gap-4'>
                    <FaFacebook className='text-white text-4xl' />
                    <p className='text-lg font-bold text-white'>Rend a car </p>
                </div>
                <div className='py-8 px-6 border-[2px] border-white/20 rounded-[24px] flex items-center gap-4'>
                    <FaFacebook className='text-white text-4xl' />
                    <p className='text-lg font-bold text-white'>Destribution</p>
                </div>
                <div className='py-8 px-6 border-[2px] border-white/20 rounded-[24px] flex items-center gap-4'>
                    <IoLogoWhatsapp className='text-white text-4xl' />
                    <p className='text-lg font-bold text-white'>Rend a car </p>
                </div> */}
            </div>
        </section>
    </div>
  )
}

export default HomeScreen