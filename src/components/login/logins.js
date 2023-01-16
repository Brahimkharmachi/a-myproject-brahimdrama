import React, {useContext, useState} from "react"
import { AuthContext } from "../../AuthContext";
import "./loginss.css"

export default function Login () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const authContext = useContext(AuthContext);

    function login(e){
        e.preventDefault();

        if(password === '123'){
            const token = 'abc';
            localStorage.setItem('token',token);
            localStorage.setItem('email',email);
            authContext.setAuth({token,email});
        } else {
            alert ('wrong detail');
        }

    }


    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={email} placeholder="email" onChange={e => setEmail (e.target.value)}></input>
            <input type="password" name="password" value={password}  placeholder="Enter your Password" onChange={e => setPassword (e.target.value)} ></input>
            <div className="button" onClick={login}>Login</div>
        </div>
    )
}

