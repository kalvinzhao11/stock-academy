import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'

const NavBar = () => {
    const [course, setCourse] = useState()
    const history = useHistory()
    const toHome = (e) => {
        e.preventDefault()
        history.push('/')
    }
    const toContent = (e) => {
        e.preventDefault()
        history.push(`/course/${course ? course : 'limit'}`)
    }
    return (
        <div>
        <h1 onClick={toHome}>StockAcademy</h1>
        <a onClick={toContent}>Course</a>
        <a>Backtester</a>
        <a>Screener</a>
        {/* update login and (LOGO) + name based on authentication */}
        <Link to="/login">Login</Link>
        <Link to="/Register">Register</Link>
        </div>
    )
}

export default NavBar