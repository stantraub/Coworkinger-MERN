import { connect } from 'react-redux'
import { toggleAmenitiesHidden } from '../../actions/amenities_actions'
import { amenitiesArr } from '../../util/helpers'
import { withRouter } from 'react-router-dom'
import SpaceInfo from './space-info'

const msp = (state, ownProps) => {
    const { id } = ownProps.match.params
    const space = state.entities.spaces[id]
    
    return {
        name: space.name,
        city: space.city,
        description: space.description,
        amenityCategories: amenitiesArr(space.amenityCategories)
    }
}

const mdp = dispatch => ({
    toggleAmenitiesHidden: () => dispatch(toggleAmenitiesHidden())
})

export default withRouter(connect(msp, mdp)(SpaceInfo))