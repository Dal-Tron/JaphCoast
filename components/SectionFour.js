import React from 'react'

import SplitLayout from './shared/SplitLayout'
import MobileLayout from './shared/MobileLayout'

const leftElement = (
  <React.Fragment>
    <div className="cake" />
    <div className="main-button secondary-button see-marival-button">
      <a href="https://www.marival.com/" target="_blank">
        Marival
      </a>
    </div>
    <div className="marival-details">
      <div className="trip-dates">May 23rd – May 30th, 2020</div>
      <div className="wedding-day-title">Wedding Day</div>
      <div className="trip-dates">May 25th, 2020</div>
    </div>
    <style jsx>{`
      .cake {
        background-image: url(/static/images/cake.svg);
        width: 20rem;
        height: 20rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
        margin-top: 2rem;
      }
      .see-marival-button {
        margin-top: 1rem;
      }
      .see-marival-button:hover {
        background-color: #e5f6ff;
        color: #e4c39a;
      }
      .marival-details {
        font-family: LatoHairLine;
        color: white;
        font-size: 2rem;
        text-align: center;
        letter-spacing: 1px;
      }
      .trip-dates {
        margin-top: 1rem;
      }
      .wedding-day-title {
        font-family: WestburySignature;
        margin-top: 1rem;
        font-size: 4rem;
      }
    `}</style>
  </React.Fragment>
)

const rightElement = (
  <React.Fragment>
    <h1 className="title title-four">When & Where</h1>
    <div className="subtitle-four">
      <div className="first-letter">For</div> those of you that are able to
      come, we have organized our wedding at the Marival in Nuevo Vallarta, just
      outside of Puerto Vallarta.
      <p>
        The package we’ve organized costs just under{' '}
        <div className="first-letter">$1600</div>, and includes:
        <div dir="rtl">
          <ul>
            <li>all inclusive 7 day stay</li>
            <li>airfare</li>
            <li>airport shuttles</li>
            <li>one checked bag</li>
          </ul>
        </div>
      </p>
      Check out our detailed breakdown of the costs involved, as well as deposit
      amounts and payment dates.
      <div
        className="see-costs-container"
        onClick={() => {
          document
            .getElementById('costs-section')
            .scrollIntoView({ block: 'end', behavior: 'smooth' })
        }}
      >
        <div className="main-button see-costs-button">Costs</div>
      </div>
    </div>
    <style jsx>{`
      .title-four {
        color: white;
        text-align: right;
        padding-right: 10rem;
      }
      .subtitle-four {
        font-family: LatoHairLine;
        color: white;
        font-size: 2rem;
        text-align: right;
        padding-right: 10rem;
        letter-spacing: 1px;
        font-weight: 400;
      }
      .see-costs-button {
        color: white;
        font-size: 2rem;
        border: 1px solid white;
        margin-top: 2rem;
      }
      .see-costs-button:hover {
        background-color: #e5f6ff;
        color: #e4c39a;
      }
      @media (max-width: 1200px) {
        .title-four {
          padding-right: 2rem;
        }
        .subtitle-four {
          padding-right: 2rem;
          font-size: 1.6rem;
        }
      }
    `}</style>
  </React.Fragment>
)

export const SectionFour = () => (
  <SplitLayout
    id="when-section"
    backgroundColor="#caa16e"
    leftElement={leftElement}
    rightElement={rightElement}
  />
)

const mobileContent = (
  <div className="mobile-section-four-wrapper">
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
            .scrollIntoView({ block: 'end', behavior: 'smooth' })
        }}
      >
        <div className="main-button secondary-button see-details-button">
          See Details
        </div>
      </div>
    </div>
    <style jsx>{`
      .mobile-section-four-wrapper {
        margin-left: auto;
        margin-right: auto;
        padding-top: 2rem;
      }
      .mobile-cake {
        background-image: url(/static/images/cake.svg);
        width: 8rem;
        height: 8rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
      }
      .mobile-title {
        color: white;
        text-align: center;
        font-size: 1.6rem;
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
        margin-top: 2rem;
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
        margin-bottom: 3rem;
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
      .see-details-button {
        margin-top: 1rem;
      }
      .see-details-button:hover {
        background-color: #e5f6ff;
        color: #caa16e;
      }
    `}</style>
  </div>
)

export const MobileSectionFour = () => (
  <MobileLayout
    id="when-section"
    backgroundColor="#caa16e"
    content={mobileContent}
  />
)
