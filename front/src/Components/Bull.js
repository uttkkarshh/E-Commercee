import CItem from './CartItem.js';
import { useState,useEffect } from 'react';

function Bull({ data, func ,func2}) {
    const [input1, setinput1] = useState('');
    const [input2, setinput2] = useState('');
    const [number, setnumber] = useState();
    function func1() {
        fetch("http://localhost:4000/user/order", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
               
                "Access-Control-Allow-Origin": "*",
            }, credentials: "include",
            body: JSON.stringify({
                data
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.url) {
                   window.location=data.url;
                }
                else if(data.mss) {
                    console.log(data.mss);
                    alert(`${data.mss}`);
                }
                
            });
        
        func2([]);
    }
    return (<div className="Car">

        {data && data.map((pro) => (<CItem product={pro} func={func} />)) }
    
      
            <br /><br /><br />
           
        <button class="button-64" type='button' onClick={func1} ><span>Order</span></button>
       
      

                 
                
                 
                 
                   
    </div>);
}

export default Bull;
