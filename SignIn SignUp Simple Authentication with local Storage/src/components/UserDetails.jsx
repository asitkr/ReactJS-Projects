import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function UserDetails() {

    const [logindata, setLoginData] = useState([]);

    const history = useNavigate();

    var todayDate = new Date().toISOString().slice(0, 10);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const birthDay = () => {
        const getUser = localStorage.getItem('user_login');
        
        if(getUser && getUser.length) {
            const user = JSON.parse(getUser);
            // console.log(user);
            setLoginData(user);

            const userbirth = logindata.map((item, id) => {
                return item.date === todayDate;
            })

            if (userbirth) {
                setTimeout(() => {
                    console.log('clic');
                    handleShow();
                }, 3000)
            }
        }
    }

    const userLogout = () => {
        localStorage.removeItem('user_login');
        history('/');
    }

    useEffect(() => {
        birthDay();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "error" : 
                <>
                    <h1>Details Page</h1>
                    <h1>{logindata[0].name}</h1>
                    <Button onClick={userLogout}>LogOut</Button>
                    {
                        logindata[0].date === todayDate ?
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{logindata[0].name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Wish you many many reaturns od the day!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        : ""
                    }
                </>
            }
        </>
    )
}

export default UserDetails;