import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Login from "../components/Login";
import Register from '../components/Register';
import Course from "../components/course/Course";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path='/course'>

                </Route>
                <Route path='/about-us'>

                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>
                <Route path='/course'>
                    <Course/>
                </Route>
            </Switch>
        </>
    )
}

export default Routes