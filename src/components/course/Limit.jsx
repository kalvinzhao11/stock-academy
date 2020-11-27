import React, {useEffect} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth';

const Limit = () => {

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

export default Limit