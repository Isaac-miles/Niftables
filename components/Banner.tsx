'use client'

import Image from "next/image"
import { useEffect, useState } from "react"


type Props ={
    image :string
    title:string
}

const Banner = ({image,title}:Props) => {

    const bannerImage = new URL(`/public/img/banner.jpg`, import.meta.url).href

  return (
    <>
    <div className="bannerContainer w-full  h-screen flex-shrink-0 mix-blend-soft-light ">
      
    </div>
    <div className="">
        <div className="absolute top-0 left-0 w-screen h-[95vh] -z-10">
        <Image 
        fill={true} 
        src={bannerImage}
        alt="banner logo" 
        // objectFit="cover" 
        sizes="100%"
         priority/> 

        {/* <div className="relative bottom-32-0 bg-red-700">
        <h1 className="text-2xl md:text-4xl font-bold lg:text-7xl text-white ">{title}</h1>
        <p  className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{title}</p>
         
        </div> */}
        </div> 
        
       
      
    </div>
     
    </>
   
  )
}

export default Banner