const MobileLayout = props => (
  <div id={props.id} style={props.style} className={props.className}>
    <div className="mobile-content-container">
      <div className="wrapper">{props.content}</div>
    </div>
    <style jsx>{`
      .mobile-content-container {
        padding-left: 5%;
        padding-right: 5%;
      }
      .wrapper {
        min-width: 34rem;
        padding-top: 3%;
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 600px) {
        .wrapper {
          min-width: 30rem;
        }
      }
    `}</style>
  </div>
)

export default MobileLayout
