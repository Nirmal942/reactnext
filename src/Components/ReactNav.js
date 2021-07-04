import React, { useState, useEffect } from 'react'


import { Link, } from 'react-router-dom';
import { ListGroupItem, ListGroup } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PhonelinkTwoTone, WhatshotOutlined } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';
import { findByLabelText } from '@testing-library/react';
import Product from './Product';


const ReactNav = () => {


    return (

        <div>
            <Router >
                <div>
                    <ul >
                        <li style={{ padding: 5, backgroundColor: '', borderRadius: 8 }}><Link to="/">Home</Link></li>
                        <li style={{ padding: 5, backgroundColor: '', borderRadius: 8, Color: 'pink' }}><Link to="/About">About</Link></li>
                        <li style={{ padding: 5, backgroundColor: '', borderRadius: 8, Color: 'pink' }}><Link to="/Services">Services</Link></li>
                        <li style={{ padding: 5, backgroundColor: '', borderRadius: 8, Color: 'pink' }}><Link to="/Contactus">Contactus</Link></li>
                        <li style={{ padding: 5, backgroundColor: '', borderRadius: 8, Color: 'pink', textAlign: 'center' }}><Link to="/Products">Products</Link></li>


                    </ul>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/About" component={About}></Route>
                    <Route exact path="/Services" component={Services}></Route>
                    <Route exact path="/Contactus" component={Contactus}></Route>
                    <Route exact path="/Products" component={Products}></Route>


                    <img style={{ height: '45px', position: 'absolute', alignItems: 'end' }} src="/images/cart.png" alt="C:\Users\HP\Desktop\reactnext\reactnext\public\images\cart.png"></img>


                </div>            </Router>
        </div>
    )
}


function Home() {
    return (
        <>
            <div className='containar'>
                <h1>About us</h1>
                <p>Make your own homemade cake mix, then make a white cake
                    from that mix. It's easy to make your own mix, less expensive
                    ,and good for you—and you control the ingredients!
                </p>
            </div>
        </>
    )
}

function About() {
    return (
        <>
            <div className='containar'>
                <h1>About us</h1>
                <h2>Order krna safe hai </h2>
                <p>10 Tips for Writing Your “About Us” Page
                    Use facts, not hype.
                    Seek to inspire trust.
                    Tell visitors what they want to know.
                    Specifics are better than bold claims.
                    Give a peek behind the curtains.
                    Forge a connection.
                    Express your values.
                    List credentials, certifications, awards.
                </p>
            </div>
        </>
    )
}


function Services() {
    return (
        <>
            <div className='containar'>
                <h1>Services</h1>
                <p>

                    A service is a transaction in which no physical
                    goods are transferred from the seller to the buyer.
                    The benefits of such a service are held to be demonstrated by
                    the buyer's willingness to make the exchange. Public services are
                    those that society as a whole pays for. Wikipedia

                </p>
            </div>
        </>
    )
}

function Contactus() {
    return (
        <>
            <div className='containar'>
                <h1>Contact us</h1>
                <p>Apple Inc. is an American multinational technology
                    company headquartered in Cupertino, California, that designs,
                    develops, and sells consumer electronics, computer software,
                    and online services. Wikipedia
                </p>
            </div>
        </>
    )
}


function Products() {

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.warn(useEffect)
    })

    const productsList = [
        {
            id: 0,
            productName: 'Italian Pizza',
            imgUrl: '/images/log.png',
            price: 499,
        },

        {
            id: 1,
            productName: 'Havana Pizza',
            imgUrl: '/images/logo.png',
            price: 450,
        },

        {
            id: 2,
            productName: 'Italian Mushroom  Pizza',
            imgUrl: '/images/logo.png',
            price: 500,
        },

        {
            id: 3,
            productName: 'Margaritta  Pizza',
            imgUrl: '/images/logos.png',
            price: 499,
        },

        {
            id: 4,
            productName: 'Mix veg Pizza',
            imgUrl: '/images/logoss.png',
            price: 550,
        },

        {
            id: 5,
            productName: 'Chicken delight Pizza',
            imgUrl: '/images/logos.png',
            price: 600,
        },

        {
            id: 6,
            productName: 'Italian Mix Pizza',
            imgUrl: '/images/logs.png',
            price: 689,
        },

        {
            id: 7,
            productName: 'tandoori Pizza',
            imgUrl: '/images/logo.png',
            price: 399,
        },

        {
            id: 8,
            productName: 'jhingalala Pizza',
            imgUrl: '/images/logoss.png',
            price: 980,
        },

        {
            id: 9,
            productName: 'onion mix Pizza',
            imgUrl: '/images/logos.png',
            price: 600,
        },


    ]

    const productLayout = productsList.map((item, index) => {
        return (
            <div className='containar' key={'index' + index}>
                <Product data={item} />
            </div>
        )
    })
    return (
        <>
            <h1>Products of pizza</h1>
            <h1>we provide one greatest service across all small areas around the states. </h1>
            <p>you can check all our pizzas </p>

            <header>Pizza Products</header>

            {productLayout}



            {/* <div className='containar'>
                <img src="/images/log.png" alt="C:\Users\HP\Desktop\reactnext\reactnext\public\images\logo.png"></img>
                <h2>havana special</h2>
                <h3>rupee 499/-</h3>
                <button onClick={() => setCount(count + 1)}>Add</button>
                <h2>{count}</h2>
                <button onClick={() => setCount(count - 1)}>Delete</button>
            </div> */}


        </>
    )
}


export default ReactNav


