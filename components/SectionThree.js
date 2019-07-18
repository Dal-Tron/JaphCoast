import React from 'react'

import SplitLayout from './shared/SplitLayout'

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
        margin-left: 10rem;
      }
      .subtitle-three {
        font-family: LatoHairLine;
        color: white;
        font-size: 2rem;
        text-align: left;
        padding-left: 10rem;
        letter-spacing: 1px;
        font-weight: 400;
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
      <div className="main-button see-date-button">When & Where</div>
    </div>
    <style jsx>{`
      .dolphin {
        background-image: url(/static/images/dolphin.svg);
        width: 20rem;
        height: 20rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
        margin-top: 4rem;
      }
      .see-date-button {
        color: white;
        width: 320px;
      }
      .see-date-button:hover {
        background-color: #e5f6ff;
        color: rgba(137, 224, 249, 0.9);
      }
    `}</style>
  </React.Fragment>
)

const SectionThree = () => (
  <SplitLayout
    id="info-section"
    backgroundColor="#94e3f9"
    leftElement={leftElement}
    rightElement={rightElement}
  />
)

export default SectionThree