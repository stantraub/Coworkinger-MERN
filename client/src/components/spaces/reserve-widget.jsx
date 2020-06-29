import React from 'react'

const ReserveWidget = ({cost, website, email, phone}) => (
    <div className="reserve-widget-wrapper">
        <div className="reserve-widget">
            <span className="reserve-cost">${cost} </span>
            <span className="reserve-per-month">per desk / month</span>
        </div>
        <div className="contact-info-wrapper">
            <div className="contact-item-top">
                <a className="space-website-link" href={website}>{website}</a>
            </div>
            <div className="contact-item">{email}</div>
            <div className="contact-item">{phone}</div>
        </div>
    </div>
)

export default ReserveWidget