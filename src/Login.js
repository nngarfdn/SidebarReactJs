import React from "react";
import {
  Button
} from "react-bootstrap";
import './App.css';

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    // handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    
    <section className="login bglogin">
{/* 
<form>
                <h3 className="text-center">Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}   className="form-control"/>

<p className="errorMsg">{emailError}</p>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input  type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} className="form-control" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                    <p className="errorMsg">{passwordError}</p>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin}>Submit</button>
               
            </form> */}


      <div className="form-group">
          {/* {!hasAccount ? (<h2>Create An Account</h2>) : (<h2>Welcome Again , Login</h2>)} */}
          <h3 className="text-center">Sign In</h3>
        <label>Email</label>
        <input
        className="form-control"
          type="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className=" text-error">{emailError}</p>

        <label>Password</label>
        <input
         className="form-control" 
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className=" text-error">{passwordError}</p>

       
    <Button className="btn btn-primary btn-block mt-5" onClick={handleLogin} >Login</Button>{' '}
      </div>
    </section>
  );
}

export default Login;