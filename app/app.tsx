import Banner from '@/components/Banner'
import Header from '@/components/Header'

function App() {
  

  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh]'>
    <Header/>


    <main className='relative pl-4 '>
    <Banner title='hello' image='image urls'/>
    </main  >
    </div>

   
  )
}

export default App