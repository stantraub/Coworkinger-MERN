import React from 'react'
import "./space_index.css"
// import { withRouter } from 'react-router-dom';
import SpaceItem from './space_item';

class Spaces extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spaces: []
        }
    }

    componentDidMount() {
        this.props.fetchSpaces();
    }   

    componentWillReceiveProps(newState) {
        this.setState({ spaces: newState.spaces})
    }

    render() {
        if (this.state.spaces.length === 0) {
            return (
                <div>
                    There are no spaces in this location
                </div>
            )
        }
        return (
            <div>
                <h1>All Spaces</h1>
                {this.state.spaces.map(space => (
                    <SpaceItem 
                        key={space._id}
                        name={space.name}
                    />
                ))}
            </div>
        )
    }
}

export default Spaces
