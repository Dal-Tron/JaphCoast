const SplitLayout = props => (
  <div
    className="section"
    id={props.id}
    style={{ backgroundColor: props.backgroundColor }}
  >
    <div className="main-content-container">
      <div className="split-wrapper container">
        <div>{props.leftElement}</div>
      </div>
      <div className="split-wrapper container">
        <div>{props.rightElement}</div>
      </div>
    </div>
    <style jsx>{`
      .main-content-container {
        max-width: 95rem;
        margin-left: auto;
        margin-right: auto;
        padding-top: 16rem;
        padding-bottom: 16rem;
        padding-left: 10rem;
        padding-right: 10rem;
      }
      .split-wrapper {
        width: 50%;
        position: relative;
        display: inline-block;
      }
      .left-container {
        float: left;
      }
      .right-container {
        float: right;
      }
    `}</style>
  </div>
)

export default SplitLayout
