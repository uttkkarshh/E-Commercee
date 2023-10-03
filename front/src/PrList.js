// JavaScript source code
import { useState, useEffect } from 'react';
import Item from './Components/Item'
import NavBar from './Components/NavBar'
import  Bull from './Components/Bull'
import Footer from './Components/footer'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import View from './Components/View';

function PrList() {
    const [data, setData] = useState([]);
    const [isPending, setPending] = useState(true);
    const [err, setError] = useState(null);
    const [isCart, setisCart] = useState(false);
    const [Cart, setCart] = useState([]);
    const location = useLocation();
    const fil = location.state;
  
    const [bool, setbool] = useState(false);
    const [product, setProduct] = useState([]);
    useEffect(() => {

        fetch('http://localhost:4000/user/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                
                "Access-Control-Allow-Origin": "*",
            }, credentials: "include",
            body: JSON.stringify(fil)
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setPending(false);
            })
            .catch(err => {
                setPending(false);
                setError(err.message);
                
            })

    }, [location]);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product]);
    function func2(product) {
        
        const a = Cart.filter((pro) => { return pro.name !== product.name });
        a.push(product);
            alert("Item added to Cart");
            setCart(a);
        
        
    }
    function func1() {
        console.log("daf");
        alert("Ite");
     
    }
    function func3(product) {
       
        const a = Cart.filter((pro) => { return pro.name !== product.name });
        setCart(a);
    }
    

    return (
       
    
        < div className="PrList">
            <NavBar />
            <br />
            <div className="CartB">
                {!isCart && <button className="CartButton" type='button' onClick={() => {
                    setisCart(true);
                    setbool(false);
                }} > OPENCART   </button>}
                </div>
            <div>
                
                {isPending && <>Fetching</>}
                {err && <>{err}</>}
                {bool && <div className='ViewCon'> <View product={product} func={setbool} func2={func2}/></div>}
            </div>

            <div className="PrContainer">
                <div className="PCart" >
                    {isCart && <button className="CartButton2" type='button' onClick={() => setisCart(false)} >  Close  </button>}

                    {isCart && Cart && <Bull data={Cart} func={func3} func2={ setCart} />}
                    {isCart  && !Cart.length && <h1>Cart EMPTY </h1>}
                </div>
                
                <div className="Product">
                    {data && !isCart && data.map((pro) => (<Item key={pro.id} product={pro} func1={setbool} func2={setProduct} />))}
                
                {
                        data && !isCart && !data.length && <div><h1>NO PRODUCT FOUND </h1></div>
                }
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
        
        );

}
export default PrList;