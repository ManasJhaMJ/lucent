import { useState } from 'react';
import './Contact.css'
import globe from '../../assets/globe.svg'
import whatsapp from '../../assets/socials/whatsapp.png'
import instagram from '../../assets/socials/instagram.png'
import discord from '../../assets/socials/discord.png'
import mail from '../../assets/socials/gmail.png'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const collectData = async (e) => {
        e.preventDefault();

        let response = await fetch('http://localhost:8000/contact', { // Update the port to 8000
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            response = await response.json();
            localStorage.setItem('user', JSON.stringify(response));
            console.log('Data saved');
        } else {
            console.error('Error saving data');
        }
    };

    return (
        <section id='contact'>
            <div className='socials'>
                <h1>Get Instant Replies!</h1>
                <p>Contact us on below socials for instant replies.</p>
                <div className='social'>
                    <a href='https://www.whatsapp.com' target='_blank' rel='noreferrer'>
                        <button><img src={whatsapp} alt=" contact us" />
                            <p>Whatsapp</p>
                        </button>
                    </a>
                    <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
                        <button><img src={instagram} alt=" contact us" />
                            <p>Instagram</p>
                        </button>
                    </a>
                    <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                        <button><img src={discord} alt=" contact us" />
                            <p>Discord</p>
                        </button>
                    </a>
                    <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
                        <button><img src={mail} alt=" contact us" />
                            <p>Gmail</p>
                        </button>
                    </a>
                </div>
            </div>
            <div className='form'>
                <h1>Fill the form below!</h1>
                <form onSubmit={collectData}>
                    <input type='text' name="name" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type='email' name="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="message" rows={10} placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
