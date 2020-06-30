import React, { useEffect } from 'react'
import PicturesGrid from '../../components/spaces/pictures-grid.jsx'
import SpaceInfo from "../../components/spaces/space-info"
import Spinner from '../../components/spinner/spinner'
import ReserveWidget from '../../components/spaces/reserve-widget'

const SpaceShow = ({space, match, fetchSpace}) => {
    useEffect(() => {
        const { id: spaceId } = match.params
        fetchSpace(spaceId)
    }, [])

    return space ?  (
        <div className="space-show">
            <PicturesGrid photos={space.spacePhotos}/>
            <div className="space-show__info-wrapper flex-row">
                <SpaceInfo 
                    name={space.name} 
                    city={space.city}
                    description={space.description}
                    amenityCategories={space.amenityCategories}
                />
                <ReserveWidget 
                    cost={space.cost}
                    website={space.website}
                    email={space.email}
                    phone={space.phone}
                />
            </div>
        </div>
    ) : (
        <Spinner />
    )
}

export default SpaceShow