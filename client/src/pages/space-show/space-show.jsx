import React, { useEffect, Fragment } from 'react'
import PicturesGridContainer from '../../components/spaces/pictures_grid_container'
import SpaceInfo from "../../components/spaces/space-info"
import Spinner from '../../components/spinner/spinner'
import PicsCarouselContainer from '../../components/modals/pics_carousel_container'
import ReserveWidget from '../../components/spaces/reserve-widget'

const SpaceShow = ({space, match, fetchSpace, carouselHidden}) => {
    useEffect(() => {
        const { id: spaceId } = match.params
        fetchSpace(spaceId)
    }, [])

    return space ?  (
        <Fragment>
            {carouselHidden ?  null : <PicsCarouselContainer photos={space.spacePhotos} />}
            <div className="space-show">
                <PicturesGridContainer photos={space.spacePhotos}/>
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
        </Fragment>
    ) : (
        <Spinner />
    )
}

export default SpaceShow