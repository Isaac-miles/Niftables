'use client'
import Image from "next/image"
import localFont from 'next/font/local'
import { BannerTitleFromDb } from "@/util/statements"

const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})


const Banner = () => {

    const bannerImage = new URL(`/public/img/banner.jpg`, import.meta.url).href

  return (
 
    <div className="flex  flex-col  py-16 md:space-x-4 lg:justify-center items-start md:items-start 2xl:items-center lg:items-center  ">
      <div className="absolute top-0 left-0 w-screen h-[95vh] -z-10">
        <Image 
        fill={true} 
        src={bannerImage}
        alt="banner logo" 
        // objectFit="cover" 
        sizes="100%"
         priority/> 
           
      </div> 
        
      <div className="hidden md:hidden 2xl:inline  relative  w-[90%] top-96 bg-transparent">
           <h1 className={`${monumentExtendedFont.className} bannerHeading mb-3`}>{BannerTitleFromDb.TitleForLargeScreen}</h1>
           <span className={`${satoshi.className} bannerParagraph bannerParagraphExtra border border-x-0 border-y-2`}>{BannerTitleFromDb.paragraphForLargeScreen}</span>
      </div>

      <div className="2xl:hidden  relative w-[345px] xl:w-[90%] lg:w-[85%] md:min-w-[80%] top-72 2xl:top-96 lg:top-[40vh] md:top-96 xlmd:top-[10rem] xsm:top-[12rem]  bg-transparent">
           <h1 className={`${monumentExtendedFont.className} bannerHeading mb-3 `}>{BannerTitleFromDb.TitleForMediumScreen}</h1>
           <div className={`${satoshi.className} bannerParagraph bannerParagraphExtra border border-x-0 border-y-2 `}>{BannerTitleFromDb.paragraphForMediumScreen}</div>
      </div>
        
    </div>
     

   
  )
}

export default Banner