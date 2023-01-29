import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="add_to_cart">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                </div>
            <h1>Home Components</h1>
            <div className='cart_wrapper'>
                <div className='img_wrapper item'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGYxgssx1mb07tByhI7TVKFWxI9j4qJJseB0Ow8hgE71k7_0onmi4-QdXQMBwxPtTzv4&usqp=CAU' style={{ width: '100px' }} />
                </div>
                <div className='text_wrapper item'>
                    <span>I-phone </span>
                    <span> price $1000.00</span>
                </div>
                <div className='text_wrapper item'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;