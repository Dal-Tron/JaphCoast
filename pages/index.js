import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script type="text/javascript" src="/static/throttle.js" />
      <script type="text/javascript" src="/static/index.js" />
    </Head>
    <div className="container">
      <section className="page">
        <div className="content-wrapper">
          <p className="content-title">JaphCoast Page 1</p>
          <p className="content-subtitle">An amazing page 1.</p>
        </div>
      </section>
      <section className="page">
        <div className="content-wrapper">
          <p className="content-title">JaphCoast Page 2</p>
          <p className="content-subtitle">An amazing page 2.</p>
        </div>
      </section>
      <section className="page">
        <div className="content-wrapper">
          <p className="content-title">JaphCoast Page 3</p>
          <p className="content-subtitle">An amazing page 3</p>
        </div>
      </section>
      <section className="page">
        <div className="content-wrapper">
          <p className="content-title">JaphCoast Page 4</p>
          <p className="content-subtitle">An amazing page 4.</p>
        </div>
      </section>
    </div>
    <style jsx global>{`
      @import url(https://fonts.googleapis.com/css?family=Montserrat);
      html,
      body {
        margin: 0;
        padding: 0;
        height: 101vh;
      }
      .page {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        overflow: hidden;
        will-change: transform;
        backface-visibility: hidden;
        height: 130vh;
        position: fixed;
        width: 100%;
        transform: translateY(30vh);
        transition: all 1.2s cubic-bezier(0.22, 0.44, 0, 1);
      }
      .page:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }
      .page:first-child {
        background-image: url(https://i.postimg.cc/kXq9Qmnj/bgd1.jpg);
        transform: translateY(-15vh);
      }
      .page:first-child .content-wrapper {
        transform: translateY(15vh);
      }
      .page:nth-child(2) {
        background-image: url(https://i.postimg.cc/W14vywqg/photo-1424746219973-8fe3bd07d8e3.jpg);
      }
      .page:nth-child(3) {
        background-image: url(https://i.postimg.cc/TY0xQ41T/photo-1433840496881-cbd845929862.jpg);
      }
      .page:nth-child(4) {
        background-image: url(https://i.postimg.cc/kXq9Qmnj/bgd1.jpg);
      }
      /* Set stacking context of slides */
      .page:nth-child(1) {
        z-index: 4;
      }
      .page:nth-child(2) {
        z-index: 3;
      }
      .page:nth-child(3) {
        z-index: 2;
      }
      .page:nth-child(4) {
        z-index: 1;
      }
      .content-wrapper {
        height: 100vh;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-flow: column nowrap;
        color: #fff;
        font-family: Montserrat;
        text-transform: uppercase;
        transform: translateY(40vh);
        will-change: transform;
        backface-visibility: hidden;
        transition: all 1.7s cubic-bezier(0.22, 0.44, 0, 1);
      }
      .content-title {
        font-size: 8vh;
        line-height: 1.4;
      }
      .page.up-scroll {
        transform: translate3d(0, -15vh, 0);
      }
      .page.up-scroll .content-wrapper {
        transform: translateY(15vh);
      }
      .page.up-scroll + .page {
        transform: translate3d(0, 30vh, 0);
      }
      .page.up-scroll + .page .content-wrapper {
        transform: translateY(30vh);
      }
      .page.down-scroll {
        transform: translate3d(0, -130vh, 0);
      }
      .page.down-scroll .content-wrapper {
        transform: translateY(40vh);
      }
      .page.down-scroll + .page:not(.down-scroll) {
        transform: translate3d(0, -15vh, 0);
      }
      .page.down-scroll + .page:not(.down-scroll) .content-wrapper {
        transform: translateY(15vh);
      }
    `}</style>
  </div>
)

export default Index
