const MobileLayout = props => (
  <div
    id={props.id}
    style={{ backgroundColor: props.backgroundColor, height: props.height }}
    className="section"
  >
    <div className="mobile-content-container abs">
      <div className="wrapper">{props.content}</div>
    </div>
    <style jsx>{`
      .mobile-content-container {
        height: 100%;
        padding-left: 5%;
        padding-right: 5%;
      }
      .wrapper {
        min-width: 34rem;
        padding-top: 3%;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
)

export default MobileLayout
