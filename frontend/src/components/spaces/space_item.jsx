import React from 'react';

class SpaceItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default SpaceItem