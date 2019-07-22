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
    const { height, width } = this.state
    const showMobile = width < 700
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
        {showMobile ? <InfoSectionMobile /> : <InfoSection />}
        {showMobile ? <WhenSectionMobile /> : <WhenSection />}
        {showMobile ? <CostsSectionMobile /> : <CostsSection />}
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
            font-family: LatoLight;
            src: url('/static/fonts/Lato-Light.ttf') format('truetype');
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
            font-family: LatoLight, serif;
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
          .align-left {
            text-align: left;
          }
          .section {
            position: relative;
            text-align: center;
          }
          .content-container {
            height: 100%;
          }
          .title {
            text-transform: uppercase;
            font-weight: 400;
            letter-spacing: 3px;
            min-width: 35rem;
          }
          .title-1 {
            font-size: 5rem;
            color: #c2d2f5;
          }
          .title-2 {
            font-size: 4rem;
            color: white;
          }
          .title-3 {
            color: white;
            font-size: 3rem;
          }
          .title-4 {
            color: white;
            font-size: 2rem;
          }
          .title-5 {
            color: white;
            font-size: 1rem;
          }
          .title-left {
            text-align: left;
          }
          .subtitle {
            letter-spacing: 1px;
            font-weight: 800;
          }
          .subtitle-1 {
            color: #c2d2f5;
            font-size: 2.4rem;
          }
          .subtitle-2 {
            color: white;
            font-size: 2.4rem;
          }
          .subtitle-3 {
            color: white;
            font-size: 1.8rem;
          }
          .first-letter {
            font-size: 3rem;
            display: inline-block;
            font-family: Laila, serif;
            letter-spacing: 0px;
          }
          .font-westbury {
            font-family: WestburySignature;
          }
          .button {
            text-transform: uppercase;
            margin-left: auto;
            margin-right: auto;
            border-radius: 50px;
            cursor: pointer;
            text-align: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
            width: 20rem;
          }
          .button-1 {
            color: #c2d2f5;
            font-size: 2rem;
            border: 1px solid #c2d2f5;
          }
          .button-2 {
            color: white;
            font-size: 2rem;
            border: 1px solid white;
          }
          .lastSection {
            display: none;
          }
          .clip-path-1 {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%);
            clip-path: polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%);
          }
          @media (max-width: 950px) {
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
