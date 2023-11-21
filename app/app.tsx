import Banner from '@/components/Banner'
import Header from '@/components/Header'
import CreonPass from '@/components/CreonPass'
import MissionStatement from '@/components/MissionStatement'
import ProfitThrough from '@/components/ProfitThrough'
import ComingSoon from '@/components/CommingSoon'
function App() {


 const titleFromDb = {
    TitleForLargeScreen:"The world's first platform for Tokenizing AI blockchain projects",
    TitleForMediumScreen:"Empowering AI-Crypto Innovations and Integrating AI Tools into crypto.",
    paragraphForLargeScreen:"Hold the Creon Pass NFT and earn passive income from AI Tools",
    paragraphForMediumScreen:"Creon «Create On» confidential AI Tools for granting access through NFTs."
 }
  return (
    <>
    <section className='relative bg-gradient-to-b h-screen '>
    <Header/>

    <div className='relative pl-4  mix-blend-mode: soft-light'>
      <Banner title={titleFromDb} image='image urls'/>
     
    </div>
    </section>
   
    <section className='hidden nifxl:inline'>
      <CreonPass/>
    </section>

    <section className='nifxl:hidden'>
      <MissionStatement/>
    </section>
{/* 
    <section className=''>
      <ProfitThrough/>
    </section> */}

    <section className=''>
      <ComingSoon/>
    </section>
    </>

   
  )
}

export default App