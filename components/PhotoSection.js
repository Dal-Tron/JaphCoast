const PhotoSection = props => (
  <div
    style={{ height: props.height }}
    id="photo-section"
    className="section-two"
  >
    <div className="container">
      <div className="imageGrid">
        <div className="tile tile1" />
        <div className="tile tile2" />
        <div className="tile tile3" />
        <div className="tile tile4" />
        <div className="tile tile5" />
        <div className="tile tile6" />
        <div className="tile tile7" />
        <div className="tile tile8" />
        <div className="tile tile9" />
        <div className="tile tile10" />
        <div className="tile tile11" />
        <div className="tile tile12" />
      </div>
    </div>
    <style jsx>{`
      .imageGrid {
        line-height: 0;
      }
      .imageGrid .tile {
        width: 33.33%;
        min-height: calc(100vh / 4);
        display: inline-block;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        position: relative;

        cursor: pointer;
        cursor: hand;
      }

      .tile1 {
        background-image: url('/static/images/raph_and_jeff_1.jpg');
      }
      .tile2 {
        background-image: url('/static/images/raph_ocean.jpg');
      }
      .tile3 {
        background-image: url('/static/images/young_couple_grass.jpg');
      }
      .tile4 {
        background-image: url('/static/images/jeff_drink.jpg');
      }
      .tile5 {
        background-image: url('/static/images/raph_jeff_sand.jpg');
      }
      .tile6 {
        background-image: url('/static/images/raph_cat.jpg');
      }
      .tile7 {
        background-image: url('/static/images/raph_makeup.jpg');
      }
      .tile8 {
        background-image: url('/static/images/raph_jeff_flower_print.jpg');
      }
      .tile9 {
        background-image: url('/static/images/jeff_makeup.jpg');
      }
      .tile10 {
        background-image: url('/static/images/jeff_raph_ocean.jpg');
      }
      .tile11 {
        background-image: url('/static/images/jeff_raph_mexico_ocean.jpg');
      }
      .tile12 {
        background-image: url('/static/images/raph_jeff_music.jpg');
        background-position-y: 100% !important;
      }

      @media (max-width: 1000px) {
        .imageGrid .tile {
          width: 50%;
        }
      }

      @media (max-width: 700px) {
        .imageGrid .tile {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

export default PhotoSection
