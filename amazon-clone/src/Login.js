import React, {useState} from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();
    // Firebase login
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push("/")
    })
    .catch(err => alert(err.message))
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) =>{
        // sucessful
        console.log(auth)
        if (auth) {
          history.push('/');
        }
      })
      .catch(err => alert(err));

  }

    return (
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
            alt=""
          />
        </Link>
        <div className="login_container">
          <h1>Sign-in</h1>
          <form>
            <h5>Email</h5>
            <input typeof="text" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            <h5>Password</h5>
            <input type="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button className="login_signInButton" type='submit'  onClick={signIn}> Sign In</button>
          </form>
          <p>
            By signing-in you agtee to the AMAZON FAKE CLONE conditions of USE &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads.
          </p>
          <button className="login_registerButton" onClick={register}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    );
}

export default Login
