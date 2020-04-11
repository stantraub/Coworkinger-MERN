import axios from 'axios'


export const addNewReview = (data) => {
    return axios.post('/api/reviews', data)
}