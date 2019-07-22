const IntroSection = props => (
  <div className="section section-one" style={{ height: props.height }}>
    <div className="content-container content-container-one">
      <div className="abs">
        <div className="title-one">Raph & Jeff</div>
        <div className="title subtitle-one">Mexico 2020</div>
      </div>
      <div
        className="see-info-button-container"
        onClick={() => {
          document
            .getElementById('photo-section')
            .scrollIntoView({ block: 'end', behavior: 'smooth' })
          setTimeout(() => {
            document
              .getElementById('info-section')
              .scrollIntoView({ block: 'end', behavior: 'smooth' })
          }, 1000)
        }}
      >
        <div className="main-button">See Info</div>
      </div>
    </div>
    <style jsx>{`
      .section-one {
        background-image: url(/static/images/MainPage.gif);
        background-size: cover;
        background-repeat: repeat-none;
        background-position: center center;
      }
      .content-container-one {
        background: rgba(110, 104, 148, 0.9);
      }
      .title-one {
        font-size: 5rem;
        color: #c2d2f5;
        font-family: LatoHairLine;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
        padding-bottom: 2rem;
        min-width: 21rem;
      }
      .subtitle-one {
        color: #c2d2f5;
        font-size: 3rem !important;
      }
      .title {
        font-size: 3rem;
        font-family: LatoHairLine;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
        padding-bottom: 2rem;
      }
      .see-info-button-container {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 150px;
      }
      @media (max-width: 700px) {
        .title-one {
          font-size: 3rem;
        }
        .title {
          font-size: 1rem;
        }
        .see-info-button-container {
          bottom: 4rem;
        }
      }
    `}</style>
  </div>
)

export default IntroSection
