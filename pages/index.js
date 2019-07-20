import React, { Component } from 'react'
import Head from 'next/head'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import { SectionThree, MobileSectionThree } from '../components/SectionThree'
import { SectionFour, MobileSectionFour } from '../components/SectionFour'
import { SectionFive, MobileSectionFive } from '../components/SectionFive'

class Index extends Component {
  state = {
    width: 0,
    height: 0,
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  componentDidMount = () => {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    return (
      <div className="section-container">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {/* <SectionOne /> */}
        {/* <SectionTwo /> */}
        {/* {this.state.width < 650 ? <MobileSectionThree /> : <SectionThree />} */}
        {/* {this.state.width < 650 ? <MobileSectionFour /> : <SectionFour />} */}
        {this.state.width < 650 ? <MobileSectionFive /> : <SectionFive />}
        <style jsx global>{`
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
            font-size: 62.5%;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          .abs {
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
          .section-container {
            -ms-scroll-snap-type: mandatory;
            scroll-snap-type: mandatory;
            -ms-scroll-snap-points-y: repeat(100vh);
            scroll-snap-points-y: repeat(100vh);
            -ms-scroll-snap-type: y mandatory;
            scroll-snap-type: y mandatory;
            overflow: scroll;
            height: 100vh;
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
          .first-letter-mobile {
            font-size: 1.2rem;
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
            text-align: center;
          }
          .main-button:hover {
            background-color: #c2d2f5;
            color: rgba(110, 104, 148, 1);
          }
          .secondary-button {
            color: white;
            border: 1px solid white;
          }
          .lastSection {
            display: none;
          }
          @media (max-width: 700px) {
            .main-button {
              font-size: 1rem;
              width: 10rem;
            }
            .lastSection {
              display: block !important;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Index
