import { connect } from 'react-redux';
import { createNewSpace } from '../../actions/space_actions';
import ListSpace from './list_space';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewSpace: data => dispatch(createNewSpace(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSpace);
