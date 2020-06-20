import axios from 'axios'

export const RECEIVE_PROFILE_PIC = "RECEIVE_PROFILE_PIC"

export const receiveProfilePic = profilePic => ({
    type: RECEIVE_PROFILE_PIC,
    profilePic
})

export const updateProfilePic = (values) => async dispatch => {
    console.log(values)
    const uploadConfig = await axios.get(`/api/upload/edit-photo`, {
        params: {
            username: values.username
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

    const newProfilePic = await axios.patch('/api/users/update-profile-pic', {
        profilePic: uploadConfig.data.key,
        id: values.id
    })

    dispatch(receiveProfilePic(newProfilePic))

}
