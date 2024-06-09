import './services.css'
import secondhalf from '../../assets/secondhalf.png'
import bottomhalf from '../../assets/firsthalf.png'
import { Link } from 'react-router-dom'

import one from '../../assets/services/1.svg'
import two from '../../assets/services/2.svg'
import three from '../../assets/services/3.svg'
import tick from '../../assets/services/tick.svg'

function Services() {
    return (
        <section id='services'>
            <img src={secondhalf} alt="" className='second-half' />
            <img src={bottomhalf} alt="" className='bottom-half' />

            <div className="services">
                <div className="service">
                    <img src={one} className='servicetop' alt="" />
                    <h2>Website <br /> Development</h2>
                    <hr />
                    <div className='points'>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Mobile optimization</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>SEO Friendly</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Quick Delivery</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Creative Designs</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Fast & Secure</p>
                        </span>
                    </div>
                    <Link to='/work' className='btn'>
                        <button>View More</button>
                    </Link>
                </div>
                <div className="service">
                    <img src={two} className='servicetop' alt="" />
                    <h2>Graphic <br /> Designing</h2>
                    <hr />
                    <div className='points'>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Creative solutions</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>High Quality</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Competitive Pricing</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Brand Solutions</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Timely Communication</p>
                        </span>
                    </div>
                    <Link to='/work' className='btn'>
                        <button>View More</button>
                    </Link>

                </div>
                <div className="service">
                    <img src={three} className='servicetop' alt="" />
                    <h2>App <br /> Development</h2>
                    <hr />
                    <div className='points'>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Fully Responsive</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Secure app</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>User-friendly UI</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Creative Designs</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Fast & Secure</p>
                        </span>
                    </div>
                    <Link to='/work' className='btn'>
                        <button>View More</button>
                    </Link>

                </div>
            </div>

        </section>
    )
}

export default Services