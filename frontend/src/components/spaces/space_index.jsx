import React, { useEffect } from 'react'
import SpaceItem from './space_item';
import './space_index.css'
// import SpaceMap from '../space_map/space_map';


import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

const Spaces = props => {

    useEffect(() => {
        props.fetchSpaces()
    }, [])

    if (isBrowser) {
        if (props.spaces.length === 0) {
            return <div>There are no spaces in this location</div>;
        } else {
            const { spaces } = props
            return (
                <div className="space-index-main">
                    <div className="spaces-index-spaces-wrapper">
                        <div className="space-index-header">
                            All spaces in San Francisco
            </div>
                        {spaces.map(({ _id, ...otherSpaceProps }) => {
                            return <SpaceItem key={_id} spaceId={_id} {...otherSpaceProps} />;
                        })}
                    </div>
                    <div className="space-index-map">
                      
                    </div>
                </div>
            );
        }
    } else {
        if (props.spaces.length === 0) {
            return <div>There are no spaces in this location</div>;
        } else {
            const { spaces } = props

            return (
                <div className="space-index-main-mobile">
                    <h1 className="space-index-header-mobile">
                        All San Francisco workspaces
              </h1>
                    <div className="spaces-index-wrapper">
                        {spaces.map(({ _id, ...otherSpaceProps }) => {
                            return <SpaceItem key={_id} spaceId={_id} {...otherSpaceProps} />;
                        })}
                    </div>
                </div>
            );
        }
    }
}

export default Spaces
