import Head from 'next/head'
import SectionTwo from '../components/SectionTwo'

const Index = () => (
  <div className="section-container">
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        href="https://fonts.googleapis.com/css?family=Cinzel&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Laila&display=swap"
        rel="stylesheet"
      />
    </Head>
    <section className="section-one">
      <div className="content-container content-container-one">
        <div className="titles-container-one">
          <div className="title-one">Raph & Jeff</div>
          <div className="title-two">Mexico 2020</div>
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
          <div className="main-button see-info-button">See Info</div>
        </div>
      </div>
    </section>
    <section id="photo-section" className="section-two">
      <SectionTwo />
    </section>
    <section id="info-section" className="section-three">
      <div className="content-container-three">
        <div className="titles-container-three">
          <h1 className="title-three">Info</h1>
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
    </section>
    <section id="when-section" className="section-four">
      <div className="see-when-container">
        {/* <div className="marival" /> */}
        <div className="cake" />
        <div className="main-button see-marival-button">
          <a>Marival</a>
        </div>
        <div className="marival-details">
          <div className="trip-dates">May 23rd – May 30th, 2020</div>
          <div className="wedding-day-title">Wedding Day</div>
          <div className="trip-dates">May 25th, 2020</div>
        </div>
      </div>
      <div className="content-container-four">
        <div className="titles-container-four">
          <h1 className="title-four">When & Where</h1>
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
    </section>
    <section id="costs-section" className="section-five">
      <div className="see-when-container">
        {/* <div className="marival" /> */}
        <div className="cake" />
        <div className="main-button see-marival-button">
          <a>Marival</a>
        </div>
        <div className="marival-details">
          <div className="trip-dates">May 23rd – May 30th, 2020</div>
          <div className="wedding-day-title">Wedding Day</div>
          <div className="trip-dates">May 25th, 2020</div>
        </div>
      </div>
      <div className="content-container-four">
        <div className="titles-container-four">
          <h1 className="title-four">When & Where</h1>
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
    </section>
    <section className="lastSection" />
    <style jsx global>{`
       {
        /* GENERAL */
      }
      @font-face {
        font-family: WestburySignature;
        src: url('/static/fonts/WestburySignature.otf') format('opentype');
      }
      @font-face {
        font-family: LatoHairLine;
        src: url('/static/fonts/Lato-Hairline.ttf') format('truetype');
      }
      * {
        box-sizing: border-box;
      }
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow: hidden;
        background-color: rgba(137, 224, 249, 1);
      }
      .section-container {
        -ms-scroll-snap-type: mandatory;
        scroll-snap-type: mandatory;
        -ms-scroll-snap-points-y: repeat(100vh);
        scroll-snap-points-y: repeat(100vh);
        -ms-scroll-snap-type: y mandatory;
        scroll-snap-type: y mandatory;
        height: 100vh;
        overflow: scroll;
      }
      section {
        height: 100vh;
        scroll-snap-align: start;
        position: relative;
        text-align: center;
        background-size: cover;
        background-repeat: repeat-none;
        background-position: center center;
      }
      .content-container {
        height: 100%;
      }
      .first-letter {
        font-size: 2.2rem;
        display: inline-block;
        font-family: 'Laila', serif;
        letter-spacing: 0px;
      }
      .main-button {
        font-family: LatoHairLine;
        text-transform: uppercase;
        color: #c2d2f5;
        font-size: 2rem;
        border: 1px solid #c2d2f5;
        width: 220px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
        cursor: pointer;
      }
       {
        /* 
      
      CONTAINER ONE *****************************************************
      
      */
      }
      .titles-container-one {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
        left: 0;
        font-family: Pacifico;
      }
      .section-one {
        background-image: url(/static/images/MainPage.gif);
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
      }
      .see-info-button-container {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 150px;
      }
      .see-info-button:hover {
        background-color: #c2d2f5;
        color: rgba(110, 104, 148, 1);
      }
       {
        /* 
      
      CONTAINER TWO *****************************************************
      
      */
      }
      .title-two {
        font-size: 3rem;
        color: #c2d2f5;
        font-family: LatoHairLine;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
      }

       {
        /* 
      
      CONTAINER THREE *****************************************************
      
      */
      }
      .section-three {
        background-color: rgba(137, 224, 249, 0.9);
      }
      .titles-container-three {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
        left: 0;
        font-family: Pacifico;
        width: 50%;
      }
      .title-three {
        font-size: 3rem;
        color: white;
        font-family: LatoHairLine;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
        text-align: left;
        margin-left: 8rem;
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
        /* 
      
      CONTAINER FOUR *****************************************************
      
      */
      }
      .section-four {
        background-color: #e4c39a;
      }
      .titles-container-four {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
        right: 0;
        font-family: Pacifico;
        width: 50%;
      }
      .title-four {
        font-size: 3rem;
        color: white;
        font-family: LatoHairLine;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
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
      .section-five {
        background: rgba(110, 104, 148, 0.9);
      }
      .lastSection {
        display: none;
      }
      @media (max-width: 700px) {
        .lastSection {
          display: block !important;
        }
      }
    `}</style>
  </div>
)

export default Index
