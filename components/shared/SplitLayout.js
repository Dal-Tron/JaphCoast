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
        width: 100rem;
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
    `}</style>
  </section>
)

export default SplitLayout