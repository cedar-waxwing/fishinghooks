import React, { useState, useCallback } from 'react';
import axios from 'axios';

const Signup = (props) => {
    const [registrationData, setRegistrationData] = useState({})

    function userRegistration(e) {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/auth/register',
            data: registrationData
        })
            .then(function (response) {
                props.saveToken(response.data.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const callbackHelper = e => setRegistrationData(previousState => ({ ...previousState, [e.target.name]: e.target.value }), [])

    const handleInputChange = useCallback(callbackHelper);

    return (
        <div className="row">
            <div className="col-4">
                <div>
                    SIGN UP
                </div>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">Name</label>
                        <input value={registrationData.name} onChange={handleInputChange} name="name" type="name" className="form-control" id="exampleInputName1"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={registrationData.email} onChange={handleInputChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input value={registrationData.password} onChange={handleInputChange} name="password" type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" onClick={userRegistration} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
