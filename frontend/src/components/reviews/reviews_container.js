import { connect } from 'react-redux'
import Reviews from './reviews'
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    const { id } = ownProps.match.params
    let space = state.entities.spaces[id]
    let rating = parseFloat(space.rating.$numberDecimal)
    rating = rating.toString().length === 1 ? rating.toFixed(1) : rating.toFixed(2)

    return {
        reviews: space.reviews,
        rating: rating
    }
}


export default withRouter(connect (msp, null)(Reviews))