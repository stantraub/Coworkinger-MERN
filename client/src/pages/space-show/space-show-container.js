import { connect } from "react-redux";
import SpaceShow from "./space-show";
import { fetchSpace } from "../../actions/space_actions";

const msp = (state, ownProps) => ({
  space: state.entities.spaces[ownProps.match.params.id],
  carouselHidden: state.ui.carousel.hidden,
  amenitiesHidden: state.ui.amenities.hidden
})

const mdp = (dispatch) => ({
  fetchSpace: (id) => dispatch(fetchSpace(id)),
});

export default connect(msp, mdp)(SpaceShow)
