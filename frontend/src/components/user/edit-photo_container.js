import { connect } from 'react-redux'
import EditPhoto from './edit-photo'

const msp = (state) => {
    let { user } = state.session
    return {
        user
    };
}

const mdp = dispatch => {

}

export default connect(msp,mdp)(EditPhoto)