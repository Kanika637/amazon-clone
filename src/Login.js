import React,{useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";
function Login() {
    const history=useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const register=e=>{
        e.preventDefault();
        //doing firebase stuff
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            {/*if we get the authentication right then
            we will redirect to the homepage*/}
            
            if(auth){
            history.push("/")}
        })
        .catch(error=>alert(error.message))
    }

    const signIn=e=>{
        //for preventing the page to refresh
        e.preventDefault();
        //Some firebase login 
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push("/")
            }
        })
        .catch(error=>alert(error.message))
         
    }
    return (
        <div className="login">
            <Link to="/"> 
            <img  className="login__img"  src="https://th.bing.com/th/id/OIP.Ku4iy6JfyZOZAKxOkfp0ewHaEK?pid=ImgDet&rs=1"/>
        </Link>
        <div className="login__container">
            <h1 className="login__sign">Sign In</h1>
            <form> 
                <h5 className="credential_name">Email</h5>
                <input type="text" className="input_box" placeholder="Type your email" value={email} onChange={e=>setEmail(e.target.value)}/>

                {/*here we are getting a track of what are we typing in those boxes*/}

                <h5 className="credential_name">Password</h5>
                <input  className="input_box" type="password" placeholder="Type your password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className="loginsign_button"  type="submit" onClick={signIn}>Sign-In</button>
            </form>
            <p className="login_info">
                By signing-in you agree to Amazon's
                 Conditions of USe & Sale,Please 
                 see our privacy Notice,our Cookies Notice 
                 and your Interest-based Ads Notice.

            </p>
            <button className="loginregister_button" onClick={register}>Create a Amazon Account</button>
        </div>
        </div>
    )
}

export default Login
