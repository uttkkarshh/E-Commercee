// JavaScript source code
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

import OpenAI from 'openai';

import NavBar from './Components/NavBar'
function Search() {
    const [input, setinput] = useState('');
    const pro = ["coffee",];
    
    
    
    const openai = new OpenAI({
        apiKey: "use-your api Keys" ,
        dangerouslyAllowBrowser: true
    });
    async function  bot() {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": `from this products list  {coffee, fastfood,tshirt,icecream,warmclothes} which one fullfill my need, my need is  ${input}   strictly answer in one word` }],
        });
        console.log(chatCompletion.choices[0].message.content);
        prod(chatCompletion.choices[0].message.content);
    }
    async function level1() {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                "role": "user", "content": `out of these categories {Electronics,HomeandKitchen
,Fashion,Beauty,Toys and Games,Sports and Outdoor Equipment,Books and Literature,Home and Living Essentials
Health and Wellness Products
,Food} product that fullfil this need ${input} fits best in which of these categories strictly answer in one word` }],
        });
        console.log(chatCompletion.choices[0].message.content);
        prod(chatCompletion.choices[0].message.content);
    }
    const navigate = useNavigate();
    function prod(pro) {
     
        navigate("/PrList", { state: { desc: `${pro}` } })
    }

    return (
        <div>
        <NavBar/>
            <div className="Bot">
                 <div className="InnerBot" >
                  
                <br/>
                    <textarea rows="20" cols="25" className="BotInput" type="text" value={input} onChange={e => setinput(e.target.value)} />
                    <img src={`chat.jpg`} height="100%" width="400px;" />
                <br/>
                    <button class="AddCartB" onClick={bot}  > <span class="text" > Get Products</span ></button>
                   
                </div>
                </div>
        </div>

    );
}
export default Search;
