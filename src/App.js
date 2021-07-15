import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {Home,Users,Revenue} from './pages/Home';
import Reports from './pages/Reports';
import Login from "./Login";
import {Products,Products1,Products2,Products3} from './pages/Products';
import {Messages} from './pages/Messages';
import {Team} from './pages/Team';
import firebase from "./firebase";
import {Support} from './pages/Support';
import Add from "./pages/Add"
import DataAnggur from "./pages/DataAnggur"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);


  return (
    <div>
     {user ? (
          <Router>
        <Sidebar />
        <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
          <Route path='/home' exact component={Home} />
          <Route path='/dataanggur'  exact component={DataAnggur} />
          <Route path='/tambahanggur'  exact component={Add} />
          <Route path='/products' exact component={Products} />
          <Route path='/products/products1' exact component={Products1} />
          <Route path='/products/products2' exact component={Products2} />
          <Route path='/products/products3' exact component={Products3} />
          <Route path='/team' exact component={Team} />
          <Route path='/messages' exact component={Messages} />
          <Route path='/support' exact component={Support} />
        </Switch>
      </Router>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          //  handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>


      // <Router>
      //   <Sidebar />
      //   <Switch>
      //     <Route path='/home' exact component={Home} />
      //     <Route path='/home/users' exact component={Users} />
      //     <Route path='/home/revenue' exact component={Revenue} />
      //     <Route path='/reports'  exact component={Reports} />
      //     <Route path='/products' exact component={Products} />
      //     <Route path='/products/products1' exact component={Products1} />
      //     <Route path='/products/products2' exact component={Products2} />
      //     <Route path='/products/products3' exact component={Products3} />
      //     <Route path='/team' exact component={Team} />
      //     <Route path='/messages' exact component={Messages} />
      //     <Route path='/support' exact component={Support} />
      //   </Switch>
      // </Router>
 
  );
}

export default App;