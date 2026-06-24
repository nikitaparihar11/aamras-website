import Hero from '../components/Hero'
import Menu from '../components/Menu'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home