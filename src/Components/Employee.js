import React,{useState,useEffect,} from 'react'

    const Employee = () => {
        const [count,setCount]=useState(0)
        useEffect(()=>{
            console.warn(useEffect)
        })
        return (
            <div className='Employee'>
           <button onClick={()=>setCount(count+1)}> Add</button>

           <h2>{count}</h2>

           <button onClick={()=>setCount(count-1)}>Delete</button>

            </div>
        )
    }
    
    export default Employee
    
        


    
    


