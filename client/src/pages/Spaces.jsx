import React from "react";
import SpaceWrapperContainer from "../components/spaces/space_wrapper_container"
import SpaceMapContainer from '../components/spaces/space_map_container'


const Spaces = () => {
  return (
    <div className="space-page flex-row">
      <SpaceWrapperContainer />
      <SpaceMapContainer />
    </div>
  );

};

export default Spaces;
