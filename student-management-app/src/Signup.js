import React, {useState} from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Signup.css'

function Signup() {
    /* useState for storing details */
    /* onChange isa function that will store the input details. handleInputChange is the function name that do the above mentioned activity */
    /*whenever creating a function it should be between curly after curly brace open and before return */

    const [formData,setFormData] = useState({ /* const means constant */
        firstName:'',
        lastName:'',
        email:'',
        username:'',
        password:''
    })

    const handleInputChange = (event) =>{
    const {name,value} = event.target
    setFormData((prevData) => ({...prevData,[name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData,"the input data")
    }


    return (
        <div className="signup-card sm-3">
            <h2>Registeration Form</h2>
            <form onSubmit={handleSubmit}>

                <br />
                <>
                    <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                        <Form.Control type="text" placeholder="First Name" name="firstName" value = {formData.firstName} onChange={(event) =>handleInputChange(event)} /> 
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                        <Form.Control type="text" placeholder="Last Name" name="lastName" value = {formData.lastName} onChange={(event) =>handleInputChange(event)} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="email" name="email" value = {formData.email} onChange={(event) =>handleInputChange(event)} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                        <Form.Control type="text" placeholder="username" name="username" value = {formData.username} onChange={(event) =>handleInputChange(event)} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control type="password" placeholder="Password" name="password" value = {formData.password} onChange={(event) =>handleInputChange(event)} />
                    </FloatingLabel>

                    <Button as="input" type="submit" value="Submit" className="btn"/>{' '}
                </>

            </form>
        </div>
    )
}

export default Signup;
