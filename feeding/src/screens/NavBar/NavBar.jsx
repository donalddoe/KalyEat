import React, {useState} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'



function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
           <div className="Vector">
           <nav>
            <div className="text-left">
                <h3 className='green-text mb-2 mt-4 font-weight-bold'>
                  <strong>KALY</strong>
                  <a href='#!' className='orange-text font-weight-bold'>
                    <strong>EAT</strong>
                  </a>
                </h3>
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
