import React from 'react'
import './faq.css'
import { useState } from 'react'

const faqs = [
    {
        title: 'Where is Salon My-Culture located?',
        content: 'We are located at No. 4 Morija Close, Off Ademola Adetokunbo Crescent, Behind Oti Carpets, Wuse 2, Abuja. Google Maps: No 4 Morija Close.'
    },

    {
        title: 'What services do you offer?',
        content: 'We offer so many services as a one stop salon that comprises of all salon services. From different nail types, hairstyling and wigs installation , hair braiding, men’s grooming, spa treatments, facials, massages, makeup services, nail care, and more.'
    },

    {
        title: 'Do you accept walk-ins?',
        content: 'Yes! Walk-ins are welcome, but we recommend booking an appointment for a premium experience.'
    },

    {
        title: 'How do I book an appointment?',
        content: 'You can book via Google Business Profile, Instagram / TikTok DMs, or WhatsApp.'
    },

    {
        title: 'Do you offer bridal packages?',
        content: 'Yes, we provide complete bridal beauty packages including hairstyling, makeup, spa treatments, and nails.'
    },

    {
        title: 'What are your business hours?',
        content: 'We are open from Sundays to Saturdays. We are 24hours.'
    },

    {
        title: 'Do you offer home services?',
        content: 'Yes, we provide luxury home service salon experiences for bridal styling, makeup, and personal grooming.'
    },

    {
        title: 'Do you specialize in African hair braiding?',

        content: 'Absolutely! We offer African hair braiding, dreadlocks maintenance, and high-quality extensions.'
    },
]




const FAQs = () => {


    return (
        <section className='faqs'>
            <div>
                <h1 style={{marginBottom: '10px'}}>FAQs</h1>
                <p>Here is a list of the most frequently asked questions from our customers to make things easier for you</p>
            </div>

            <div>
                {faqs.map(faq => (
                <div className="accordion">
                    <input type="checkbox" name="" id="" />
                    <div className="accordion-title">{faq.title}</div>
                     <div className="accordion-body">
                        <div>
                            <p>
                                {faq.content}
                            </p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}

export default FAQs