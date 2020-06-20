import React from 'react'

import './edit-photo.css'

const EditPhoto = (props) => {
    let { profilePic, username, id } = props.user

    async function handleFile(e) {
        let values = {
            file: e.target.files[0],
            username,
            id
        }

        await props.updateProfilePic(values)

    }

    function renderImage(photo) {
        let domainName = 'https://coworking-dev.s3-us-west-1.amazonaws.com/'
        return (
            <img 
            className="current-photo"
            src={domainName + photo}
            alt="profile"
            />
        )
    }

    return (
        <div className="edit-photo-container">
            <h1>Profile Photos</h1>     
            <div className="profile-photo-container">
                <div className="panel-header">
                    <div className="edit-profile-section-heading">Profile Photo</div>
                </div>
                <div className="panel-body-photos-section">
                    <div className="current-photo-container">
                    {renderImage(profilePic)}
                    </div>
                    <div className="edit-profile-pic-section">
                        <p className="profile-photo-requirements">
                            A profile photo that shows your face can help other space owners and tenants get to know you. Coworkinger requires all space owners to have a profile photo. We don’t require tenants to have a profile photo, but space owners can. If you’re a tenant, even
                            if a space owner requires you to have a photo, they won’t be able to see it until your booking is confirmed.
                        </p>
                        <div className="edit-photo-label">
                            <label htmlFor="file">Upload a file from your computer</label>
                            <input 
                            type="file" 
                            className="edit-photo-input"
                            accept="image/*" 
                            onChange={handleFile}
                            id="file" 
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPhoto