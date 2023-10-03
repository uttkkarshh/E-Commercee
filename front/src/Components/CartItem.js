// JavaScript source code
function CItem({ product ,func}){
    return (
        <div>
            {(product.desc.includes("coffe") || product.desc.includes("COFFE")) && <img src={`coffe.jpg`} height="200px" />}
            {(product.desc.includes("fastfood") || product.desc.includes("FASTFOOD")) && <img src={`FastfoodP.jpg`} height="200px" />}
            {(product.desc.includes("shakes") || product.desc.includes("SHAKES")) && <img src={`Shakes.jpg`} height="200px" />}
            {(product.desc.includes("icecream") || product.desc.includes("ICECREAM")) && <img src={`Icecream.jpg`} height="200px" />}
            {product.url && product.url != null && <img src={product.url} height="250px" width="100%" />}
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <div className="ViewButtons">
                <button class="button-64" type='button' onClick={() => func(product)} ><span>Remove from Cart</span></button>
              
            </div>
     </div>);
}
export default CItem;