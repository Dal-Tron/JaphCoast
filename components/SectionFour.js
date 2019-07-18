const SectionFour = () => (
  <section id="when-section" className="section-four">
    <div className="content-container abs">
      <div className="left-container">
        <div className="left-content-container abs">
          <div className="cake" />
          <div className="main-button see-marival-button">
            <a href="https://www.marival.com/" target="_blank">
              Marival
            </a>
          </div>
          <div className="marival-details">
            <div className="trip-dates">May 23rd – May 30th, 2020</div>
            <div className="wedding-day-title">Wedding Day</div>
            <div className="trip-dates">May 25th, 2020</div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="right-content-container abs">
          <h1 className="title title-four">When & Where</h1>
          <div className="subtitle-four">
            <div className="first-letter">For</div> those of you that are able
            to come, we have organized our wedding at the Marival in Nuevo
            Vallarta, just outside of Puerto Vallarta.
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
            Check out our detailed breakdown of the costs involved, as well as
            deposit amounts and payment dates.
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
        </div>
      </div>
    </div>
    <style jsx>{`
      .section-four {
        background-color: #caa16e;
      }
      .content-container {
        width: 100rem;
        max-height: 80rem;
      }
      .left-container {
        float: left;
        width: 50%;
        height: 100%;
        position: relative;
      }
      .left-content-container {
        height: 50%;
        width: 100%;
      }
      .right-container {
        float: right;
        width: 50%;
        height: 100%;
        position: relative;
      }
      .right-content-container {
        height: 70%;
        width: 100%;
      }
      .title-four {
        color: white;
        text-align: right;
        padding-right: 10rem;
      }
      .see-marival-button {
        color: white;
        font-size: 2rem;
        border: 1px solid white;
        margin-top: 1rem;
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
      .wedding-day-title {
        font-family: WestburySignature;
        margin-top: 1rem;
        font-size: 4rem;
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
    `}</style>
  </section>
)

export default SectionFour
