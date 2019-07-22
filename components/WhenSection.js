import React from 'react'

import SplitLayout from './layout/SplitLayout'

const leftElement = (
  <React.Fragment>
    <div className="cake" />
    <div className="button button-2 see-marival-button">
      <a href="https://www.marival.com/" target="_blank">
        Marival
      </a>
    </div>
    <div className="marival-details">
      <div className="trip-dates">May 23rd – May 30th, 2020</div>
      <div className="wedding-day-title">Wedding Day</div>
      <div className="trip-dates wedding-date">May 25th, 2020</div>
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
        font-size: 2.4rem;
        text-align: center;
        letter-spacing: 1px;
        font-weight: 800;
      }
      .trip-dates {
        margin-top: 1rem;
      }
      .wedding-day-title {
        font-family: WestburySignature;
        margin-top: 1rem;
        font-size: 4rem;
        color: white;
      }
      .wedding-day {
        color: white;
        weight: 800;
      }
    `}</style>
  </React.Fragment>
)

const rightElement = (
  <React.Fragment>
    <div className="title title-2 when-title">When & Where</div>
    <div className="subtitle-3 when-details">
      <div className="first-letter">For</div> those of you that are able to
      come, we have organized our wedding at the Marival in Nuevo Vallarta, just
      outside of Puerto Vallarta.
      <div>
        The package we’ve organized costs just under
        <div className="first-letter">$1600</div>, and includes:
        <div dir="rtl">
          <ul>
            <li>all inclusive 7 day stay</li>
            <li>airfare</li>
            <li>airport shuttles</li>
            <li>one checked bag</li>
          </ul>
        </div>
      </div>
      Check out our detailed breakdown of the costs involved, as well as deposit
      amounts and payment dates.
      <div
        className="see-costs-container"
        onClick={() => {
          document
            .getElementById('costs-section')
            .scrollIntoView({ block: 'start', behavior: 'smooth' })
        }}
      >
        <div className="button button-2 see-costs-button">Costs</div>
      </div>
    </div>
    <style jsx>{`
      .when-title {
        text-align: right;
        margin-left: -2rem;
      }
      .when-details {
        text-align: right;
      }
      .see-costs-button {
        margin-top: 2rem;
      }
      .see-costs-button:hover {
        background-color: #e5f6ff;
        color: #e4c39a;
      }
    `}</style>
  </React.Fragment>
)

export const WhenSection = props => (
  <SplitLayout
    id="when-section"
    backgroundColor="#caa16e"
    leftElement={leftElement}
    rightElement={rightElement}
  />
)
