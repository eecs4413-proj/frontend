import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import style from "./LoginStyle.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    /**
     * Registration State Variables
     */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    return (
        <div className={style.formContent}>
            <Form>
                <h2 className={style.title}>Login</h2>

                    <Form.Group controlId="Email" className="mb-3 mx-auto w-80 shadow-sm">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group controlId="Password" className="mb-3 mx-auto w-80 shadow-sm">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                <div class="text-center mb-3">
                    <div class="mb-3">Don't have account yet?
                        <a href="">Click here to register!</a>
                    </div>

                    <Button variant="primary" type="submit" size="lg">
                        Login
                    </Button>
                </div>
            </Form>
        </div>


    )

}

export default Login