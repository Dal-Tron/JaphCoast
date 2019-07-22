const IntroSection = props => (
  <div className="section section-one" style={{ height: props.height }}>
    <div className="content-container content-container-one">
      <div className="abs">
        <div className="title title-1">Raph & Jeff</div>
        <div className="title subtitle-1">Mexico 2020</div>
      </div>
      <div
        className="see-info-button-container"
        onClick={() => {
          document
            .getElementById('photo-section')
            .scrollIntoView({ block: 'start', behavior: 'smooth' })
          setTimeout(() => {
            document
              .getElementById('info-section')
              .scrollIntoView({ block: 'start', behavior: 'smooth' })
          }, 1000)
        }}
      >
        <div className="button button-1">See Info</div>
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
      .see-info-button-container {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 10rem;
      }
      @media (max-width: 950px) {
        .see-info-button-container {
          bottom: 8rem;
        }
      }
    `}</style>
  </div>
)

export default IntroSection
