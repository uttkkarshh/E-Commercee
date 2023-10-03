// JavaScript source code
import{ Outlet, Link } from "react-router-dom";
function Success() {
    return (
        <div className="About">
            <div className="LooginS">
                <h1>PAYMENT SUCCESSFULL!!!</h1>
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

        </div>

    );
}
export default Success;