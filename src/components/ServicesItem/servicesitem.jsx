import React from 'react';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { services } from '../../../utils/services';
import './servicesitem.css'


const Servicesitem = () => {
    const location = useLocation();
    const lastSegment = location.pathname.split("/").filter(Boolean).pop();
    const service = services.find(service => service.slug === lastSegment);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section className="service-item">
           <div style={{marginTop: '80px', padding: '20px'}}>
                <h1 style={{fontWeight: 600, marginBottom: '10px'}}>{service.title}</h1>
                <p>{service.header}</p>

                <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '25px'}}>
                    {service.treatments.map((treatment, index) => (
                        <div key={index}>
                            <div style={{fontWeight: 500}}>
                                {treatment.type}
                            </div>
                            <ul style={{marginTop: '10px'}}>
                                {treatment.services.map((s, i) => (
                                    <li key={i} style={{listStyle: 'none', display: 'flex'}}>
                                        <p>{s.service}</p>
                                        <p>{s.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="service-footer">{service.footer}</p>
           </div>
        </section>
    )
}

export default Servicesitem