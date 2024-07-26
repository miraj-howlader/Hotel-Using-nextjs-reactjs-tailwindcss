'use client'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Socials from './Socials'
const Footer = () => {
  return (
    <footer className=' bg-soft_green-secondary relative
     pt-12 xl:pt-12 mb-12'>
      <div className="container mx-auto">
        <motion.div
         variants={fadeIn('up', 0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount:0.4}}
        >
          <div className=' flex flex-col xl:flex-row bg-white
           p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36
            xl:gap-x-12'>
            {/* img text  */}
            <div className=' xl:w-[470px] mb-6 xl:mb-0'>
             <Link href='/'>
             <Image 
              src='/footer/logo.svg'
              width={80}
              height={36}
              alt=''
              className=' mb-2'
              />
             </Link>
             <p className=' text-lg leading-9'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dicta ex corrupti inventore aut quia doloribus accusamus tenetur sint. Rerum.</p>
            </div>
            {/* navagation  */}
            <div className=' flex-1'>
              <h4 className='h4 mb-6'>Navagation</h4>
              <ul className=' flex flex-col gap-y-6 text-lg'>
                <li className=' hover:text-orange transition-all duration-300'>
                  <Link href='/'>Home</Link>
                </li>
                <li className=' hover:text-orange transition-all duration-300'>
                  <Link href='/'>Find Hotel</Link>
                </li>
                <li className=' hover:text-orange transition-all duration-300'>
                  <Link href='/'>About Us</Link>
                </li>
                <li className=' hover:text-orange transition-all duration-300'>
                  <Link href='/'>Contact Us</Link>
                </li>
              </ul>
            </div>


            {/* Contact us  */}
            <div className=' flex-1'>
              <h4 className='h4 mb-6'>Contact Us</h4>
              <ul className=' flex flex-col gap-y-6 text-lg'>
                <li className=' hover:text-orange transition-all duration-300'>++88 0173 1458 068</li>
                <li className=' hover:text-orange transition-all duration-300'>mirajhowlader9999@gmail.com</li>
                <li className=' hover:text-orange transition-all duration-300'>Dhaka Bangladesh</li>
               
              </ul>
            </div>

          </div>
        </motion.div>

        <div className=' py12 xl:mt-32 flex flex-col xl:flex-row
         xl:justify-between'>
          <p className=' text-black font-semibold text-center
           mb-4 xl:mb-0'>Copyright &copy; 2024. All rights reserved.</p>
          <Socials containerStyles='flex gap-x-4 text-black
           mx-auto xl:mx-0'/>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
