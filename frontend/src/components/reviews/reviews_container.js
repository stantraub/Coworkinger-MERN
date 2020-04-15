import { connect } from 'react-redux'
import Reviews from './reviews'
import { withRouter } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions'


const msp = (state, ownProps) => {
    const { id } = ownProps.match.params
    let space = state.entities.spaces[id]
    let rating = parseFloat(space.rating.$numberDecimal)
    rating = rating.toString().length === 1 ? rating.toFixed(1) : rating.toFixed(2)
    let { isAuthenticated } = state.session
    return {
        reviews: space.reviews,
        rating: rating,
        isAuthenticated
    }
}

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})


export default withRouter(connect (msp, mdp)(Reviews))