import React from 'react'

import SplitLayout from './layout/SplitLayout'

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
        font-weight: 800;
      }
      @media (max-width: 1200px) {
        .title-three {
          padding-left: 2rem;
        }
        .subtitle-three {
          padding-left: 2rem;
          font-size: 1.8rem;
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

export const InfoSection = props => (
  <React.Fragment>
    <SplitLayout
      id="info-section"
      backgroundColor="#44BEE0"
      leftElement={leftElement}
      rightElement={rightElement}
      height={props.height}
    />
  </React.Fragment>
)
