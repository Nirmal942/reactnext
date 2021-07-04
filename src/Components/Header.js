import React, { useState } from 'react';



const Header = () => {
    const [value, setValue] = useState(0

    );

    const reset = () => {
        setValue(0);
    };



    const [name, setName] = useState('nirmal')
    const [age, setAge] = useState('46')
    const [rollNum, setrollNum] = useState('76')



    return (
        <div className='Header'>
            <h1 >{value}</h1>
            <h2>Display value</h2>

            <button onClick={() => setValue(value + 1)}>increment </button>
            <button onClick={() => setValue(value - 1)}>decrement </button>
            <button onClick={reset}>reset </button>







            <p><span>Don't Waite !</span></p>
            <button >Order Now</button>

        </div>
    )
}

export default Header
