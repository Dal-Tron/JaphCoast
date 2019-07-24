import React from 'react'

import MobileLayout from '../layout/MobileLayout'

const mobileContent = (
  <React.Fragment>
    <div className="mobile-cake" />
    <div className="title title-2">When & Where</div>
    <div>
      <div className="title-3">May 23rd – May 30th, 2020</div>
      <div className="title-3 font-westbury wedding-day-title">Wedding Day</div>
      <div className="title-3">May 25th, 2020</div>
    </div>
    <div className="subtitle-3 wedding-details-container">
      For those of you that are able to come, we have organized...
      <div className="marival-title-container">
        <div className="marival-title">Marival</div>
        <div className="marival-subtitle">Nuevo Vallarta</div>
        <div className="marival-subtitle">Mexico</div>
      </div>
      <div className="images-and-bullets-container">
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
            </ul>
          </div>
        </div>
      </div>
      <div
        className="see-costs-button-container"
        onClick={() => {
          document
            .getElementById('costs-section')
            .scrollIntoView({ block: 'start', behavior: 'smooth' })
        }}
      >
        <div className="button button-2 see-costs-button">See Details</div>
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
      .wedding-day-title {
        margin-top: 1rem;
        font-size: 4rem;
      }
      .wedding-details-container {
        margin-top: 1.4rem;
      }
      .marival-title-container {
        margin-top: 1rem;
      }
      .marival-title {
        font-size: 3rem;
      }
      .images-and-bullets-container {
        max-width: 40rem;
        margin-left: auto;
        margin-right: auto;
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
      .bullet-list-container {
        display: inline-block;
        width: 50%;
        float: right;
        text-align: right;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .see-costs-button-container {
        clear: both;
        padding-top: 3rem;
        height: 20rem;
      }
    `}</style>
  </React.Fragment>
)

export const WhenSectionMobile = () => (
  <MobileLayout
    id="when-section"
    style={{
      backgroundColor: '#caa16e',
      zIndex: 1,
      marginTop: '-5rem',
    }}
    content={mobileContent}
    className="section clip-path-1"
  />
)
