import React from 'react';

import  {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

export default function Login() {
        return (
            <main id="mainContent">
            <form id="loginForm">
                <h2>Login</h2>
                <label for="loginEmail">Email:</label>
                <input type="email" id="loginEmail"/>
                <label for="loginPassword">Password:</label>
                <input type="password" id="loginPassword"/>
                <button type="button" id="loginSubmit">Login</button>
            </form>
          </main>
        )
      }



