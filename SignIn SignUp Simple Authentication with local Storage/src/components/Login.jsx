import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const history = useNavigate();

    // const [data, setData] = useState([]);
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const getData = (e) => {
        //console.log(e.target.value);

        const { value, name } = e.target;

        // console.log(value, name);

        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })
    }

    // console.log(input);

    const addData = (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem("userDetails");
        console.log(getUserArr);
        
        const { email, password } = input;

        if(email === "") {
            alert("email field is required");
        }
        else if(!email.includes("@")) {
            alert("plz enter valid email address");
        }
        else if(password === "") {
            alert("password field is required");
        }
        else if(password.length < 5) {
            alert("password length minimum should be 6");
        }
        else {
            // alert("submitted");
            if(getUserArr && getUserArr.length) {
                const userData = JSON.parse(getUserArr);
                // console.log(userData);
                const userLogin = userData.filter((item, id) => {
                    return item.email === email && item.password === password;
                });

                if(userLogin.length === 0) {
                    alert("invalid login");
                }
                else {
                    console.log('user login successful');
                    localStorage.setItem("user_login", JSON.stringify(userLogin));
                    history("/userDetails")
                }
            }
        }
    }

    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" style={{float: 'left'}} className='col-lg-6' onClick={addData} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-5' style={{float: 'left', display: 'flex', marginTop: '10px', marginLeft: '-50%'}}>Don't have an Account, <span style={{marginLeft: '8px', color: 'green'}}><Link to="/" style={{textDecoration: 'none'}}> SignUp</Link></span> </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login;