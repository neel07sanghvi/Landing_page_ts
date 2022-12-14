import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import sheet from '../public/assets/sheet.png';
import lab from '../public/assets/lab.png';

const Navbar = () => {


  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [navbar_active, setnavbar_active] = useState("Home")


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {

    const handleShadow = () => {
      if (window.scrollY === 0) {
        setnavbar_active("Home")
      }
      else if (window.scrollY <= screen.height)
      {
        setnavbar_active("Services")
      }
      else if (window.scrollY <= 2*screen.height)
      {
        setnavbar_active("Aboutus")
      }
      else{
        setnavbar_active("Contactus")
      }

      console.log(screen.height)
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20 ) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed bg-[linear-gradient(90deg,rgba(34,34,34,0.6)0%,rgba(0,0,0,0.1)97.68%)] backdrop-blur-xl font-navfont  w-full h-[65px] z-[200]'
          : 'fixed backdrop-blur-xl font-navfont  w-full h-[65px] z-[200]'
      }
    >

        <div className='flex justify-center md:justify-end items-center w-full h-full md:px-16   relative'>
        <a href='/' className='flex justify-between items-center md:absolute md:pl-16  left-0'>
            <Image
              src={lab}
              alt='/'
              className='w-[55px] h-[55px] cursor-pointer'
            />
            <h3 className='text-lg px-[10px]' >DARWIN LAB</h3>
        </a>
        <div>
          <ul  className='hidden lg:flex text-[15px]'>
            <li className={navbar_active === "Home" ? 'ml-16  border-b-2 py-5 border-[var(--primary)]': 'ml-16  py-5'}>
              <a href='/#'>
                Home
              </a>
            </li>
            <li className={navbar_active === "Services" ? 'ml-16  border-b-2 py-5 border-[var(--primary)]': 'ml-16  py-5'}>
              <a href='/#services'>
                Services
              </a>
            </li>
            <li className={navbar_active === "Aboutus" ? 'ml-16  border-b-2 py-5 border-[var(--primary)]': 'ml-16  py-5'}>
              <a href='/#aboutus'>
                About us
              </a>
            </li>
            <li className={navbar_active === "Contactus" ? 'ml-16  border-b-2 py-5 border-[var(--primary)]': 'ml-16  py-5'}>
              <a href='/#contactus'>Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar