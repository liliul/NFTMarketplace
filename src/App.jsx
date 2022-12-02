import Header from './pages/header/Header'
import TitleHead from './pages/contents/Titlehead'
import Cardhiddegems from './pages/contents/CardHiddeGems'
import TopCollections from './pages/contents/TopCollections'
import CreateNft from './pages/contents/CreateNft'
import DiscoverFooter from './pages/contents/DiscoverFooter'
import Footer from './pages/footer/Footer'

import ImgFooter from './assets/background.png'

function App() {

  return (
    <>
      <section className="max-w-[1440px] h-auto m-auto img-ball">

        <Header />
        
        <main className='w-full h-auto '>
          
          <TitleHead />
          
          <Cardhiddegems />
         
          <TopCollections />
          
          <CreateNft /> 
        </main>
        
        <section className="w-full h-auto footergradient relative">
           <img src={ImgFooter} className='footer-gradient' alt="Img" /> 
          <DiscoverFooter />
          
          <Footer />
        </section>
      </section>
    </>
  )
}

export default App
