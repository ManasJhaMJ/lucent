import './Home.css'
import Landing from './Landing'
import About from './About'
import Clients from './Clients'
import Services from './Services'
import Testimonials from './Testimonials'


function Home() {
    return (
        <>
            <Landing />
            <About />
            <Services />
            <Clients />
            <Testimonials />
        </>
    )
}

export default Home