import { connect } from 'react-redux'
import { updateProfilePic } from '../../actions/user_actions'
import EditPhoto from './edit-photo'

const msp = (state) => {
    let { user } = state.session
    return {
        user
    };
}

const mdp = dispatch => ({
    updateProfilePic: (values) => dispatch(updateProfilePic(values))
})

export default connect(msp,mdp)(EditPhoto)