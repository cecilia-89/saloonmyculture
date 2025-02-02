import Header from './components/header/header'
import Hero from './components/hero/hero'
import AboutUs from './components/aboutus/aboutus'
import WhyUs from './components/whyus/whyus'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'
import BookNow from './components/booknow/booknow'
import Footer from './components/footer/footer'
import './App.css'



function App() {
  

  return (
    <>
     <section className="fixed-image">
      <img src="/images/1.jpg" alt="" />
     </section>
     <Header />
     <Hero />
     <AboutUs />
     <WhyUs />
     <Services />
     <Testimonials />
     <BookNow />
     <Footer />
    </>
  )
}

export default App
