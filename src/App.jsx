import { useState } from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Roadmap from './Components/Roadmap'
import Tokenomics from './Components/Tokenomics'
import Faq from './Components/Faq'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Feature from './Components/Feature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className=' bg-[#000000] font-display'>

        <Header />
        <Feature/>
        <About />
        <Roadmap />
        <Tokenomics />
        <Faq/>
        <Contact />
        <Footer/>
      </section>
    </>
  )
}

export default App
