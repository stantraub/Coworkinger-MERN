import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleAmenitiesHidden } from '../../actions/amenities_actions'
import Amenities from './amenities_modal'

const msp = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const space = state.entities.spaces[id];
  return {
    amenityCategories: space.amenityCategories,
  };
};

const mdp = dispatch => ({
    toggleAmenitiesHidden: () => dispatch(toggleAmenitiesHidden())
})

export default withRouter(connect(msp, mdp)(Amenities))