import { useState } from 'react';
import './Contact.css'

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
            <h1>Fill the form below!</h1>
            <form onSubmit={collectData}>
                <input type='text' name="name" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='email' name="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea name="message" placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;
