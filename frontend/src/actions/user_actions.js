import axios from 'axios'

export const RECEIVE_PROFILE_PIC = "RECEIVE_PROFILE_PIC"

export const receiveProfilePic = profilePic => ({
    type: RECEIVE_PROFILE_PIC,
    profilePic
})

export const updateProfilePic = (values) => async dispatch => {
    const uploadConfig = await axios.get(`/api/upload/edit-photo`, {
        params: {
            username: values.username
        }
    })
    delete axios.defaults.headers.common['Authorization']

}
