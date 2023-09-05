import React,{useState} from 'react'
import "./login.css";
import { Link, Navigate } from 'react-router-dom';
import {auth} from "./firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const signIn=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user=userCredential.user;

                navigate('/');

        }).catch(error=>alert(error.message))



    }
    const register=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user=userCredential.user;
            console.log(user);
            if(auth)
            {
                navigate('/');
            }
        }).catch(error=>alert(error.message))


    }
  return (
    <div className='login'>
        <Link to='/'>
        <img className="login_logo" src='https://www.demandsphere.com/wp-content/uploads/2018/02/Amazon_logo.png'/>
        </Link>
        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login_signinbutton'>Sign In</button>
            </form>
            <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            <button onClick={register} className='login_registerbutton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login