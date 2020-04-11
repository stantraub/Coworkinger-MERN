import { connect } from 'react-redux'
import Reviews from './reviews'
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    const { id } = ownProps.match.params
    return {
        reviews: state.entities.spaces[id].reviews
    }
}


export default withRouter(connect (msp, null)(Reviews))