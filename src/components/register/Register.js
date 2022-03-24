import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import style from "./RegisterStyle.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    /**
     * Registration State Variables
     */
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    /*
    * password validation message
    */
    const passwordValidationMessage = ["*The password length must be in length 8-16",
        "*The password must contain one or more uppercase characters",
        "*The password must contain one or more lowercase characters",
        "*The password must contain one or more numeric values"] // handle it

    /**
     * Error handle:
     * 1. control changes when a focus is hovered in the password block or
     * when a user inputs two passwords that do not match
     * 2. errorMsg is an array with two possible errors. Either the email already
     * exists in the database or the passwords do not match.
     */
    const [control, setControl] = useState(true);
    const [errorMsg, setError] = useState("");




    function clearingErrorMessage() {
        if (!control) {
            setControl(true);
            setPassword('');
            setPassword2('');
            setError('');
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();
        // if (password.length < 8 || password.length > 16) {
        //     setControl(false);
        //     setError("password length should be in 8-16");
        // }
        // else if (!/[A-Z]/.test(password)) {
        //     setControl(false);
        //     setError("password length should have at least one uppercase character");
        // }
        // else if (!/[a-z]/.test(password)) {
        //     setControl(false);
        //     setError("password length should have at least one lowercase character");
        // }
        // else if (!/[0-9]/.test(password)) {
        //     setControl(false);
        //     setError("password length should have at least one number");
        // }
        // else if (password != password2) {
        //     setControl(false);
        //     setError("passwords does not match");
        // }
        // else {

        // }
        console.log("lastName: " + lastName + "\n"  +
        "firstName: " + firstName + "\n" +
        "email: " + email + "\n"  +
        "phone: " + phone + "\n"  +
        "password: " + password + "\n"  +
        "password2: " + password2 + "\n"  +
        "city: " + city + "\n"  +
        "street: " + street + "\n" +
        "state: " + state + "\n" +
        "zip: " + zip);
    }

    return (
        <div className={style.formContent}>
            <Form onSubmit={onSubmit}>
                <h2 className={style.title}>Create Account</h2>
                <Row className="mb-3 mx-auto w-75 ">
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="Text" name = "firstName" onChange = {(e) => setFirstName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="Text" name = "lastName" onChange = {(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3 mx-auto w-75">
                    <Form.Group controlId="Phone" className="w-100">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name = "phone" onChange = {(e) => setPhone(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mx-auto w-75">
                    <Form.Group controlId="Email" className="w-100">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name = "email" onChange = {(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mx-auto w-75">
                    <Form.Group controlId="formGridPassword" className="w-100">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange = {(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mx-auto w-75">
                    <Form.Group controlId="formGridPassword2" className="w-100">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" onChange = {(e) => setPassword2(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mx-auto w-75">
                    <Form.Group as={Col} controlId="formGridStreet">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" onChange = {(e) => setStreet(e.target.value)}/>
                    </Form.Group>



                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" onChange = {(e) => setCity(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3 mx-auto w-75">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Ontario" onChange = {(e) => setState(e.target.value)}>
                            <option value = "ON">Ontario</option>
                            <option value = "BC">British Columbia</option>
                            <option value = "PQ">Quebec</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" onChange = {(e) => setZip(e.target.value)}/>
                    </Form.Group>
                </Row>

                <div class="text-center mb-3">
                    <div class="mb-3">Already a member?
                        <a href="">Click here to login!</a>
                    </div>

                    <Button variant="primary" type="submit" size="lg">
                        Register
                    </Button>
                </div>
            </Form>
        </div>


    )

}

export default Register