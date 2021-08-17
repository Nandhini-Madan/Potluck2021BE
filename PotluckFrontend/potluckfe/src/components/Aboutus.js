import React from 'react'
import nandhini from './img/Nandhini .jpg'
import kase from './img/kase.png'
import './about.css';
const Aboutus = () => {
    return (
        <>
        <h1>Who we are</h1>
        <div className="container aboutus">
        
          <div className="card">
            <img src={kase} alt="person"/>
            <div className="text">
                <h4>Kasech Isaac</h4>
        <p>Frontend Developer</p></div>
        </div>


                <div className="card">
                
<img src={nandhini} alt="person"/>
                <div className="text">
                <h4>Nandhini Devi Madan</h4>
                <p>Backend Developer</p>                
                </div>

                </div>
            </div>
</>
    
          
       
    )
}

export default Aboutus