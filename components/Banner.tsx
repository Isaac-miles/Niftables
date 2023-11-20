'use client'
import Image from "next/image"
import localFont from 'next/font/local'

const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})

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
 
    <div className="flex  flex-col  py-16 md:space-x-4 lg:justify-center items-start md:items-start 2xl:items-center lg:items-center ">
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
           <h1 className={`${monumentExtendedFont.className} bannerHeading mb-3`}>{title.TitleForLargeScreen}</h1>
           <span className={`${satoshi.className} bannerParagraph bannerParagraphExtra border border-x-0 border-y-2`}>{title.paragraphForLargeScreen}</span>
      </div>

      <div className="2xl:hidden  relative w-[345px] xl:w-[90%] lg:w-[85%] md:min-w-[80%] top-72 2xl:top-96 lg:top-[55vh] md:top-96 bg-transparent">
           <h1 className={`${monumentExtendedFont.className} bannerHeading mb-3`}>{title.TitleForMediumScreen}</h1>
           <div className={`${satoshi.className} bannerParagraph bannerParagraphExtra border border-x-0 border-y-2 `}>{title.paragraphForMediumScreen}</div>
      </div>
        
    </div>
     
    </>
   
  )
}

export default Banner