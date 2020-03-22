import axios from 'axios';

export const getSpaces = () => {
    return axios.get('/api/spaces')
}

export const getSpace = (id) => {
    return axios.get(`/api/spaces/${id}`)
}

export const getOwnerSpaces = (id) => {
    return axios.get(`/api/spaces/user/${id}`)
}

export const createSpace = (data) => {
    return axios.post('/api/spaces', data)
}
