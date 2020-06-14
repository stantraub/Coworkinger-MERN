import { connect } from 'react-redux'
import { toggleMenuHidden } from '../../actions/menu_actions'
import Menu from './menu_icon'

const mdp = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden())
})

export default connect(null, mdp)(Menu)