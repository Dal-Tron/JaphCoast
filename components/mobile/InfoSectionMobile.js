import React from 'react'

import MobileLayout from '../layout/MobileLayout'

const mobileContent = (
  <div className="info-section">
    <div className="mobile-dolphin" />
    <div className="title title-2 info-title">Info</div>
    <div className="info-text title-left">
      <div className="first-letter">If</div> you’ve made it this far, there’s a
      good chance we’ve invited you to our wedding in Mexico! There’s also a
      good chance that you’d love to come, but are unable to make it work due to
      cost or time constraints or any other reason, and we understand that and
      will be sending information out to everyone for a Ceremony and Dance we’ll
      be having at home for those of you that can’t make it to Mexico, because
      we love you all!
    </div>
    <div
      className="see-when-button-container"
      onClick={() => {
        document
          .getElementById('when-section')
          .scrollIntoView({ block: 'start', behavior: 'smooth' })
      }}
    >
      <div className="button button-1 see-when-button">When & Where</div>
    </div>
    <style jsx>{`
      .mobile-dolphin {
        background-image: url(/static/images/dolphin.svg);
        width: 12rem;
        height: 12rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
        margin-top: 6rem;
      }
      .info-title {
        margin-bottom: 2rem;
      }
      .info-text {
        letter-spacing: 1px;
        font-weight: 800;
        color: white;
        font-size: 2rem;
      }
      .see-when-button-container {
        height: 15rem;
      }
      .see-when-button {
        margin-top: 4rem;
        margin-bottom: 4rem;
      }
    `}</style>
  </div>
)

export const InfoSectionMobile = props => (
  <MobileLayout
    id="info-section"
    style={{ backgroundColor: '#5189BC', zIndex: 2 }}
    content={mobileContent}
    className="section clip-path-1"
  />
)
