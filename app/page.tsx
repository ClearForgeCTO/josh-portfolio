import Navigation from './components/sections/Navigation'
import Hero from './components/sections/Hero'
import Journey from './components/sections/Journey'
import FourPillars from './components/sections/FourPillars'
import TheCollision from './components/sections/TheCollision'
import TheVision from './components/sections/TheVision'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function Home() {
  return (
    <main id="main-content">
      <Navigation />
      <Hero />
      <Journey />
      <FourPillars />
      <TheCollision />
      <TheVision />
      <Contact />
      <Footer />
    </main>
  )
}
