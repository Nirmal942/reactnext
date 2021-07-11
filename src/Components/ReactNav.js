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
            <div className='containarbig' style={{ width: '90rem' }}>
                <img className='/images/logoss.png' src='/images/logoss.png' alt='/images/logoss.png' width='450px' />
                <div className="card-body">
                    <h5 className="card-title"> Try Our delicious Pizza </h5>

                    <h1>About us</h1>
                    <h2>Order krna safe hai </h2>
                    <p>There’s nothing cookie-cutter about Pizza Hut.
                        Not our pizzas. Not our people. And definitely not the way we live life.
                        Around here, we don’t settle for anything less than food we’re proud to serve.
                        And we don’t just clock in. Not when we can also become our best, make friends,
                        and have fun while we’re at it. We’re the pizza company that lives life unboxed.

                        We’re not for people who want to blend in: pushing boundaries is part of our heritage.
                        We have more than 16,000 restaurants and 350,000 team members in more than 100 countries.
                        Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop
                        driving ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.
                    </p>
                </div>
            </div>



        </>
    )
}


function Services() {
    return (
        <>

            <div className='containarbig' style={{ width: '90rem' }}>
                <img className='/images/logs.png' src='/images/logs.png' alt='/images/logs.png' width='450px' />
                <div className="card-body">
                    <h5 className="card-title"> Try Our delicious Pizza </h5>

                    <p>There’s nothing cookie-cutter about Pizza Hut.
                        Not our pizzas. Not our people. And definitely not the way we live life.
                        Around here, we don’t settle for anything less than food we’re proud to serve.
                        And we don’t just clock in. Not when we can also become our best, make friends,
                        and have fun while we’re at it. We’re the pizza company that lives life unboxed.

                        We’re not for people who want to blend in: pushing boundaries is part of our heritage.
                        We have more than 16,000 restaurants and 350,000 team members in more than 100 countries.
                        Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop
                        driving ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.
                    </p>
                    <h1>Services</h1>
                    <p>

                        A service is a transaction in which no physical
                        goods are transferred from the seller to the buyer.
                        The benefits of such a service are held to be demonstrated by
                        the buyer's willingness to make the exchange. Public services are
                        those that society as a whole pays for. Wikipedia

                    </p>
                </div>
            </div>


        </>
    )
}

function Contactus() {
    return (
        <>
            <div className='containarbig' style={{ width: '18rem' }}>
                <img className='/images/log.png' src='/images/log.png' alt='/images/log.png' />
                <div className="card-body">
                    <h5 className="card-title"> Try Our delicious Pizza </h5>

                    <p>There’s nothing cookie-cutter about Pizza Hut.
                        Not our pizzas. Not our people. And definitely not the way we live life.
                        Around here, we don’t settle for anything less than food we’re proud to serve.
                        And we don’t just clock in. Not when we can also become our best, make friends,
                        and have fun while we’re at it. We’re the pizza company that lives life unboxed.

                        We’re not for people who want to blend in: pushing boundaries is part of our heritage.
                        We have more than 16,000 restaurants and 350,000 team members in more than 100 countries.
                        Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop
                        driving ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.
                    </p>

                </div>
            </div>

            <div className='containarbig' style={{ width: '18rem' }}>
                <img className='/images/log.png' src='/images/log.png' alt='/images/log.png' />
                <div className="card-body">
                    <h5 className="card-title"> Try Our delicious Pizza </h5>

                    <p>There’s nothing cookie-cutter about Pizza Hut.
                        Not our pizzas. Not our people. And definitely not the way we live life.
                        Around here, we don’t settle for anything less than food we’re proud to serve.
                        And we don’t just clock in. Not when we can also become our best, make friends,
                        and have fun while we’re at it. We’re the pizza company that lives life unboxed.

                        We’re not for people who want to blend in: pushing boundaries is part of our heritage.
                        We have more than 16,000 restaurants and 350,000 team members in more than 100 countries.
                        Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop
                        driving ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.
                    </p>

                </div>
            </div>



        </>
    )
}


function Products() {

    const [totalCount, setTotalCount] = useState(0)

    console.log("count", totalCount);


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
                <Product data={item} setTotalCount={setTotalCount} totalCount={totalCount} />
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


            <h2>Total Pizza order : {totalCount}</h2>


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


