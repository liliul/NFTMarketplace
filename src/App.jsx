import Header from './pages/header/Header'
import TitleHead from './pages/contents/Titlehead'
import Cardhiddegems from './pages/contents/CardHiddeGems'


function App() {

  return (
    <>
      <section className="max-w-[1440px] relative  h-[1200px] m-auto img-ball">

        <Header />

        <main className='w-full h-auto '>
        
          <TitleHead />

          <Cardhiddegems />
        
        </main>
      </section>
    </>
  )
}

export default App
