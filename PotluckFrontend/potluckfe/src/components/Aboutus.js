import React from 'react'
import about from './about.css'
import nandhini from './img/Nandhini .jpg'
import kase from './img/kase.png'
const Aboutus = () => {
    return (
        <>
        <h1>Who we are</h1>
        <div className="aboutus">
        
          <div className="card">
            <img src={kase} alt="person"/>
<div className="text">
                <h4>kasech isaac</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia voluptatibus ut labore neque cumque, inventore velit illo repudiandae repellat impedit.</p>                
                </div>

                </div>


                <div className="card">
                
<img src={nandhini} alt="person"/>
                <div className="text">
                <h4>Nandhini Devi Madan</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti distinctio harum corporis omnis eveniet earum quasi asperiores magni aut?</p>                
                </div>

                </div>
            </div>
</>
    
          
       
    )
}

export default Aboutus