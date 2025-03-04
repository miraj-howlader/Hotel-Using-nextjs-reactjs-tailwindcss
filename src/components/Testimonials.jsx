'use client'

import {Swiper,SwiperSlide} from "swiper/react"
import Image from "next/image"
import { Button } from "./ui/button"
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"


const testimonialData = [
    {
        img:'/testimonials/img-1.png',
        message:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint harum, reiciendis dignissimos consequuntur minus nemo cumque quasi libero ipsa magnam id adipisci veniam eius aperiam qui. Voluptate qui quas adipisci consectetur quos eaque nisi nihil aut similique eos, quam ea autem vero voluptatibus vitae, at amet fuga esse voluptas. Maxime.',
        personName:"Robert Rene",
        location:"Singaproe"

    },
    {
        img:'/testimonials/img-2.png',
        message:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint harum, reiciendis dignissimos consequuntur minus nemo cumque quasi libero ipsa magnam id adipisci veniam eius aperiam qui. Voluptate qui quas adipisci consectetur quos eaque nisi nihil aut similique eos, quam ea autem vero voluptatibus vitae, at amet fuga esse voluptas. Maxime.',
        personName:"Emile John",
        location:"Singaproe"

    },
]
const Testimonials = () => {
  return (
    <motion.section
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0}}
     className=" bg-soft_green xl:h-[880px]">

        <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0}}
         className="container mx-auto">
        <Swiper modules={[Pagination]}
        pagination={{clickable:true}}
        className=" xl:h-[680px] overflow-hidden"
       
        >
        {
            testimonialData.map((slide,index)=>{
                return <SwiperSlide key={index}>
                    <div className=" grid grid-cols-1
                     xl:grid-cols-2 py-12 xl:py-24">
                        <Image
                        src={slide.img}
                        width={470}
                        height={100}
                        alt=""
                        className="hidden xl:flex" 
                        />
                        <div className=" flex-1 bg-white/20
                         text-white p-12">
                            <p className=" text-lg leading-9
                             mb-8">{slide.message}</p>
                            <p className="text-xl font-bold">{slide.personName}</p>
                            <p>{slide.location}</p>
                        </div>
                    </div>

                </SwiperSlide>
            })
        }
        </Swiper>
        </motion.div>
       
      
    </motion.section>
  )
}

export default Testimonials
