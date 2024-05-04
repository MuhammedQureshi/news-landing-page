'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from "react";

const Navbar = () => {

    const routes = [
        {href: '#', label: 'Home'},
        {href: '#', label: 'New'},
        {href: '#', label: 'Popular'},
        {href: '#', label: 'Trending'},
        {href: '#', label: 'Categories'},
    ]
    const [toggle, setToggle] = useState(false);

    const handleMenu = () => {
      setToggle(!toggle);
    }

  return (
    <div className='flex flex-row p-2'>
        <div>
        <Image src='/images/logo.svg' width={78} height={100} alt='W' />
        </div>

        <div className='md:flex items-center justify-end w-full hidden'>
        <ul className='flex gap-8 '>
            {routes.map((route) => (
                <Link className='customFont' href={route.href} key={route.label}>
                    {route.label}
                </Link>
            ))}
        </ul>
        </div>
        {/* Mobile Menu */}
        <div onClick={handleMenu} className={'md:hidden flex items-center justify-end w-full'}>
          <Image src={!toggle ? '/images/iconMenu.svg' : '/images/iconMenuClose.svg'} width={55} height={50} alt={''}/>
        </div>
    </div>
  )
}

export default Navbar