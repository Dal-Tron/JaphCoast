import React from 'react'

import SplitLayout from './shared/SplitLayout'
import MobileLayout from './shared/MobileLayout'

const leftElement = (
  <React.Fragment>
    <h1 className="title title-three">Info</h1>
    <div className="subtitle-three">
      <div className="first-letter">If</div> you’ve made it this far, there’s a
      good chance we’ve invited you to our wedding in Mexico! There’s also a
      good chance that you’d love to come, but are unable to make it work due to
      cost or time constraints or any other reason, and we understand that and
      will be sending information out to everyone for a Ceremony and Dance we’ll
      be having at home for those of you that can’t make it to Mexico, because
      we love you all!
    </div>
    <style jsx>{`
      .title-three {
        color: white;
        text-align: left;
        padding-left: 10rem;
      }
      .subtitle-three {
        font-family: LatoHairLine;
        color: white;
        font-size: 2.4rem;
        text-align: left;
        padding-left: 10rem;
        letter-spacing: 1px;
        font-weight: 400;
      }
      @media (max-width: 1200px) {
        .title-three {
          padding-left: 2rem;
        }
        .subtitle-three {
          padding-left: 2rem;
        }
      }
      @media (max-width: 950px) {
        .title-three {
          padding-left: 5rem;
        }
        .subtitle-three: {
          padding-left: 4rem;
        }
      }
    `}</style>
  </React.Fragment>
)

const rightElement = (
  <React.Fragment>
    <div className="dolphin" />
    <div
      className="see-date-button-container"
      onClick={() => {
        document
          .getElementById('when-section')
          .scrollIntoView({ block: 'end', behavior: 'smooth' })
      }}
    >
      <div className="main-button secondary-button see-date-button">
        When & Where
      </div>
    </div>
    <style jsx>{`
      .dolphin {
        background-image: url(/static/images/dolphin.svg);
        width: 30rem;
        height: 30rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
        margin-top: 4rem;
      }
      .see-date-button {
        width: 320px;
      }
      .see-date-button:hover {
        background-color: #e5f6ff;
        color: #44bee0;
      }
    `}</style>
  </React.Fragment>
)

export const SectionThree = () => (
  <React.Fragment>
    <SplitLayout
      id="info-section"
      backgroundColor="#44BEE0"
      leftElement={leftElement}
      rightElement={rightElement}
    />
  </React.Fragment>
)

const mobileContent = (
  <div className="wrapper">
    <div className="mobile-dolphin" />
    <div className="title mobile-title">Info</div>
    <div className="mobile-subtitle">
      <div className="first-letter">If</div> you’ve made it this far, there’s a
      good chance we’ve invited you to our wedding in Mexico! There’s also a
      good chance that you’d love to come, but are unable to make it work due to
      cost or time constraints or any other reason, and we understand that and
      will be sending information out to everyone for a Ceremony and Dance we’ll
      be having at home for those of you that can’t make it to Mexico, because
      we love you all!
    </div>
    <div
      className="see-date-button-container"
      onClick={() => {
        document
          .getElementById('when-section')
          .scrollIntoView({ block: 'end', behavior: 'smooth' })
      }}
    >
      <div className="main-mobile-button secondary-button see-date-button">
        When & Where
      </div>
    </div>
    <style jsx>{`
      .mobile-title {
        color: white;
        text-align: center;
      }
      .mobile-subtitle {
        font-family: LatoHairLine;
        color: white;
        font-size: 1.4rem;
        text-align: center;
        letter-spacing: 1px;
        font-weight: 400;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      .mobile-dolphin {
        background-image: url(/static/images/dolphin.svg);
        width: 12rem;
        height: 12rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
        margin-top: 20%;
      }
      .main-mobile-button {
        font-family: LatoHairLine;
        text-transform: uppercase;
        color: #44bee0;
        font-size: 1.2rem;
        width: 220px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        text-align: center;
        background: white;
      }
      .see-date-button {
        margin-top: 4rem;
      }
    `}</style>
  </div>
)

export const MobileSectionThree = () => (
  <MobileLayout
    id="info-section"
    backgroundColor="#44BEE0"
    content={mobileContent}
  />
)
