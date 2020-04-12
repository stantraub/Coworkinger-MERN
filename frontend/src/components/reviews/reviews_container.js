import { connect } from 'react-redux'
import Reviews from './reviews'
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    const { id } = ownProps.match.params
    let space = state.entities.spaces[id]
    return {
        reviews: space.reviews,
        rating: Math.ceil(parseFloat(space.rating.$numberDecimal) * 100) / 100
    }
}


export default withRouter(connect (msp, null)(Reviews))