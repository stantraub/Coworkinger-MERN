import { connect } from 'react-redux'
import SpaceMap from './space_map'

const msp = state => ({
    spaces: Object.values(state.entities.spaces)
})

export default connect(msp, null)(SpaceMap)