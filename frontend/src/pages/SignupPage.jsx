import React, { useState } from 'react';
// import { Button } from '@mui/material';
import dob from "../images/dob.svg";
import name from "../images/name.svg";
import email from "../images/email.svg";
import pass from "../images/pass.svg";
import confirm from "../images/confirm.svg";
import correctpass from "../images/correctpass.svg";
import background_2 from "../images/background_2.jpg";
import { useNavigate } from "react-router-dom";
import eye from "../images/eye.svg";
import hide from "../images/hide.svg";

export const SignupPage = () => {

    const navigate = useNavigate();

    const handleSignInPage = () => {

        navigate('/signin');

    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [userId, setUserId] = useState();

    const updateDataName = (e) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            name: value
        })
    }
    const updateDataEmail = (e) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            email: value
        })
    }
    const updateDataPass = (e) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            password: value
        })
    }
    const updateDataConPass = (e) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            confirmPassword: value
        })
    }

    const [errors, setErrors] = useState({});
    console.log(errors);

    const validate = () => {

        const newErrors = {};
        const nameRegex = /^[A-Za-z\s]{8,20}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;

        if (!nameRegex.test(formData.name)) {
            newErrors.name = "Name must have alphabetical characters only, min 8 chars, max 20 chars."
        }
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "no valid format for Email";
        }
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = "Password must have min 8 chars, max 20 chars, at least one uppercase letter, one lowercase letter, and one number and also a special character"
        }
        if (!(formData.password === formData.confirmPassword)) {
            newErrors.confirmPassword = "password not matching";
        }

        setErrors(newErrors);
        console.log("errors: ", newErrors);
        return Object.keys(newErrors).length === 0;

    };

    const submitForm = async (event) => {
        event.preventDefault();
        setErrors({});

        const answer = await validate();
        console.log(answer);

        if (answer === true) {

            //fetching data towards backend
            await fetch('http://localhost:5000/user', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUserId(data.user_id);
                handleSignInPage();
        }); 
        }
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = (event) => {
        event.preventDefault();

        setIsPasswordVisible((prev) => !prev);
    };


    return (

        <div>
            <div className='back-signup'>
                <img src={background_2} alt="image hai" className='backgroundimg' />
            </div>

            <div className="filter-box"></div>

            <div className="signup-container">
                <form>
                    <h1 className="animated-text">Sign Up</h1>
                    <div className="input-box">
                        <img src={name} alt="image hai" />
                        <input type="text" placeholder="Enter Your Name" onChange={updateDataName} />
                        <input type="text" placeholder="Username" />
                        {console.log(formData.name)}
                    </div>
                    {errors.name && <p>{errors.name}</p>}

                    <div className="input-box">
                        <img src={dob} alt="image hai" />
                        <input type="date" className='date' />
                        <input type="text" placeholder="Phone" className='phone' />
                    </div>

                    <div className="input-box">
                        <img src={email} alt="image hai" />
                        <input type="email" placeholder="Enter Your Email" onChange={updateDataEmail} />
                        {console.log(formData.email)}

                    </div>
                    {errors.email && <p>{errors.email}</p>}

                    {/* <div class="input-box"></div> */}

                    <div className="input-box">
                        <img src={pass} alt="image hai" />
                        <input type={isPasswordVisible ? 'text' : 'password'} placeholder="Password" className='password' onChange={updateDataPass} />
                        <button onClick={togglePasswordVisibility} aria-label="Toggle password visibility" style={{ backgroundColor: "#ff000000" }}>
                            {isPasswordVisible ? <img src={hide} /> : <img src={eye} />}
                        </button>
                        {console.log(formData.password)}

                    </div>
                    {errors.password && <p>{errors.password}</p>}

                    <div className="input-box">
                        <img src={confirm} alt="image hai" className='passicon' />
                        <img src={correctpass} alt="image hai" className='correctpassicon' />
                        <input type="password" placeholder="Confirm Password" className='Conpassword' onChange={updateDataConPass} />
                    </div>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                    <button id="btn" onClick={submitForm}>Sign Up</button>
                </form>
            </div>

        </div>
    );
};


