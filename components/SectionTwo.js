const SectionTwo = () => (
  <div>
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
        background-image: url('http://bit.ly/2P0xBZE');
      }
      .tile2 {
        background-image: url('http://bit.ly/2UHd55z');
      }
      .tile3 {
        background-image: url('http://bit.ly/2Kk5fLj');
      }
      .tile4 {
        background-image: url('http://bit.ly/2CZ1eGb');
      }
      .tile5 {
        background-image: url('https://bit.ly/2ImJpEA');
      }
      .tile6 {
        background-image: url('https://bit.ly/2uWJCX8');
      }
      .tile7 {
        background-image: url('http://bit.ly/2P131ix');
      }
      .tile8 {
        background-image: url('https://bit.ly/2IiLdhG');
      }
      .tile9 {
        background-image: url('http://bit.ly/2uSDhMa');
      }
      .tile10 {
        background-image: url('http://bit.ly/2I89bwY');
      }
      .tile11 {
        background-image: url('http://bit.ly/2VtwrIQ');
      }
      .tile12 {
        background-image: url('http://bit.ly/2Z2GuXB');
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

export default SectionTwo
