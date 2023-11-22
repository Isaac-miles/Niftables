import Banner from '@/components/Banner'
import Header from '@/components/Header'
import CreonPass from '@/components/CreonPass'
import MissionStatement from '@/components/MissionStatement'
import ProfitThrough from '@/components/ProfitThrough'
import ComingSoon from '@/components/CommingSoon'
import ServicesOffered from '@/components/ServicesOffered'
import Footer from '@/components/Footer'
function App() {


  return (
    <>
    <section className='relative bg-gradient-to-b h-screen '>
    <Header/>

    <div className='relative pl-4  mix-blend-mode: soft-light'>
      <Banner/>
     
    </div>
    </section>
   
    <section className=' lg:inline'>
      <CreonPass/>
    </section>

    {/* <section className='nifxl:hidden'>
      <MissionStatement/>
    </section> */}

    {/* <section className=''>
      <ProfitThrough/>
    </section> */}

   {/* <section className=''>
      <ComingSoon/>
    </section>  */}

    {/* <section className=''>
      <ServicesOffered/>
    </section> */}

    <section className='mb-40'>
      <Footer/>
    </section>
 
    </>

   
  )
}

export default App