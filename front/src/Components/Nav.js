import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
function Nav() {
   
    

    const [input, setinput] = useState('');
    const [bool, setbool] = useState(localStorage.getItem("loggedIn"));
    useEffect(() => {
        console.log("d");
    }, [bool]
    );
   function func () {
       localStorage.setItem("loggedIn", false);
       localStorage.setItem("user", null);
       setbool(false);
    }
    return (
        <div className="Container">
            <header className="NavHeader">
              
            <nav>
                <ul className="Navul">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/PrList' state={{ desc: ` ` }}>Menu</Link></li>
                        {!bool && <li><Link to='/signup'>SignUp</Link></li>}
                        {bool && <li><button type='button' className='LB' onClick={func} >LOGOUT</button></li>}
                        
                </ul>
                </nav><div className="Search">
                   
                    <li><Link to='/PrList' state={{ desc:  `${input}` }}>Search</Link></li>
                    <input className="navsearch" type="text" value={input} onChange={e => setinput(e.target.value)} />
                   
                </div>
            </header>
        </div>
    );
}
export default Nav;
