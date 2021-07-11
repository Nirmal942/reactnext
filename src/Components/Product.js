import React, { useState, useEffect } from 'react'

const Product = ({ data, setTotalCount, totalCount }) => {


    const [count, setCount] = useState(0);
    console.log("Data===>", data);



    return (

        <div className='product-outer'>
            <img src={data.imgUrl} alt="C:\Users\HP\Desktop\reactnext\reactnext\public\images\logo.png"></img>
            <h2>{data.productName}</h2>
            <h3>rupee {data.price}/-</h3>
            <button onClick={() => { setCount(count + 1); setTotalCount(totalCount + 1) }}>Add</button>
            <h2>{count}</h2>
            <button onClick={() => { setCount(count - 1); setTotalCount(totalCount - 1) }}>Delete</button>
        </div>

    )
}

export default Product


