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

    const handleInputChangeEmail = (event) => {
        setinputValueEmail(event.target.value);
    };

    const [InputValueFirstName, setInputValueFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const handleChangeFirstName = (event) => {
        setInputValueFirstName(event.target.value);
    };

    const [InputValueLastName, setInputValueLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const handleChangeLastName = (event) => {
        setInputValueLastName(event.target.value);
    };

    const [inputValueUsername, setInputValueUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");

    const handleInputChangeUsername = (event) => {
        setInputValueUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPasswordError(inputValuePassword && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(inputValuePassword) ? "" : "Please enter a valid password! At least 8 characters long, Contains at least one digit (0-9), Contains at least one lowercase letter (a-z), Contains at least one uppercase letter (A-Z)");
        setPasswordError2(inputValuePassword === inputValuePassword2 ? "" : "Please enter the same password!");
        setEmailError(inputValueEmail && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputValueEmail) ? "" : "Please enter a valid email address!");
        setFirstNameError(InputValueFirstName ? "" : "Please enter a First Name");
        setLastNameError(InputValueLastName ? "" : "Please enter a Last Name");
        setUsernameError(inputValueUsername ? "" : "Please choose a username.");
    };

    return (
        <>
            <form className="container rounded mt-3 needs-validation" noValidate onSubmit={handleSubmit}>

                <div>
                    <p className='mt-2'>Sign up form</p>
                    <div className="row ">
                        <div className="col">
                            <input type="text" className={`form-control ${firstNameError ? 'is-invalid' : (InputValueFirstName && !firstNameError ? 'is-valid' : '')}`} placeholder="First name" value={InputValueFirstName} onChange={handleChangeFirstName} required />
                            <div className="invalid-feedback">{firstNameError}</div>
                        </div>
                        <div className="col">
                            <input type="text" className={`form-control ${lastNameError ? 'is-invalid' : (InputValueLastName && !lastNameError ? 'is-valid' : '')}`} placeholder="Last name" value={InputValueLastName} onChange={handleChangeLastName} required />
                            <div className="invalid-feedback">{lastNameError}</div>
                        </div>
                    </div>
                </div>

                <div className="form-group mt-3">
                    <input type="text" className={`form-control ${usernameError ? 'is-invalid' : (inputValueUsername && !usernameError ? 'is-valid' : '')}`} placeholder="Username" value={inputValueUsername} onChange={handleInputChangeUsername} required />
                    <div className="invalid-feedback">{usernameError}</div>
                </div>

                <div className="form-group mt-1">
                    <input type="email" className={`form-control ${emailError ? 'is-invalid' : (inputValueEmail && !emailError ? 'is-valid' : '')}`} placeholder="Email address" value={inputValueEmail} onChange={handleInputChangeEmail} required />
                    <div className="invalid-feedback">{emailError}</div>
                </div>

                <div className="form-group mt-1">
                    <input type="password" className={`form-control ${passwordError ? 'is-invalid' : (inputValuePassword && !passwordError ? 'is-valid' : '')}`} placeholder="Password" value={inputValuePassword} onChange={handleInputChangePassword} required />
                    <div className="invalid-feedback">{passwordError}</div>
                </div>

                <div className="form-group mt-1">
                    <input type="password" className={`form-control ${passwordError2 ? 'is-invalid' : (inputValuePassword2 && !passwordError2 ? 'is-valid' : '')}`} placeholder="Confirm Password" value={inputValuePassword2} onChange={handleInputChangePassword2} required />
                    <div className="invalid-feedback">{passwordError2}</div>
                </div>

                <button type="submit" className="btn btn-primary mt-2">Submit</button>

            </form>

        </>
    );
}

export default SignUp;
