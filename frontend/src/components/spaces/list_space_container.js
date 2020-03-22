import { connect } from 'react-redux';
import { createSpace } from '../../actions/space_actions';
import ListSpace from './list_space';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createSpace: data => dispatch(createSpace(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSpace);
