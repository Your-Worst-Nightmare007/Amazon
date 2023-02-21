import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
// import { auth } from './firebase';

function Login() {
    // const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // auth
        // .signInWithEmailAndPassword(email,password)
        // .then(auth => {

        //     history.push('/')
        // })
        // .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // auth
        // .createUserWithEmailAndPassword(email, password)
        // .then((auth) => {
        //     console.log(auth);
        //     if (auth) {
        //         history.push('/')
        //     }
        // })
        // .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login-logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' alt='dummy' />
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={signIn} className='login-signInButton'>Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's conditons of use &amp; sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads.</p>
                <button onClick={register} className='login-registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;