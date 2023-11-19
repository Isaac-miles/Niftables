'use client'

import Image from "next/image"
import localFont from 'next/font/local'

const monumentExtendedFont = localFont({src:'../util/fonts/MonumentExtended-Regular.otf'})

type Title = {
  TitleForMediumScreen:string
  TitleForLargeScreen:string,
  paragraphForLargeScreen:string,
  paragraphForMediumScreen:string
}

type Props ={
  image :string
  title:Title
}

const Banner = ({image,title}:Props) => {

    // const bannerImage = new URL(`${image}, import.meta.url).href
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
           <h1 className={`${monumentExtendedFont.className} bannerHeading1`}>{title.TitleForLargeScreen}</h1>
           <span className="bannerParagraph border border-x-0 border-y-2 ">{title.paragraphForLargeScreen}</span>
        


        </div>

        <div className=" 2xl:hidden  relative  w-[964px] top-96 bg-transparent">
           <h1 className="bannerHeading2 ">{title.TitleForMediumScreen}</h1>
           <span className="bannerParagraph  border border-x-0 border-y-2">{title.paragraphForMediumScreen}</span>
        </div>
        
    </div>
     
    </>
   
  )
}

export default Banner