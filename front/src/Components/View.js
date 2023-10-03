import { Outlet, Link } from "react-router-dom";
function View({ product, func,func2 }) {
    return (
        <>
            <div className='View' >
                {(product.desc.includes("coffe") || product.desc.includes("COFFE")) && <img src={`coffe.jpg`} height="150px" />}
                {(product.desc.includes("fastfood") || product.desc.includes("FASTFOOD")) && <img src={`FastfoodP.jpg`} height="150px" />}
                {(product.desc.includes("shakes") || product.desc.includes("SHAKES")) && <img src={`Shakes.jpg`} height="150px" />}
                {(product.desc.includes("icecream") || product.desc.includes("ICECREAM")) && <img src={`Icecream.jpg`} height="150px" />}
                {product.url && product.url != null && <img src={product.url} height="140px" width="150px" />}
                <div>
                <h1>{product.name} </h1>
                <span className='desc'  >{product.desc} </span>
                <span className='price'>PRICE:{product.price} </span>
            </div>
            <div className="ViewButtons">
                    <button className="AddCartB" type='button'  onClick={() => func2(product)} ><span>AddtoCart</span></button>
                    <button className="AddCartB" type='button' onClick={()=>func(false) } ><span>Back</span></button>
                </div>
                </div>
        </>);
}
export default View;