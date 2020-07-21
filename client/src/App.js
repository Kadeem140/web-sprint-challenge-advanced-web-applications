import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import { PrivateRoute } from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";


function App() {

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
   <> 
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>

      <PrivateRoute path="/bubbles" component={BubblePage}/>

        <Link to="/bubbles">BubblePage</Link>

        <Link to="/login">Login</Link>
    </Router>

    <button onClick={logout}>Log Out</button>
  </>  
  );
}


export default App;
