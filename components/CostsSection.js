export const CostsSection = props => (
  <div id="costs-section" className="section section-five">
    <div className="costs-wrapper">
      <div className="mobile-booking" />
      <div className="title title-2 deposit-title">Deposit Dates</div>
      <div className="title title-4 left-container">
        <div className="required left-item">$500 USD deposit by</div>
        <div className="required left-item">The full amount is due by</div>
      </div>
      <div className="title title-4 right-container">
        <div className="cost-date right-item">September 3rd, 2019</div>
        <div className="cost-date right-item">March 4th, 2020</div>
      </div>
      <div className="title title-3">Total Cost</div>]{' '}
      <div className="sub-container">
        <div className="title location-title">Leaving From Kelowna</div>
        <div className="title-4 left">
          <div className="left-item">Adult</div>
          <div className="left-item">Ages 7-12</div>
          <div className="left-item">Ages 2-6</div>
        </div>
        <div className="title-4 right">
          <div className="right-item">$1544.35</div>
          <div className="right-item">$1196.07</div>
          <div className="right-item">$887.54</div>
        </div>
      </div>
      <div className="sub-container">
        <div className="title location-title">Leaving From Vancouver</div>
        <div className="title-4 left">
          <div className="left-item">Adult</div>
          <div className="left-item">Ages 7-12</div>
          <div className="left-item">Ages 2-6</div>
        </div>
        <div className="title-4 right">
          <div className="right-item">$1559.35</div>
          <div className="right-item">$1206.07</div>
          <div className="right-item">$897.54</div>
        </div>
      </div>
      <div className="title final-note">
        All rates include round trip airfare, round trip airport transfers, 7
        nights all-inclusive accommodation, one checked bag per person and seat
        selection with the group towards the rear of the aircraft.
      </div>
      <div className="title final-note">
        This pricing is Guaranteed for the first 20 people who pay the deposit,
        and prices beyond those first 20 should still be very close to these
        rates, but are not guaranteed
      </div>
      <div className="title final-note">
        Bookings can be done through our travel agent Holly Graves at
        <div className="final-email">
          <div className="mail-icon" />
          holly.graves@flightcentre.ca
        </div>
      </div>
    </div>
    <style jsx>{`
      .section-five {
        background: #7c769e;
      }
      .costs-wrapper {
        min-width: 100rem;
      }
      .mobile-booking {
        background-image: url(/static/images/booking.svg);
        width: 16rem;
        height: 16rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
        margin-top: 10rem;
      }
      .deposit-title {
        margin-bottom: 2rem;
      }
      .sub-container {
        clear: both;
        font-size: 2rem;
      }
      .location-title {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.4rem;
        color: white;
      }
      .left {
        width: 50%;
        float: left;
        text-align: right;
        margin-bottom: 1rem;
      }
      .left-item {
        margin-left: auto;
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
      .right {
        width: 50%;
        float: right;
        text-align: left;
        font-family: Laila;
        font-size: 1.6rem;
        margin-bottom: 1rem;
        letter-spacing: 2px;
      }
      .right-item {
        margin-bottom: 1rem;
      }
      .left-container {
        width: 50%;
        float: left;
        text-align: right;
        font-size: 2.2rem;
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
      .final-note {
        font-family: Laila;
        font-size: 1.2rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
        clear: both;
        color: white;
        max-width: 70rem;
      }
      .final-email {
        font-family: Laila, serif;
        font-size: 3rem;
        color: white;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
        margin-bottom: 10rem;
      }
      .mail-icon {
        background-image: url(/static/images/mail.svg);
        width: 5rem;
        height: 5rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 1600px) {
        .costs-wrapper {
          min-width: 70rem;
        }
      }
      @media (max-width: 700px) {
        .see-info-button-container {
          bottom: 8rem;
        }
      }
    `}</style>
  </div>
)
