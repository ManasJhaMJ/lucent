import Reviews from './Reviews';

import '@splidejs/splide/css';
import './testimonials.css'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function Testimonials() {
    return (
        <section id='testimonials'>
            <h1>Client <span className='gradient-text'>Testimonials</span></h1>
            <Splide options={{
                type: 'loop',
                gap: '20px',
                drag: 'free',
                arrows: true,
                pagination: true,
                autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: true,
                    rewind: false,
                    speed: 1,
                }
            }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <Reviews
                        title='Simply the best!'
                        desc='Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.'
                        name='Manas Jha'
                        desg='CEO, Company'
                        stars='⭐ ⭐ ⭐ ⭐ ⭐'
                    />
                </SplideSlide>
                <SplideSlide>
                    <Reviews
                        title='Would work again!'
                        desc='Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.'
                        name='Manas Jha'
                        desg='CEO, Company'
                        stars='⭐ ⭐ ⭐ ⭐ ⭐'
                    />
                </SplideSlide>
                <SplideSlide>
                    <Reviews
                        title='Great work!'
                        desc='Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.'
                        name='Manas Jha'
                        desg='CEO, Company'
                        stars='⭐ ⭐ ⭐ ⭐ ⭐'
                    />
                </SplideSlide>
                <SplideSlide>
                    <Reviews
                        title='Always reliable!'
                        desc='Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.'
                        name='Manas Jha'
                        desg='CEO, Company'
                        stars='⭐ ⭐ ⭐ ⭐ ⭐'
                    />
                </SplideSlide>
                <SplideSlide>
                    <Reviews
                        title='Recommend!'
                        desc='Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.'
                        name='Manas Jha'
                        desg='CEO, Company'
                        stars='⭐ ⭐ ⭐ ⭐ ⭐'
                    />
                </SplideSlide>
                <SplideSlide>
                    <Reviews
                        title='would hire again!'
                        desc='Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.'
                        name='Manas Jha'
                        desg='CEO, Company'
                        stars='⭐ ⭐ ⭐ ⭐ ⭐'
                    />
                </SplideSlide>

            </Splide>
        </section>
    )
}

export default Testimonials