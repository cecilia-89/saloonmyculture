import Hero from '../../src/components/hero/hero'
import AboutUs from '../../src/components/aboutus/aboutus'
import WhyUs from '../../src/components/whyus/whyus'
import Gallery from '../../src/components/gallery/gallery'
import Testimonials from '../../src/components/testimonials/testimonials'
import BookNow from '../../src/components/booknow/booknow'
import FAQs from '../../src/components/FAQs/faq'
import { useEffect } from 'react'
import Services from '../../src/components/services/services'
import './landing.css'



function Landing() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  

  return (
    <div>
     <section className="fixed-image">
     </section>
    
     <Hero />
     <AboutUs />
     <WhyUs />
     <Gallery/>
     <Services />
     <Testimonials />
     <FAQs/>
     <BookNow />
    </div>
  )
}

export default Landing;
