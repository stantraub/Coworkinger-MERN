import React, { useState } from 'react'

const PicsCarousel = ({photos, toggleCarouselHidden}) => {
    const [currentIdx, setCurrentIdx] = useState(0)

    function changePic(length, change) {
        if (currentIdx === 0 && change === -1) {
            setCurrentIdx(length -1)
        } else {
            setCurrentIdx((currentIdx + change) % length)
        }
    }
  
    return (
        <div className="carousel__background">
            <div className="carousel flex-row">
                <div className="carousel__slideshow flex-row">
                    <div className="carousel__arrow-left align-arrow">
                        <img onClick={() => changePic(photos.length, -1)} className="carousel__arrows" src="https://coworking-dev.s3-us-west-1.amazonaws.com/24095038_white-arrow-transparent-png-1-min.png" alt="left arrow"/>
                    </div>
                    <div className="carousel__main-pic-container">
                        <img className="carousel__main-pic-img" src={photos[currentIdx]} alt="main"/>
                    </div>
                    <div className="carousel__arrow-right align-arrow">
                        <img onClick={() => changePic(photos.length, 1)} className="carousel__arrows" src="https://i.ya-webdesign.com/images/white-arrow-transparent-png-1.png" alt="right arrow"/>
                    </div>
                </div>
                <div className="carousel__sidebar flex-col">
                    <div onClick={() => toggleCarouselHidden()} className="carousel__x-button">
                        <img className="carousel__x-img" src="https://narrative.so/static/close-icon-white-4db08d3b63ac402ff1818b58026fd284.png" alt="X button"/>
                    </div>
                    <div className="carousel__pic-count">
                        {currentIdx + 1} / {photos.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PicsCarousel