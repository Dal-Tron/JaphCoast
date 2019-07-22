import MobileLayout from '../layout/MobileLayout'

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
      <div className="main-button secondary-button see-when-button">
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
      .see-when-button {
        margin-top: 4rem;
      }
      .see-when-button:hover {
        background-color: #e5f6ff;
        color: #44bee0;
      }
    `}</style>
  </div>
)

export const InfoSectionMobile = props => (
  <MobileLayout
    id="info-section"
    backgroundColor="#44BEE0"
    content={mobileContent}
    height={props.height}
  />
)
