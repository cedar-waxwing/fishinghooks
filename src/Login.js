import React, { useState, useCallback } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [loginData, setLoginData] = useState({})

    function userLogin(e) {
        console.log(loginData)
        e.preventDefault()
        axios({
            method: 'post',
            url: 'https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/oauth/token',
            data: {
                grant_type: "password",
                client_id: "93361012-98b9-4a86-9d63-8c2bc0437acb",
                client_secret: "SiDwGvf7JPrjRQkdSu1gIFqAO7UOGqVxMhDEaor7",
                scope: "",
                ...loginData
            }
        })
            .then(function (response) {
                console.log(response)
                props.saveToken(response.data.access_token);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const callbackHelper = e => setLoginData(previousState => ({ ...previousState, [e.target.name]: e.target.value }), [])

    const handleInputChange = useCallback(callbackHelper);

    return (
        <div className="row">
            <div className="col-4">
                <div>
                    LOG IN
                </div>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={loginData.username} onChange={handleInputChange} name="username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input value={loginData.password} onChange={handleInputChange} name="password" type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" onClick={userLogin} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}



export default Login;
