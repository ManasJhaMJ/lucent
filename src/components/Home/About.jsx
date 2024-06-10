import './About.css'
import aboutimg from '../../assets/about.png'
import upperhalf from '../../assets/firsthalf.png'
import lowerhalf from '../../assets/secondhalf.png'

function About() {
    return (
        <section id="about">
            <img src={lowerhalf} className='upper-half' alt="half" />
            <img src={upperhalf} className='lower-half' alt="half" />
            <div className="about-text">
                <h1>
                    A <span className='gradient-text'>Creative</span> Studios that loves to help businesses grow.
                </h1>
                <h4>
                    We are a team of creatives who are excited about unique ideas and help businesses to create amazing identity by providing top-notch services.
                </h4>
                <p>
                    &#34; A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem. &#34;
                </p>
            </div>
            <div className="about-img">
                <img src={aboutimg} alt="about img" />
            </div>
        </section>
    )
}

export default About