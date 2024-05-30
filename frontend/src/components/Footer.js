import React from 'react'
import logo from '../assets/logo.png'
import {Button} from "@nextui-org/react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import logo1 from '../assets/logo1.png'
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='h-fit w-full bg-blue-400 py-2 mt-4'>
      <div className='h-fit w-full max-w-[1024px] mx-auto flex flex-col md:flex-row md:justify-between '>
        <div className='w-full py-4 md:py-0 md:px-0 flex flex-col md:flex-row items-center md:text-start mx-auto gap-2'>
          {/* <div className=' w-full flex items-center justify-center lg:justify-start rounded-[8px] mb-4 py-8'>
            <img src={logo1} alt='' className='h-[100px] w-fit object-contain mx-auto' />
          </div>         */}
          {/* <p className='text-2xl font-bold text-white uppercase text-center lg:text-left'>ISAFNY & BROTHERS <span className='text-sm'>(PVT) Ltd</span></p> */}
            <div className='flex flex-col md:flex-row gap-2 md:gap-8 w-full items-center justify-center'>
              <div className='flex items-center gap-2'>
                <FaLocationDot  className='text-white'/>
                <p className='text-center lg:text-left text-sm text-white/75 font-medium'> 98 Broadway Road, Akkaraipattu - 01</p>
              </div>
              <div className='flex items-center gap-2'>
                <IoCall  className='text-white'/>
                <p className='text-center lg:text-left text-sm text-white/75'>0777926383 </p>
              </div>
              <div className='flex items-center gap-2'>
                <IoMail  className='text-white'/>
                <p className='text-center lg:text-left text-sm text-white/75'>safnyandbrotherspvt@gmail.com </p>
              </div>
            </div>
            <div className='w-fit py-4 flex items-center justify-center'>
              <Button isIconOnly startContent={<RiInstagramFill className='text-2xl text-white'/>} variant='light'>
              </Button>
              <Button isIconOnly startContent={<FaFacebook  className='text-2xl text-white'/>} variant='light'>

              </Button>
              <Button isIconOnly startContent={<FaLinkedin  className='text-2xl text-white'/>} variant='light'>

              </Button>
            </div>
        </div>

        {/* <div className='w-full max-w-[500px] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-base font-bold border-b-[1px] border-white border-opacity-25 py-4 bg-blue-500 gap-6 h-[60px] flex items-end text-center md:text-left text-white'>USE FULL LINKS </p>
            <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>Rent a car</Link>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>Ditribution</Link>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>Contact us</Link>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>About us</Link>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>Services</Link>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-base font-bold border-b-[1px] border-white border-opacity-25 py-4 bg-blue-500 gap-6 h-[60px] flex items-end text-center md:text-left text-white'>QUICK LINKS</p>
            <div className='px-4 flex flex-col gap-2 py-2 md:py-4 order-1 text-center md:text-start'>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>collaboration</Link>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>VERIFY CERTIFICATE</Link>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>PAY ONLINE</Link>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>FAQ</Link>
              <Link className='text-xs text-white/50 hover:text-white/75 uppercase'>more</Link>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer