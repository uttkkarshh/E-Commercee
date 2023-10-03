// JavaScript source code
import Nav from './Components/Nav.js'
import Footer from './Components/footer'
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
function About() {
    return (
        <div className="About">
            <div className="LooginS">
            <h1>LOGIN SUCCESSFULLY!!!</h1>
            </div>
            <div className="Container">
            <header className="NavHeader">

                <nav>
                    <ul className="Navul">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/PrList' state={{ desc: ` ` }}>Menu</Link>
                        </li>
                        </ul>
                        </nav>
            </header>
        </div>
          <div className="LoginS"></div>
        
    </div>);
}
export default About;