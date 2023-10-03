// JavaScript source code
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    const [input, setinput] = useState('');
    const [bool, setbool] = useState(localStorage.getItem("loggedIn"));
    useEffect(() => {
       
    }, [bool]
    );
    function func() {
        localStorage.setItem("loggedIn", false);
        localStorage.setItem("user", null);
        setbool(false);
    }
    return (
        <div className="NewNav">
            <header className="header">
                <h1 className="logo">FLAVOURFASHION</h1>
                <ul className="main-nav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/PrList' state={{ desc: ` ` }}>Menu</Link></li>
                    <Link to='/Bot' >Bot</Link >
                    {!bool && <li><Link to='/signup'>SignUp</Link></li>}
                    {bool && <li><button type='button' className='LB' onClick={func} >LOGOUT</button></li>}
                    <li><Link to='/PrList' state={{ desc: `${input}` }}>Search</Link></li>
                    <li><input className="navsearch" type="text" value={input} onChange={e => setinput(e.target.value)} /></li>
                </ul>
            </header> 
        </div>

    );
}

export default NavBar;