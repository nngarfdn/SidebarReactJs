import React from 'react'
import firebase from "./firebase"
import Dashboard from "./Dashboard";

function Hero({handleLogout}) {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        //   clearInputs();
        //   setUser(user);
          console.log('User email: ', user.email);
        } else {
        //   setUser("");
        }
      });

    return (
        <div className="next-page">
            <section>
                <nav>
                    <h2>Welcom</h2>
                    <button className="logout-btn" onClick = {handleLogout} >Logout</button>
                    <Dashboard/>

                </nav>
            </section>
        </div>
    )
}

export default Hero