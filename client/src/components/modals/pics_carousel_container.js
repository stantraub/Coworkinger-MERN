import { connect} from 'react-redux'
import PicsCarousel from './pics_carousel'
import { toggleCarouselHidden } from '../../actions/carousel_actions'

const mdp = dispatch => ({
    toggleCarouselHidden: () => dispatch(toggleCarouselHidden())
})

export default connect(null, mdp)(PicsCarousel)