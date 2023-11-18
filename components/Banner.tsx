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
    {/* <div className="bannerContainer w-full  h-screen flex-shrink-0 mix-blend-soft-light ">
      
    </div> */}
    <div className="flex  flex-col space-y-2 py-16 md:space-x-4 lg:justify-center items-center lg:pb">
        <div className="absolute top-0 left-0 w-screen h-[95vh] -z-10">
        <Image 
        fill={true} 
        src={bannerImage}
        alt="banner logo" 
        // objectFit="cover" 
        sizes="100%"
         priority/> 

        {/* <div className="relative bottom-32-0 bg-red-700">
       
        </div> */}
        </div> 
        
        <div className="hidden md:hidden 2xl:inline  relative  w-[56%] top-96 bg-transparent">
           <h1 className="bannerHeading ">{title}</h1>
        </div>
        {/* <div className="hidden md:hidden 2xl:inline  relative  w-[56%] top-96 bg-red-400">
           <h1 className="bannerHeading ">{title}</h1>
        </div> */}
        
    </div>
     
    </>
   
  )
}

export default Banner