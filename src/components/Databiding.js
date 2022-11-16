import React, { useEffect, useState } from 'react'
import "./Databinding.css";

function Databiding() {
    const[details,setDetails]=useState([]);
    const[getId,setId]=useState();
    const[getLink,setLink]=useState(false)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>setDetails(data))

    },[])

    function HandleLink(e){
          console.log(e)
         setId(e.email);

         !getLink?setLink(true):setLink(false)
    }
  return (
    <div>
       <div className='container'>
         <h2 className='heading'>Emp Details</h2>
       </div>
       <div className='container'>
         <div className='row'>
            {
                details.map((emp)=>
                   <div className='col-md-4 mt-3' key={emp.id}>
                       <div className='card text-center bg-dark text-white p-3'>
                          <h4> Name:{emp.name}</h4>
                          <h4>Address:{emp.address.street}</h4>
                          <h4 className='link' onClick={()=>HandleLink(emp)}>Mail Me</h4>
                           <h4 className={getLink?"linkActive":"linkDisable"}>{getId}</h4>
                          
                        </div>
                    </div>
                )
            }
         </div>
            
       </div>
    </div>
  )
}

export default Databiding
