import React from 'react'

const ReserveWidget = ({cost, website, email, phone}) => (
    <section className="reserve-widget flex-col">
        <div className="reserve-widget__container">
            <div className="reserve-widget__wrapper">
                <span className="reserve-widget__cost">${cost} </span>
                <span className="reserve-widget__per-month">per desk / month</span>
            </div>
            <div className="contact-info">
                <div className="contact-info__item-top">
                    <a className="contact-info__website-link" href={website}>{website}</a>
                </div>
                <div className="contact-info__item">{email}</div>
                <div className="contact-info__item">{phone}</div>
            </div>
        </div>
    </section>
)

export default ReserveWidget