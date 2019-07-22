import React, { Component } from 'react'
import Head from 'next/head'
import IntroSection from '../components/IntroSection'
import PhotoSection from '../components/PhotoSection'
import { InfoSection } from '../components/InfoSection'
import { InfoSectionMobile } from '../components/mobile/InfoSectionMobile'
import { WhenSection } from '../components/WhenSection'
import { WhenSectionMobile } from '../components/mobile/WhenSectionMobile'
import { CostsSection } from '../components/CostsSection'
import { CostsSectionMobile } from '../components/mobile/CostsSectionMobile'

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
    const { height } = this.state
    return (
      <div className="section-container">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <IntroSection height={height} />
        <PhotoSection height={height} />
        {this.state.width < 650 ? (
          <InfoSectionMobile height={height} />
        ) : (
          <InfoSection height={height} />
        )}
        {this.state.width < 650 ? (
          <WhenSectionMobile height={height + 100} />
        ) : (
          <WhenSection height={height} />
        )}
        {this.state.width < 650 ? (
          <CostsSectionMobile height={height} />
        ) : (
          <CostsSection height={height} />
        )}
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
            overflow-y: scroll;
            font-size: 62.5%;
            background-color: #7c769e;
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
          .section {
            position: relative;
            text-align: center;
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
          .mobile-title {
            color: white;
            text-align: center;
            font-size: 2.6rem;
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
          .clip-path-1 {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%);
            clip-path: polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%);
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
