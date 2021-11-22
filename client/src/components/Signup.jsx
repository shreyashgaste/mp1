import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Signup = () => {
    const history = useNavigate();
    const initialState = { name: '', email: '', phone: '', password: '', formErrors: {} };
    let [user, setUser] = useState(initialState);


    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleFormValidation = () => {
            const { name, email, phone, password } = user;
            let formErrors = {};
            let formIsValid = true;

            //Student name     
            if (!name) {
                formIsValid = false;
                formErrors["studNameErr"] = "Name is required.";
                alert(formErrors.studNameErr);
            }

            //Email    
            if (!email) {
                formIsValid = false;
                formErrors["emailIdErr"] = "Email id is required.";

            }
            else 
            {if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

                formIsValid = false;
                formErrors["emailIdErr"] = "Invalid email id";
            }
             }



            //Phone number    
            if (!phone) {
                formIsValid = false;
                formErrors["phoneNumberErr"] = "Phone number is required.";
            }
            else {
                var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[6789]\d{9}$/;
                if (!mobPattern.test(phone)) {
                    formIsValid = false;
                    formErrors["phoneNumberErr"] = "Invalid phone number.";
                }
            }

            //City 

            if (password === '') {
                formIsValid = false;
                formErrors["cityErr"] = "enter password (min 5 characters).";
            }
            user.formErrors = formErrors;
            // setUser({ formErrors: formErrors });
            console.log(user.formErrors);
            return formIsValid;
    }
    let name, value;
    // const handleChangeEvent = (e,field) => {
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUser({ ...user, [name]: value })
    //     if (field === 'email') {
    //         var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //         if (value.match(mailformat)) {
    //             setUser({ ...user, [name]: value })
    //             return true
    //         } else {
    //             alert("You have entered an invalid email address!");
    //             return false
    //         }
    //     } else if (field === 'password') {
    //         var passwordFormat = /^[A-Za-z]\w{7,14}$/;
    //         if (value.match(passwordFormat)) {
    //             setUser({ ...user, [name]: value })
    //             return true
    //         }else{
    //             alert("Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]")
    //         }
    //     }
    // }

    const PostData = async (e) => {
        e.preventDefault();
        
    // if(!handleFormValidation()){return;}
    const { name, email, phone, password } = user;
    const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name, email: email, phone: phone, password: password
        })
    });

    const data = await res.json();
    if (!data || !handleFormValidation()) {
        window.alert("Invalid Registration");
        // setUser(user);
        console.log("Invalid Registration");
    } else {
        window.alert("Registration Successfull");
        
        setUser(initialState);
        history("/login");
    }
}
let { studNameErr, emailIdErr, phoneNumberErr, cityErr } = user.formErrors;

return (
    <>

        <main>

            <div className="reg-wrapper">
                <h2>Registration</h2>
                <form method="POST" onSubmit={(e) => { PostData(e) }}>
                    <div className="input-box">

                        <input type="text"
                            name="name"
                            id="name"
                            value={user.name}
                            onChange={e => handleInputs(e)}
                            placeholder="Enter your name"
                            className={studNameErr ? 'showError' : ''} />

                        {studNameErr &&
                            <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>
                        }
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={user.email}
                            onChange={e => handleInputs(e)}
                            placeholder="Enter your email"
                            className={emailIdErr ? 'showError' : ''} />
                        {emailIdErr &&
                            <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>
                        }
                    </div>
                    <div className="input-box">
                        <input type="number"
                            name="phone"
                            id="phone"
                            value={user.phone}
                            onChange={e => handleInputs(e)}
                            placeholder="Enter Your Phone no"
                            className={phoneNumberErr ? 'showError' : ''} />
                        {phoneNumberErr &&
                            <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>
                        }
                    </div>
                    <div className="input-box">
                        <input type="password"
                            name="password"
                            id="password"
                            value={user.password}
                            onChange={e => handleInputs(e)}
                            placeholder="Create password(at least 5 characters)"
                            className={cityErr ? 'showError' : ''} />
                        {cityErr &&
                            <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>
                        }
                    </div>

                    <div className="input-box button">
                        <input type="submit" value="Register Now" />

                    </div>
                    <div className="text">
                        <h3>Already have an account? <a href="/login">Login now</a></h3>
                    </div>

                    <div className="text">
                        <h3>return to <a href="/">Home</a></h3>
                    </div>
                </form>
            </div>
        </main>
    </>
)
}

export default Signup
