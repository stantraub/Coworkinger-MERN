import React, { useEffect } from 'react'
import SpaceItem from './space_item.jsx'
import Spinner from "../spinner/spinner";


const SpacesWrapper = (props) => {
    useEffect(() => {
    props.fetchSpaces();
    }, []);

    if (props.spaces.length === 0) {
      return <Spinner />;
    } else {
        const { spaces } = props;

        return (
            <div className="spaces">
                <div className="spaces__header">
                Spaces in San Francisco
                </div>
                {spaces.map(({ _id, ...otherSpaceProps }) => {
                return <SpaceItem key={_id} spaceId={_id} {...otherSpaceProps} />;
                })}
            </div>
        );
    }
}

export default SpacesWrapper