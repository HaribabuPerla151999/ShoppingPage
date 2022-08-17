import React from 'react'

export default function NetflixRegister() {
  return (
    <>
    <div className='d-flex flex-row justify-content-center align-items-center text-center'>
      <div className='d-flex flex-column'>
      <div>
        <p className='text-white'>Ready to watch? Enter your email to create or restart your membership</p>
      </div>
        <div>
          <div className='input-group input-group-lg'>
            <input type="email" className='form-control' placeholder='Enter Email'>
            </input>
            <button className='btn btn-danger'>
                Get Started
                <span className='bi bi-chevron-right'></span>
            </button>
        </div>
        </div>
        </div>
       
    </div>
      
    </>
  )
}


