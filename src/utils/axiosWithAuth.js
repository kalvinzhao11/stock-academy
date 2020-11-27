import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    return axios.create({
        headers: {
            authorize: token
        },
        baseURL: 'https://expat-journal-21.herokuapp.com'
    })
}