// JavaScript source code

import {useState } from'react'
export default function Signup(){
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
       
            e.preventDefault();

            console.log(fname, lname, email, password);
            fetch("http://localhost:4000/user/sign-up", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    
                },
                body: JSON.stringify({
                    fname,
                    email,
                    lname,
                    password,
                   
                }),
            }).then(res => {
                if (!res.ok) {
                    throw Error('could not fetch');
                }
                return res;
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, "userRegister");
                    
                });
        }
    
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                                placeholder="First name"
                                onChange={(e) => setFname(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLname(e.target.value)} />
                </div>
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
                    <button type="submit" className="btn btn-primary"  >
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>
                    </form>
                </div>
            </div>
        )
    }
