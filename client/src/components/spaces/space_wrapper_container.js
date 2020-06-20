import { connect } from 'react-redux';
import SpacesWrapper from './spaces_wrapper';
import { fetchSpaces } from '../../actions/space_actions';

const msp = (state) => {
    return {
        spaces: Object.values(state.entities.spaces)
    }
}

const mdp = dispatch => ({
    fetchSpaces: () => dispatch(fetchSpaces())
})

export default connect(msp, mdp)(SpacesWrapper);