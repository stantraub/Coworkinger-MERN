import { connect } from 'react-redux'
import ReviewForm from './review_form'
import { withRouter } from 'react-router-dom'
import { fetchSpace } from '../../actions/space_actions';
import { addReview } from '../../actions/review_actions'

const msp = (state, ownProps) => ({
    space: state.entities.spaces[ownProps.match.params.id],
    reviewer: state.session.user.id
 })


const mdp = dispatch => ({
    fetchSpace: (id) => dispatch(fetchSpace(id)),
    addReview: (data) => dispatch(addReview(data))

})

export default withRouter(connect(msp, mdp)(ReviewForm))

