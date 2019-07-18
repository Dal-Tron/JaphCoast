const SectionFour = () => (
  <section id="when-section" className="section-four">
    <div className="see-when-container">
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
    <div className="content-container-four">
      <div className="titles-container-four abs">
        <h1 className="title title-four">When & Where</h1>
        <div className="subtitle-four">
          <div className="first-letter">For</div> those of you that are able to
          come, we have organized our wedding at the Marival in Nuevo Vallarta,
          just outside of Puerto Vallarta.
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
    <style jsx>{`
      .section-four {
        background-color: #caa16e;
      }
      .titles-container-four {
        width: 100%;
        right: 0;
        font-family: Pacifico;
        width: 50%;
      }
      .title-four {
        color: white;
        text-align: right;
        padding-right: 10rem;
      }
      .see-marival-button {
        font-family: LatoHairLine;
        text-transform: uppercase;
        color: white;
        font-size: 2rem;
        border: 1px solid white;
        border-radius: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        margin-top: 1rem;
        text-align: center;
      }
      .marival-details {
        font-family: LatoHairLine;
        color: white;
        font-size: 2rem;
        text-align: center;
        letter-spacing: 1px;
        font-weight: 400;
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
      .see-when-container {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
        left: 0;
        width: 50%;
      }
      .see-costs-button {
        font-family: LatoHairLine;
        text-transform: uppercase;
        color: white;
        font-size: 2rem;
        border: 1px solid white;
        border-radius: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        margin-top: 2rem;
        text-align: center;
      }
      .see-costs-button:hover {
        background-color: #e5f6ff;
        color: #e4c39a;
      }
    `}</style>
  </section>
)

export default SectionFour
