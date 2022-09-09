import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Home () {

    const history = useNavigate();

    const [data, setData] = useState([]);
    const [input, setInput] = useState({
        name: '',
        email: '',
        date: '',
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

        // console.log(input);

        const { name, email, date, password } = input;

        if(name === "") {
            alert('name field is required');
        }
        else if(email === "") {
            alert("email field is required");
        }
        else if(!email.includes("@")) {
            alert("plz enter valid email address");
        }
        else if(date === "") {
            alert("date field is required");
        }
        else if(password === "") {
            alert("password field is required");
        }
        else if(password.length < 5) {
            alert("password length minimum should be 6");
        }
        else {
            // alert("submitted");
            localStorage.setItem('userDetails', JSON.stringify([...data, input]));
        }
        history("/login");
    }
 

    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getData} placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="date" name='date' onChange={getData} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" style={{float: 'left'}} className='col-lg-6' onClick={addData} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-5' style={{float: 'left', display: 'flex', marginTop: '10px', marginLeft: '-50%'}}>Already Have an Account <span style={{marginLeft: '8px', color: 'green'}}><Link to="/login" style={{textDecoration: 'none'}}>SignIn</Link></span> </p>
                        {/* <p>Already Accout <span> <Link to="/login">SignIn</Link> </span> </p> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;