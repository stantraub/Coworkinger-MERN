import { getSpaces, getOwnerSpaces, getSpace } from '../util/space_api_util';
import axios from 'axios'

export const RECEIVE_ALL_SPACES = "RECEIVE_SPACES";
export const RECEIVE_SPACE = "RECEIVE_SPACE"
export const RECEIVE_OWNER_SPACES = "RECEIVE_OWNER_SPACES";


export const receiveSpace = space => ({
    type: RECEIVE_SPACE,
    space: space
})

export const receiveSpaces = spaces => ({
    type: RECEIVE_ALL_SPACES,
    spaces: spaces.data
})

export const fetchSpace = (id) => dispatch => (
    getSpace(id)
        .then(space => dispatch(receiveSpace(space)))
        .catch(err => console.log(err))
)

export const fetchSpaces = () => dispatch => (
    getSpaces()
        .then(spaces => dispatch(receiveSpaces(spaces)))
        .catch(err => console.log(err))
)

export const createSpace = (values, history) => async dispatch => {
    console.log(values)
    const uploadConfig = await axios.get('/api/upload/space-pic', {
        params: {
            name: values.name
        }
    })
    delete axios.defaults.headers.common['Authorization']
    const { file } = values
    await axios.put(uploadConfig.data.url, file, {
        headers: {
            'Content-Type': file.type
        }
    })

    const token = localStorage.getItem("jwtToken")
    axios.defaults.headers.common["Authorization"] = token

    const space = await axios.post('/api/spaces', {
        ...values,
        mainPhoto: uploadConfig.data.key
    })
    
    // return createNewSpace(values)
    //   .then(space => dispatch(receiveNewSpace(space)))
    //   .catch(err => console.log(err));
}