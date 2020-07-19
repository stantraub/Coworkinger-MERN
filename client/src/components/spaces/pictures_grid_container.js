import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleCarouselHidden } from '../../actions/carousel_actions'
import PicturesGrid from './pictures-grid'

const msp = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const space = state.entities.spaces[id];
    return {
        photos: space.spacePhotos
    }
}

const mdp = (dispatch) => ({
    toggleCarouselHidden: () => dispatch(toggleCarouselHidden())
})

export default withRouter(connect(msp, mdp)(PicturesGrid))