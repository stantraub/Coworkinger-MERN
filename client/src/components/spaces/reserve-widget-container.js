import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReserveWidget from './reserve-widget'

const msp = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const space = state.entities.spaces[id];
    return {
      cost: space.cost,
      website: space.website,
      email: space.email,
      phone: space.phone,
    }
}


export default withRouter(connect(msp, null)(ReserveWidget))