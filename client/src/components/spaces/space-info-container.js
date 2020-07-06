import { connect } from 'react-redux'
import { toggleAmenitiesHidden } from '../../actions/amenities_actions'
import SpaceInfo from './space-info'

const mdp = dispatch => ({
    toggleAmenitiesHidden: () => dispatch(toggleAmenitiesHidden())
})

export default connect(null, mdp)(SpaceInfo)