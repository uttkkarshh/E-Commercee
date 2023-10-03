// JavaScript source code
import Body from './Components/Body'
import Bull from './Components/Bull'
import Menu from './Components/Menu'
import Footer from './Components/footer'
import { Outlet, Link } from "react-router-dom";
function Home() {
    return (
        <div className="Home">
            
            <Body />   
            <Link to='/PrList' state={{ desc: `tshirt` }}><Menu name="Tshirt"></Menu></Link >
            <Link to='/PrList' state={{ desc: `jeans` }}><Menu name="Jeans"></Menu></Link>
            <Link to='/PrList' state={{ desc: `jacket` }}> <Menu name="Jacket"></Menu></Link>
            <div className="IceCream">
                <Link className="IcecreamL" to='/PrList'  state={{ desc: `Winter` }}>Winter</Link>
            </div>
           
            <div className="Cafe">
                <h1 className="CafeHe">
                    
                    shopping is cheaper than a psychiatrist
                </h1>
            </div>
      
            <Footer />
        </div>
      
    );
}

export default Home;

