export const CostsSection = props => (
  <div
    id="costs-section"
    className="section section-five"
    style={{ minHeight: props.height + 100 }}
  >
    <div className="costs-wrapper abs">
      <div className="costs-container">
        <div className="mobile-booking" />
        <div className="title title-five">Deposit Dates</div>
        <div className="title left-container">
          <div className="required left-item">$500 USD deposit is required</div>
          <div className="required left-item">The full amount is due by</div>
        </div>
        <div className="title right-container">
          <div className="cost-date right-item">September 3rd, 2019</div>
          <div className="cost-date right-item">March 4th, 2020</div>
        </div>
        <div className="title title-five-two">Total Cost</div>
        <div className="sub-container">
          <div className="title subtitle-five">Leaving From Kelowna</div>
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
          <div className="title subtitle-five">Leaving From Vancouver</div>
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
          <div className="title">holly.graves@flightcentre.ca</div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .section-five {
        background: rgba(110, 104, 148, 0.9);
      }
      .costs-wrapper {
        min-width: 100rem;
      }
      .costs-container {
        position: relative;
      }
      .mobile-booking {
        background-image: url(/static/images/booking.svg);
        width: 16rem;
        height: 16rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
      }
      .sub-container {
        height: 13rem;
      }
      .title-five {
        margin-bottom: 2rem;
        text-align: center;
      }
      .title-five-two {
        margin-bottom: 3rem;
      }
      .left-container {
        width: 50%;
        float: left;
        text-align: right;
        font-size: 2.2rem;
      }
      .left-item {
        margin-left: auto;
        margin-right: 1rem;
      }
      .required {
        margin-bottom: 2rem;
        height: 3rem;
        line-height: 3rem;
      }
      .right-container {
        width: 50%;
        float: left;
        text-align: left;
        font-family: Laila;
        font-size: 2rem;
      }
      .right-item {
        margin-left: 2rem;
      }
      .cost-date {
        height: 3rem;
        line-height: 3rem;
        margin-bottom: 2rem;
      }
      .subtitle-five {
        font-size: 1.4rem;
        margin-top: -2rem;
        font-weight: 800;
      }
      .total-cost-item {
        height: 1.5rem;
        line-height: 3.5rem;
        margin-bottom: 1rem;
      }
      .final-note {
        width: 60rem;
        font-family: Laila;
        font-size: 1.6rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
      }
      @media (max-width: 1200px) {
        .left-container {
          font-size: 1.8rem;
        }
        .right-container {
          font-size: 1.8rem;
        }
        .final-note {
          font-size: 1.6rem;
        }
      }
    `}</style>
  </div>
)
