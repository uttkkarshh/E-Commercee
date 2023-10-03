// JavaScript source code

import { useState } from 'react'
export default function Login() { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        
           
        
        console.log(email, password);
        fetch("http://localhost:4000/user/Login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
              
                "Access-Control-Allow-Origin": "*",
            }, credentials: "include",
           
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                
                if (data.mss == "LoginSucces") {
                    console.log(data, "userRegister");
                    alert("login successful");
                    window.localStorage.setItem("loggedIn", true);
                    window.localStorage.setItem("user", data.name);
                    window.location.href = "./About";
                }
                if (data.mss == "Incorrect") {
                    console.log( "Incorrect Email");
                    alert("No Registered User by this Email");
                    
                }
                if (data.mss == "PIncorrect") {
                    console.log("Incorrect Password");
                    alert("Incorrect Password");

                }
            });
    }
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
              
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
               
                    </form>
                </div></div>
        )
    }
