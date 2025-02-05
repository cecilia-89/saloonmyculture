import Header from './components/header/header'
import Hero from './components/hero/hero'
import AboutUs from './components/aboutus/aboutus'
import WhyUs from './components/whyus/whyus'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'
import BookNow from './components/booknow/booknow'
import Footer from './components/footer/footer'
import FAQs from './components/FAQs/faq'
import './App.css'



function App() {
  

  return (
    <div>
     <section className="fixed-image">
     </section>
     <Header />
     <Hero />
     <AboutUs />
     <WhyUs />
     <Services />
     <Testimonials />
     <FAQs/>
     <BookNow />
     <Footer />
    </div>
  )
}

export default App
