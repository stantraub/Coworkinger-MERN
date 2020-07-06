import { connect } from 'react-redux'
import { toggleCarouselHidden } from '../../actions/carousel_actions'
import PicturesGrid from './pictures-grid'

const mdp = (dispatch) => ({
    toggleCarouselHidden: () => dispatch(toggleCarouselHidden())
})

export default connect(null, mdp)(PicturesGrid)