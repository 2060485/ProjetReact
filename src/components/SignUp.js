import { useState } from "react";
import './signUp.css'

function SignUp() {

    const [inputValuePassword, setInputValuePassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleInputChangePassword = (event) => {
        setInputValuePassword(event.target.value)
    }

    const [inputValuePassword2, setInputValuePassword2] = useState("");
    const [passwordError2, setPasswordError2] = useState("");

    const handleInputChangePassword2 = (event) => {
        setInputValuePassword2(event.target.value)
    }

    const [inputValueEmail, setinputValueEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (event) => {
        setinputValueEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValuePassword !== inputValuePassword2) {
            setPasswordError2("Please enter the same password!");
        } else {
            setPasswordError2("");
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(inputValueEmail)) {
            setEmailError("Please enter a valid email address!");
        } else {
            setEmailError("");
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!passwordRegex.test(inputValuePassword)) {
            setPasswordError("Please enter a valid password! At least 8 characters long, Contains at least one digit (0-9), Contains at least one lowercase letter (a-z), Contains at least one uppercase letter (A-Z)");
        } else {
            setPasswordError("");
        }

    };





    return (
        <>
            <form class="container rounded-top rounded-bottom mt-5" onSubmit={handleSubmit}>

                <form>
                    <p className='mt-2'>Sign up form</p>
                    <div class="row mt-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                    </div>
                </form>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={inputValueEmail} onChange={handleEmailChange} />
                </div>
                <div className='emailError'>{emailError}</div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={inputValuePassword} onChange={handleInputChangePassword} />
                </div>
                <div className='passwordError'>{passwordError}</div>

                <div class="form-group">
                    <input type="password" class="form-control mt-2" id="exampleInputPassword2" placeholder="Confirm" value={inputValuePassword2} onChange={handleInputChangePassword2} />
                </div>
                <div className='passwordError2'>{passwordError2}</div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>

            </form>

        </>
    );
}

export default SignUp;