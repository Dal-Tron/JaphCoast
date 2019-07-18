const SectionThree = () => (
  <section id="info-section" className="section-three">
    <div className="content-container-three">
      <div className="titles-container-three">
        <h1 className="title title-three">Info</h1>
        <div className="subtitle-three">
          <div className="first-letter">If</div> you’ve made it this far,
          there’s a good chance we’ve invited you to our wedding in Mexico!
          There’s also a good chance that you’d love to come, but are unable to
          make it work due to cost or time constraints or any other reason, and
          we understand that and will be sending information out to everyone for
          a Ceremony and Dance we’ll be having at home for those of you that
          can’t make it to Mexico, because we love you all!
        </div>
      </div>
      <div
        className="see-date-container"
        onClick={() => {
          document
            .getElementById('when-section')
            .scrollIntoView({ block: 'end', behavior: 'smooth' })
        }}
      >
        <div className="dolphin" />
        <div className="main-button see-date-button">When & Where</div>
      </div>
    </div>
    <style jsx>{`
      .section-three {
        background-color: rgba(137, 224, 249, 0.9);
      }
      .titles-container-three {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
        left: 0;
        font-family: Pacifico;
        width: 50%;
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
      .see-date-container {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
        right: 0;
        width: 50%;
      }
      .dolphin {
        background-image: url(/static/images/dolphin.svg);
        width: 20rem;
        height: 20rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
      }
      .see-date-button {
        font-family: LatoHairLine;
        text-transform: uppercase;
        color: white;
        font-size: 2rem;
        border: 1px solid white;
        width: 320px;
        margin-left: auto;
        margin-right: auto;
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
