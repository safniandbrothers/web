import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar position="static" shouldHideOnScroll className='fixed top-0 h-fit flex flex-col items-center justify-center backdrop-blur-md bg-transparent border-b-[1px] border-[#4093f1] border-opacity-50 py-4 px-2'>
        <Link to={'/'} className='mx-auto py-7 border-b-[2px] border-[#4093f1]'>
          <img src={logo} alt='' className='h-10 object-contain'/>
        </Link>
    </Navbar>
  )
}

export default Header