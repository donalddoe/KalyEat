import React, {useState} from 'react';
import './NavBar.css';
// import wave from './assets/'

function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
           <div className="Vector">
           {/* <img src="Vector1.png"></img> */}
           <nav>
              <div className="logo">
                 KalyEat
              </div>
              <ul className="nav-links" style={{transform: open ?"translateX(0px)" : ""}}>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Menu</a></li>
                  <li><a href="#">Login</a></li>
                  <button className="btn">Signup
                  </button>
                  <li><a href="#"><i className="fas fa-shopping-cart carts"></i></a></li>
              </ul>
              <i onClick={() => setOpen(!open)} className="fas fa-bars bans"></i>
           </nav> 
           <div className="shape">
            </div>
           </div>
         
          
          
            
           </>
        
    )
}

export default NavBar