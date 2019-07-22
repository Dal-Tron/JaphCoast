import React from 'react'

import MobileLayout from '../layout/MobileLayout'

const mobileContent = (
  <React.Fragment>
    <div className="mobile-cake" />
    <div className="title mobile-title">When & Where</div>
    <div className="marival-details">
      <div className="trip-dates">May 23rd – May 30th, 2020</div>
      <div className="wedding-day-title">Wedding Day</div>
      <div className="trip-dates wedding-day">May 25th, 2020</div>
    </div>
    <div className="subtitle-four">
      For those of you that are able to come, we have organized...
      <div className="marival-title-container">
        <div className="marival-title">Marival</div>
        <div className="marival-subtitle">Nuevo Vallarta</div>
        <div className="marival-subtitle">Mexico</div>
      </div>
      <div className="images-and-bullets">
        <div className="mobile-image-container">
          <a href="https://www.marival.com/" target="_blank">
            <div className="mobile-mexico" />
            <div className="mobile-marival" />
          </a>
        </div>
        <div className="bullet-list-container">
          <div dir="rtl">
            <ul>
              <li>all inclusive</li>
              <li>seven day stay</li>
              <li>airfare</li>
              <li>airport shuttles</li>
              <li>one checked bag</li>
              <li>outside of Puerto Vallarta</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="see-details-button-container"
        onClick={() => {
          document
            .getElementById('costs-section')
            .scrollIntoView({ block: 'start', behavior: 'smooth' })
        }}
      >
        <div className="main-button secondary-button see-details-button">
          See Details
        </div>
      </div>
    </div>
    <style jsx>{`
      .mobile-cake {
        background-image: url(/static/images/cake.svg);
        width: 10rem;
        height: 10rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
        margin-top: 8rem;
      }
      .marival-details {
        font-family: LatoHairLine;
        color: white;
        font-size: 1.4rem;
        text-align: center;
        letter-spacing: 1px;
      }
      .trip-dates {
        margin-top: 1rem;
        font-size: 2rem;
      }
      .wedding-day-title {
        font-family: WestburySignature;
        margin-top: 1rem;
        font-size: 4rem;
      }
      .wedding-day {
        font-size: 2.1rem;
        color: white;
        font-weight: 800;
      }
      .subtitle-four {
        min-width: 30rem;
        font-family: LatoHairLine;
        color: white;
        font-size: 1.6rem;
        text-align: center;
        letter-spacing: 1px;
        font-weight: 400;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 1.5rem;
      }
      .mobile-image-container {
        width: 50%;
        float: left;
      }
      .mobile-mexico {
        background-image: url(/static/images/mexico.png);
        width: 14rem;
        height: 14rem;
        background-size: cover;
        margin-right: auto;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        margin-left: 1rem;
      }
      .mobile-marival {
        background-image: url(/static/images/Marival-small.png);
        width: 9rem;
        height: 9rem;
        background-size: cover;
        margin-left: 5rem;
        margin-right: auto;
        margin-top: -5.5rem;
        margin-bottom: 0.5rem;
      }
      .marival-title-container {
        margin-top: 1rem;
      }
      .marival-title {
        font-size: 2rem;
        font-family: Laila, serif;
        letter-spacing: 0px;
        text-align: center;
      }
      .bullet-list-container {
        display: inline-block;
        width: 50%;
        float: right;
        text-align: right;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .mobile-subtitle {
        font-family: LatoHairLine;
        color: white;
        font-size: 1.1rem;
        text-align: center;
        letter-spacing: 1px;
        font-weight: 400;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      .see-details-button-container {
        clear: both;
      }
      .see-details-button:hover {
        background-color: #e5f6ff;
        color: #caa16e;
      }
    `}</style>
  </React.Fragment>
)

export const WhenSectionMobile = props => (
  <MobileLayout
    id="when-section"
    style={{
      backgroundColor: '#caa16e',
      height: props.height + 100,
      zIndex: 1,
      marginTop: '-5rem',
    }}
    content={mobileContent}
    className="section clip-path-1"
  />
)
