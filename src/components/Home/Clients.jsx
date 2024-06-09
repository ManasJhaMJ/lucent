import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import upperhalf from '../../assets/secondhalf.png'
import Globe from './Globe'
import './clients.css'


function Clients() {
    return (

        <section id='clients'>
            <img src={upperhalf} alt="" className='upper-half' />
            <h1>Clients we worked for</h1>
            <div className='clients'>
                <div className='companies'>
                    <span>
                        Netplay Book
                    </span>
                    <span>
                        Shastra
                    </span>
                    <span>
                        Stake
                    </span>
                    <span>
                        BestUpay
                    </span>
                    <span>
                        KR$NA
                    </span>
                    <span>
                        Gully Gang
                    </span>
                    <span>
                        Kalamkaar
                    </span>

                </div>
                <div className='globe-container'>
                    <Globe />
                    <div className='client-texts'>
                        <div className='clients-num client-pos'>
                            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                    <div className='client-text'>
                                        {isVisible ? <p><CountUp end={15} duration="5" scrollSpyDelay={1200} />+ Clients</p> : '15+ Clients'}
                                    </div>
                                )}
                            </VisibilitySensor>
                        </div>
                        <div className='clients-num projects-pos'>
                            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                    <div className='client-text'>
                                        {isVisible ? <p><CountUp end={30} duration="7" scrollSpyDelay={1200} />+ Projects</p> : '30+ Projects'}
                                    </div>
                                )}
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Clients