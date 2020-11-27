import React, {useEffect} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth';

const Course = () => {

    useEffect(() => {
        axiosWithAuth()
            .get()
            .then()
            .catch()
    }, [])
    return (
        <>
        </>
    )
}

export default Course