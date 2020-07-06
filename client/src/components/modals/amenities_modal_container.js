import { connect } from 'react-redux'
import { toggleAmenitiesHidden } from '../../actions/amenities_actions'
import Amenities from './amenities_modal'

const mdp = dispatch => ({
    toggleAmenitiesHidden: () => dispatch(toggleAmenitiesHidden())
})

export default connect(null, mdp)(Amenities)