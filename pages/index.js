import Head from 'next/head'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'

const Index = () => (
  <div className="section-container">
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
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
      @font-face {
        font-family: Laila;
        src: url('/static/fonts/Laila-Regular.ttf') format('truetype');
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
      a {
        text-decoration: none;
        color: inherit;
      }
      .abs {
        position: absolute;
        top: 50%;
        text-align: center;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
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
      .title {
        font-size: 3rem;
        color: #c2d2f5;
        font-family: LatoHairLine;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
      }
      .first-letter {
        font-size: 2.2rem;
        display: inline-block;
        font-family: Laila, serif;
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
