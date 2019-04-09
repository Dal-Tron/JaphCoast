import Head from 'next/head'
import SectionTwo from '../components/SectionTwo'

const Index = () => (
  <div className="section-container">
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <section className="section-one">
      <div className="content-container content-container-one">
        <div className="titles-container">
          <h1 className="title-one">JaphCoast 2019</h1>
          <div className="arrows" />
        </div>
      </div>
    </section>
    <section className="section-two">
      <SectionTwo />
    </section>
    <section className="section-three">
      <div className="content-container content-container-three">
        <div className="titles-container">
          <h1 className="title-three">JaphCoast 2019</h1>
          <div className="subtitle-three">coming soon</div>
        </div>
      </div>
    </section>
    <section className="lastSection" />
    <style jsx global>{`
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
      .titles-container {
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
        font-size: 3rem;
        color: #c2d2f5;
        font-family: LatoHairLine;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
      }
      .arrows {
        background-image: url(/static/images/arrows.svg);
        height: 56px;
        width: 30px;
        background-repeat: no-repeat;
        margin: 0 auto;
      }
      .section-three {
        background-color: rgba(137, 224, 249, 0.9);
      }
      .title-three {
        font-size: 3rem;
        color: white;
        font-family: LatoHairLine;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
      }
      .subtitle-three {
        font-family: WestburySignature;
        color: white;
        font-size: 8rem;
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
