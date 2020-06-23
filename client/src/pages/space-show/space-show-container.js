import { connect } from "react-redux";
import SpaceShow from "./space-show";
import { fetchSpace } from "../../actions/space_actions";

const msp = (state, ownProps) => ({
    space: state.entities.spaces[ownProps.match.params.id]
})

const mdp = (dispatch) => ({
  fetchSpace: (id) => dispatch(fetchSpace(id)),
});

export default connect(msp, mdp)(SpaceShow)
