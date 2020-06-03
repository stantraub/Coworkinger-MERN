import UserReviews from "./user_reviews"
import { connect } from 'react-redux'

const msp = state => {
    const { id: userId } = state.session.user
    return {
        userId
    }
}

const mdp = dispatch => {

}



export default connect(msp, mdp)(UserReviews)