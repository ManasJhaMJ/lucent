import './testimonials.css'

function Reviews({ title, desc, name, desg, stars }) {
    return (
        <div className="reviews">
            <h2>
                {title}
            </h2>
            <p>
                {desc}
            </p>
            <div className='review-lower'>
                <div>
                    <img src="https://i.pinimg.com/236x/44/b9/65/44b965ef15668cf3ec5d7888be48ec3a.jpg" alt="profile photo" />
                    <h6>
                        {name} <br />
                        <span>{desg}</span>
                    </h6>
                </div>
                <h5>{stars}</h5>
            </div>
        </div>
    )
}

export default Reviews