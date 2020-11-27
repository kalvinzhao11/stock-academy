import React from 'react'
import {TextField, Button} from '@material-ui/core';
import {useState} from 'react';
import axios from 'axios'


const Register = () => {
    const initialForm = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: '',
    }
    const [formData, setFormData] = useState(initialForm)

    const inputHandler = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const submittedData = {
            email: formData.email,
            password: formData.password
        }
        axios
            .post('https://expat-journal-21.herokuapp.com/api/auth/register', submittedData)
            .then(response => (console.log(response)))
            .catch(error => (console.log(error)))
        setFormData(initialForm)
    }
    return (
        <form onSubmit={submitHandler}>
            <TextField
                label='First Name'
                variant="outlined"
                name='firstName'
                value={formData.firstName}
                onChange={inputHandler}
                type='text'
            />
            <TextField
                label='Last Name'
                variant="outlined"
                name='lastName'
                value={formData.lastName}
                onChange={inputHandler}
                type='text'
            />
            <TextField
                label='Email'
                variant="outlined"
                name='email'
                value={formData.email}
                onChange={inputHandler}
                type='text'
            />
            <TextField
                label='Password'
                variant="outlined"
                name='password'
                value={formData.password}
                onChange={inputHandler}
                type='password'
            />
            <TextField
                label='Confirm Password'
                variant="outlined"
                name='confirm'
                value={formData.confirm}
                onChange={inputHandler}
                type='password'
            />
            {/* Privacy and Terms of Service */}
            {/* something to check for agreement to TOS */}
            <Button type='submit'>
                Create Account
            </Button>
        </form>
    )
}

export default Register