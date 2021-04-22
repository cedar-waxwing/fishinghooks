import React, { useState, useEffect } from 'react';
import ocean from "./ocean.jpg"
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

function Main() {


    function loggedInGreeting(props) {
        return <h1> Welcome {props.userData.name}</h1>
    }

    return (
        <div className="row">
            <div className="col-4">
                <div className="card" styles="width: 18rem;">
                    <img src={ocean} class="card-img-top" alt="Boat"></img>
                    <div className="card-body">
                        <h5 className="card-title">Main page</h5>
                        <p className="card-text">Welcome to my website!</p>
                        <Link to="/login" className="btn btn-primary">Log in</Link>
                &nbsp;
                <Link to="/signup" className="btn btn-primary">Sign up</Link>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

