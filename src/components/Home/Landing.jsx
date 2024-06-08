import { Link } from 'react-router-dom'
import ball1 from '../../assets/ball1.svg'
import ball2 from '../../assets/ball2.svg'
import ball3 from '../../assets/ball3.svg'
import firsthalf from '../../assets/firsthalf.png'

function Landing() {
    return (
        <>
            <section id="landing">
                <h1>LUCENT</h1>
                <h2>Lighting your way to digital solutions</h2>
                <Link to='/work'>
                    <button>View Work</button>
                </Link>
                <img src={ball1} alt="" className="landing-balls1" />
                <img src={ball2} alt="" className="landing-balls2" />
                <img src={ball3} alt="" className="landing-balls3" />
                <img src={firsthalf} alt="" className='first-half' />
            </section>
        </>

    )
}

export default Landing