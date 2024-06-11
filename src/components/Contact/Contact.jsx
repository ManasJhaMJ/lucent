import './Contact.css'

function Contact() {
    return (
        <section id='contact'>
            <h1>FIll the below Form!</h1>
            <form action='mailto:work4manasjha@gmail.com' method="post" encType="text/plain">
                <input type='text' placeholder='Enter your name' />
                <input type='email' placeholder='Enter your email' />
                <textarea placeholder='Enter your message'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact