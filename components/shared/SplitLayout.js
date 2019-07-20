const SplitLayout = props => (
  <section id={props.id} style={{ backgroundColor: props.backgroundColor }}>
    <div className="main-content-container abs">
      <div className="split-wrapper left-container">
        <div className="split-content-container abs">{props.leftElement}</div>
      </div>
      <div className="split-wrapper right-container">
        <div className="split-content-container abs">{props.rightElement}</div>
      </div>
    </div>
    <style jsx>{`
      .main-content-container {
        min-width: 90rem;
        max-height: 80rem;
      }
      .split-wrapper {
        width: 50%;
        height: 100%;
        position: relative;
      }
      .left-container {
        float: left;
      }
      .right-container {
        float: right;
      }
      .split-content-container {
        width: 100%;
      }
      @media (max-width: 1200px) {
        .main-content-container {
          min-width: 60rem;
        }
      }
      @media (max-width: 950px) {
        .main-content-container {
          min-width: 60rem;
        }
      }
    `}</style>
  </section>
)

export default SplitLayout
