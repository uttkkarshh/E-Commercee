// JavaScript source code


function Item({product,func1,func2}) {
    return (

        <div className="Item">
            {(product.desc.includes("coffe") || product.desc.includes("COFFE")) && <img src={`coffe.jpg`} height="250px" width="100%" />}
            {(product.desc.includes("fastfood") || product.desc.includes("FASTFOOD")) && <img src={`FastfoodP.jpg`} height="250px" width="100%" />}
            {(product.desc.includes("shakes") || product.desc.includes("SHAKES")) && <img src={`Shakes.jpg`} height="250px" width="100%" />}
            {(product.desc.includes("icecream") || product.desc.includes("ICECREAM")) && <img src={`Icecream.jpg`} height="250px" width="100%" />}
            {product.url && product.url != null && <img src={product.url} height="250px" width="100%" />}
           
            <div className="ItemDetails">
                <h1>{product.name}</h1>
                <h1>PRICE :{product.price} </h1>
                <h4>Description:{product.desc}</h4>
                <div className='Vbutton'>
                    <button type='button' className='Vb' className="AddCartB"  onClick={() => {
                        func1(true);
                        func2(product);
                    }} ><span>view</span></button>
                </div>
            </div></div>
        );
}
export default Item;