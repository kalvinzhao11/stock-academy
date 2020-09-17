import React, { useState } from 'react';
import axios from 'axios'
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'


const Login = () => {
    const initialLogin = {
        email: '',
        password: '',
    }
    const [login, setLogin] = useState(initialLogin)
    let history = useHistory()
    const inputHandler = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        //don't forget to check form validation
        const submittedData = {
            email: login.email.trim(),
            password: login.password
        }
        console.log(submittedData)
        axios
            .post('https://expat-journal-21.herokuapp.com/api/auth/login', submittedData)
            .then(response => {
                console.log(response)
                window.localStorage.setItem('token', response.data.payload)
                history.pushState('./protected')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <form onSubmit={submitHandler}>
            <TextField
                label='Email'
                variant="outlined"
                name='email'
                value={login.email}
                onChange={inputHandler}
                type='text'
            />
            <TextField
                label='Password'
                variant="outlined"
                name='password'
                value={login.password}
                onChange={inputHandler}
                type='password'
            />
            <Button type='submit'>
                Login
            </Button>
        </form>
    )
}

export default Login