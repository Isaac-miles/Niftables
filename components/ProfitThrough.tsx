import localFont from 'next/font/local'
import Image from 'next/image'
import { listItems, writeUpsFromDb } from '@/util/statements'
const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})

function ProfitThrough() {

  const bgImage = new URL(`/public/img/creonLogo.png`, import.meta.url).href
  const bgImageSM = new URL(`/public/img/creonlogoSM.png`, import.meta.url).href
 
  return (
  <div className='grid w-full content-center  px-24 lg:px-16 nifxl:px-[80px] xlmd:px-2 pt-8 bg-cyan-600'>

     <div className="group w-full md:-ml-2 bg-black px-10 pb-12 " >
    
        <div  className="flex flex-col items-end space-y-4  md:space-y-2.5 p-2 mb-6">
        <h1 className={`${monumentExtendedFont.className} bannerHeading self-start `}>Profiting Through</h1>
        <span className={`${monumentExtendedFont.className} bannerParagraph bannerParagraphExtra !text-[22px]  pt-2 lg:pl-0 justify-end uppercase`}>AI Innovation & Decentralization</span> 
        </div>

        <div className="flex nifxl:flex-row  lg:flex-row w-full xlmd:flow-col" >
            <div  className=" w-[80%] mr-3">

            <div className='hidden nifxl:inline w-full '>
              <Image
              width={947}
              height={549}
              src={bgImage}
              alt="banner logo" 
              className='rounded-sm'
              sizes="100%"
              priority/> 
              </div>
            <div className='nifxl:hidden w-full'>
              <Image
              width={947}
              height={549}
              src={bgImageSM}
              alt="banner logo" 
              className='rounded-sm'
              sizes="100%"
              priority/> 
              </div>
            </div>
              
            <div  className="flex flex-col w-[65%]  md:p-2  border-x-2 border-[#13171d]">
              <div className='mx-3'>
              <h2 className= {`${satoshi.className} bannerParagraph text-white mb-4 `}>The dynamic community driven business model of the future.</h2>
                <div  className= {`${satoshi.className}  text-white text-sm `}>At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business 
                  model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from 
                  the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects
                   we launch.</div>
              </div>
            </div>
        </div> 
      </div> 
  </div>
  )
}

export default ProfitThrough