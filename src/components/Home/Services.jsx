import './services.css'
import secondhalf from '../../assets/secondhalf.png'
import bottomhalf from '../../assets/bottomhalf.svg'
import { Link } from 'react-router-dom'

import one from '../../assets/services/1.png'
import two from '../../assets/services/2.png'
import three from '../../assets/services/3.png'
import four from '../../assets/services/4.png'

import { useState } from 'react'

function Services() {

    var Service = ''
    var Description = ''
    var image = ''

    const [service, setService] = useState('Website Development')

    if (service === 'Website Development') {
        Service = 'Website Development'
        Description = 'From e-commerce sites to personal portfolios, we have expertise in all of them. Our team design and creates customised websites for your brand ensuring responsive design so your website looks great and flawless on all devices.'
        image = one
    }

    if (service === 'Graphic Designing') {
        Service = 'Graphic Designing'
        Description = 'Our expert designers create stunning visuals that captivate your audience. We offer customized solutions to fit your branding and marketing needs. Enhance your online presence with eye-catching graphics that attract customers.'
        image = two
    }

    if (service === 'App Development') {
        Service = 'App Development'
        Description = 'Our experienced developers will bring your app idea to life. We offer flexible solutions tailored to your specific business needs. Increase user engagement and retention with our innovative app development service.'
        image = three
    }

    if (service === 'UI/UX Designing') {
        Service = 'UI/UX Designing'
        Description = 'Our expert designers create stunning visuals that captivate your audience. We offer customized solutions to fit your branding and marketing needs. Enhance your online presence with eye-catching graphics that attract customers.'
        image = four
    }

    return (
        <section id='services'>
            <img src={secondhalf} alt="" className='second-half' />
            <img src={bottomhalf} alt="" className='bottom-half' />

            {/* <div className='services'>
                <div className="service">
                    <img src={one} alt="services" />
                    <h2>Website <br /> Development</h2>
                    <p>
                        From e-commerce sites to personal portfolios, we have expertise in all of them.
                        Our team design and creates customised websites for your brand
                        ensuring responsive design so your website looks great and flawless on all devices.
                    </p>
                </div>
                <div className="service">
                    <img src={two} alt="services" />
                    <h2>Graphic <br /> Designing</h2>
                    <p>
                        Our expert designers create stunning visuals that captivate your audience.
                        We offer customized solutions to fit your branding and marketing needs.
                        Enhance your online presence with eye-catching graphics that attract customers.</p>
                </div>
                <div className="service">
                    <img src={three} alt="services" />
                    <h2>App <br /> Development</h2>
                    <p>
                        Our experienced developers will bring your app idea to life.
                        We offer flexible solutions tailored to your specific business needs.
                        Increase user engagement and retention with our innovative app development service.
                    </p>
                </div>
            </div> */}

            <div className='types'>
                <div className='selection'>
                    <h2 onClick={() => setService('Website Development')}>Website Development</h2>
                    <h2 onClick={() => setService('Graphic Designing')}>Graphic Designing</h2>
                    <h2 onClick={() => setService('App Development')}>App Development</h2>
                    <h2 onClick={() => setService('UI/UX Designing')}>UI/UX Designing</h2>
                </div>
                <div className='display'>
                    <div className='display-text'>
                        <h1>{Service}</h1>
                        <p>{Description}</p>
                        <Link to='/contact'>
                            Get Started
                        </Link>
                    </div>
                    <div className='display-image'>
                        <img src={image} alt="service image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services