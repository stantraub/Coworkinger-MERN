import React, { useEffect } from 'react'
import PicturesGrid from '../../components/spaces/pictures-grid.jsx'
import Spinner from '../../components/spinner/spinner'
import ReviewsContainer from '../../components/reviews/reviews_container'

const SpaceShow = (props) => {
    useEffect(() => {
        const { id: spaceId } = props.match.params
        props.fetchSpace(spaceId)
    }, [])

    return props.space ?  (
        <div className="space-show">
            <PicturesGrid photos={props.space.spacePhotos}/>
            <ReviewsContainer />
        </div>
    ) : (
        <Spinner />
    )
}

export default SpaceShow