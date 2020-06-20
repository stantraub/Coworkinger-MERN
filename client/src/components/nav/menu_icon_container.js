import { connect } from 'react-redux'
import { toggleMenuHidden } from '../../actions/menu_actions'
import MenuIcon from './menu_icon'

const msp = state => ({
    hidden: state.ui.menu.hidden
})

const mdp = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden())
})

export default connect(msp, mdp)(MenuIcon)