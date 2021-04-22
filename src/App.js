import React, { useState, useEffect } from 'react';
import Main from "./Main.js"
import Signup from "./Signup.js"
import Login from "./Login.js"
import { BrowserRouter as Router, Link, Switch, Route, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';

function App() {

 

  const [token, setToken] = useState("");
  //need another state here for the userdata -- once navigate back to the page, it should still say "Hello Rachel!" etc.

  //just need another of these functions that deletes token for logout
  function saveToken(token) {
    setToken(token)
    window.localStorage.setItem("token", token)
    getUser(token)
    // set the route to /main

//use react router hook, useHistory -- will take you to a specific page anywhere in the site. Helpful if you have logged in and want to take ther person somewhere else. 
  }


  const [userData, setUser] = useState({})

  function getUser(token) {
      axios({
          method: 'get',
          url: 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user',
          data: {token},
          headers: {"Authorization":"Bearer " + token}
      })
          .then(function (response) {
              setUser(response.data);
          })
          .catch(function (error) {
              console.log(error);
          });
  }


  return (
    <Router>
      <Switch>
        <Route exact={true} path="/main">
          <Main token={token}/>
        </Route>
        <Route exact={true} path="/">
          <Main userData={userData}/>
        </Route>
        <Route exact={true} path="/signup">
          <Signup saveToken={saveToken}/>
        </Route>
        <Route exact={true} path="/login">
          <Login saveToken={saveToken}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
