const SectionThree = () => (
  <section id="info-section" className="section-three">
    <div className="content-container abs">
      <div className="left-container">
        <div className="left-content-container abs">
          <h1 className="title title-three">Info</h1>
          <div className="subtitle-three">
            <div className="first-letter">If</div> you’ve made it this far,
            there’s a good chance we’ve invited you to our wedding in Mexico!
            There’s also a good chance that you’d love to come, but are unable
            to make it work due to cost or time constraints or any other reason,
            and we understand that and will be sending information out to
            everyone for a Ceremony and Dance we’ll be having at home for those
            of you that can’t make it to Mexico, because we love you all!
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="right-content-container abs">
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
        </div>
      </div>
    </div>
    <style jsx>{`
      .section-three {
        background-color: rgba(137, 224, 249, 0.9);
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
      .right-container {
        float: right;
        width: 50%;
        height: 100%;
        position: relative;
      }
      .right-content-container {
        height: 50%;
        width: 100%;
      }
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
        border-radius: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
      }
      .see-date-button:hover {
        background-color: #e5f6ff;
        color: rgba(137, 224, 249, 0.9);
      }
    `}</style>
  </section>
)

export default SectionThree
