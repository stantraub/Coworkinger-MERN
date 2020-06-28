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
            <div className="space-info-wrapper">
                <div className="space-show-info">
                {/* 
                <div className="space-summary">
                        <span className="space-show-name">{space.name}</span>
                        <div className="space-show-city">{space.city}</div>
                    </div>
                    <div className="description-wrapper">
                        <p className="space-show-description">
                            {space.description}
                        </p>
                    </div>
                    <div className="amenities-wrapper">
                        <div className="amenities-header">Amenities</div>
                        <div className="amenities-div">
                            {space.amenityCategories ? includedAmenities(space.amenityCategories) : `${space.name} has not listed any amenities yet`}
                        </div>
                        {space.amenityCategories ? otherAmenities(space.amenityCategories) : null}
                    </div>
                */}
                    <ReviewsContainer />
                </div>
                <div className="reserve-widget-wrapper">
                {/* 
                    <div className="reserve-widget">
                        <span className="reserve-cost">${space.cost} </span>
                        <span className="reserve-per-month">per desk / month</span>
                    </div>
                    <div className="contact-info-wrapper">
                        <div className="contact-item-top">
                            <a className="space-website-link" href={space.website}>{space.website}</a>
                        </div>
                        <div className="contact-item">{space.email}</div>
                        <div className="contact-item">{space.phone}</div>
                    </div>
                */}
 
                </div>
            </div>
        </div>
    ) : (
        <Spinner />
    )
}

export default SpaceShow