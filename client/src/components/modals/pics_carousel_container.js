import { connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import PicsCarousel from './pics_carousel'
import { toggleCarouselHidden } from '../../actions/carousel_actions'

const msp = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const space = state.entities.spaces[id];
  return {
    photos: space.spacePhotos
  };
};

const mdp = dispatch => ({
    toggleCarouselHidden: () => dispatch(toggleCarouselHidden())
})

export default withRouter(connect(msp, mdp)(PicsCarousel))