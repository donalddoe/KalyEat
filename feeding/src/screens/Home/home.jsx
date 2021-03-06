import React from 'react';
import NavBar from '../NavBar/NavBar';
import './home.css'
import './menuapp'
import Menuapp from './menuapp';
import Footer from '../Footer/footer'

const home = () => {
    return (
        <div>
           <NavBar /> 
           <div style={{marginTop: "150px", marginLeft: "100px"}}>
            <h1 className='green-text mb-5 mt-4 font-weight-bold'>
            <strong>The Healthy Food For</strong> <br></br>
            <a href='#!' className='orange-text font-weight-bold'>
                    <strong>Strong Kids</strong>
                  </a>
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt<br></br>
            euismod nisi porta. Risus sed vulputate odio ut enim blandit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
            sed do eiusmod tempor incididunt<br></br>
            euismod nisi porta. Risus sed vulputate odio ut enim blandit.   
            </p>
            <a href="#" className="theme-btn">order now</a>
           </div>
           <div style={{marginTop: "150px"}}>
               <h3>our menu</h3>
               <h4>amazing foods wait for you</h4>
           </div>
          <Menuapp />
        <Footer/>
        </div>
    )
}

export default home
