import React from 'react';
import NetflixHeader from './NetflixHeader';
import "./NetfliixHeader.css";
import NetflixMain from "./NetflixMain";
import NetflixRegister from './NetflixRegister';
import Netflixfooter from './Netflixfooter';

export default function NetflixIndex() {
  return (
    <div>
        <div className='container-fluid bg-container'>
            <div className='bg-wrapper'>
                <header>
                    <NetflixHeader/>
                </header>
                <section>
                  <main>
                     <NetflixMain/>
                     <NetflixRegister/>
                  </main>
                </section>
               
            </div>

       </div>
       <footer>
            <Netflixfooter/>
        </footer>
        
      
    </div>
  )
}
