export const CostsSectionMobile = props => (
  <div
    id="costs-section"
    className="section section-five"
    style={{ height: props.height + 160 }}
  >
    <div className="costs-wrapper abs">
      <div className="costs-container">
        <div className="title title-five">Booking</div>
        <div className="title dates-container">
          <div className="required">$500 USD deposit is required</div>
          <div className="cost-date">September 3rd, 2019</div>
          <div className="required">The full amount is due</div>
          <div className="cost-date">March 4th, 2020</div>
        </div>
        <div className="title title-five-two">Total Cost</div>
        <div className="sub-container-wrapper">
          <div className="sub-container">
            <div className="subtitle-five">Leaving From Kelowna</div>
            <div className="title left-container">
              <div className="total-cost-item left-item">Adult</div>
              <div className="total-cost-item left-item">Ages 7-12</div>
              <div className="total-cost-item left-item">Ages 2-6</div>
            </div>
            <div className="title right-container">
              <div className="total-cost-item right-item">$1544.35</div>
              <div className="total-cost-item right-item">$1196.07</div>
              <div className="total-cost-item right-item">$887.54</div>
            </div>
          </div>
          <div className="sub-container">
            <div className="subtitle-five">Leaving From Vancouver</div>
            <div className="title left-container">
              <div className="total-cost-item left-item">Adult</div>
              <div className="total-cost-item left-item">Ages 7-12</div>
              <div className="total-cost-item left-item">Ages 2-6</div>
            </div>
            <div className="title right-container">
              <div className="total-cost-item right-item">$1559.35</div>
              <div className="total-cost-item right-item">$1206.07</div>
              <div className="total-cost-item right-item">$897.54</div>
            </div>
          </div>
        </div>
        <div className="title final-note">
          All rates include round trip airfare, round trip airport transfers, 7
          nights all-inclusive accommodation, one checked bag per person and
          seat selection with the group towards the rear of the aircraft.
        </div>
        <div className="title final-note">
          This pricing is Guaranteed for the first 20 people who pay the
          deposit, and prices beyond those first 20 should still be very close
          to these rates, but are not guaranteed
        </div>
        <div className="title final-note">
          Bookings can be done through our travel agent Holly Graves at
        </div>
        <div className="final-email">
          <a href="mailto:holly.graves@flightcentre.ca">
            holly.graves@flightcentre.ca
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .section-five {
        background: rgba(110, 104, 148, 0.9);
      }
      .costs-wrapper {
        min-width: 30rem;
      }
      .costs-container {
        position: relative;
      }
      .dates-container {
        font-size: 1.4rem;
        color: #c2d2f5;
        font-family: LatoHairLine;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
      }
      .title-five {
        margin-bottom: 0.5rem;
        text-align: center;
        font-size: 1.6rem;
      }
      .title-five-two {
        margin-bottom: 0.5rem;
        font-size: 1.6rem;
      }
      .left-container {
        width: 50%;
        float: left;
        text-align: right;
        font-size: 1.8rem;
      }
      .left-item {
        margin-left: auto;
        margin-right: 1rem;
      }
      .cost-date {
        font-family: Laila, serif;
        margin-bottom: 1rem;
      }
      .right-container {
        width: 50%;
        float: left;
        text-align: left;
        font-family: Laila;
        font-size: 1.4rem;
      }
      .right-item {
        margin-left: 2rem;
      }
      .subtitle-five {
        font-size: 1.2rem;
        font-family: Laila, serif;
        color: white;
        text-transform: uppercase;
        color: #c2d2f5;
      }
      .sub-container-wrapper {
        margin-bottom: 8rem;
      }
      .final-note {
        max-width: 34rem;
        font-family: Laila;
        font-size: 1.2rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
        clear: both;
      }
      .final-email {
        font-family: Laila, serif;
        font-size: 1.2rem;
        color: white;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
      }
    `}</style>
  </div>
)
