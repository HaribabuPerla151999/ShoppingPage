import React from 'react';
import "./NetfliixHeader.css";


export default function NetflixHeader() {
  return (
    <>
    <div className='d-flex justify-content-between m-3 p-3'>
        <div>
            <h1 className='text-danger'>NETFLIX</h1>
        </div>
        <div className='input-group w-25'>
        <select className="form-select">
                     <option>Language</option>
                     <option>English</option>
                     <option>Hindi</option>
        </select>
        <button className="btn btn-danger ms-2">Signin</button>

        </div>
    </div>
    
    </>
  )
}
