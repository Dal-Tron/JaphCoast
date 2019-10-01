export const CostsSectionMobile = props => (
  <div id="costs-section" className="section section-five">
    <div className="costs-wrapper">
      <div className="mobile-booking" />
      <div className="title title-2 booking-title">
        Booking
        <div className="title-4">All prices in CAD</div>
      </div>
      <div className="title dates-container">
        <div>$250 deposit by</div>
        <div className="cost-date">September 3rd, 2019</div>
        <div>Full amount is due</div>
        <div className="cost-date">March 4th, 2020</div>
      </div>
      <div className="title title-3 total-cost-title">
        Total Cost
        <div className="title-4">*based on dual occupancy*</div>
      </div>
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
        All rates are based on dual occupancy and include round trip airfare,
        round trip airport transfers, 7 nights all-inclusive accommodation, one
        checked bag per person and seat selection with the group towards the
        rear of the aircraft. Please feel free to email us at
        raphaelfroese@gmail.com or jbdobson11@gmail.com if you want help finding
        a roommate!
      </div>
      <div className="title final-note">
        This pricing is Guaranteed for the first 20 people who pay the deposit,
        and prices beyond those first 20 should still be very close to these
        rates, but are not guaranteed
      </div>
      <div className="title final-note">
        Bookings can be done through our travel agent Holly Graves at
      </div>
      <div className="final-email">
        <a href="mailto:holly.graves@flightcentre.ca">
          holly.graves@flightcentre.ca
          <div className="mail-icon" />
        </a>
      </div>
    </div>
    <style jsx>{`
      .section-five {
        background: #7c769e;
        padding-top: 10rem;
        margin-top: -5rem;
      }
      .mobile-booking {
        background-image: url(/static/images/booking.svg);
        width: 10rem;
        height: 10rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
        margin-top: 6rem;
      }
      .booking-title {
        margin-bottom: 1rem;
      }
      .dates-container {
        font-size: 1.4rem;
        color: white;
      }
      .cost-date {
        font-family: Laila, serif;
        margin-bottom: 1rem;
        font-weight: 800;
      }
      .total-cost-title {
        margin-bottom: 1rem;
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
      .final-note {
        font-family: Laila;
        font-size: 1.2rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
        clear: both;
        color: white;
        max-width: 35rem;
      }
      .final-email {
        font-family: Laila, serif;
        font-size: 1.2rem;
        color: white;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 3px;
        margin-bottom: 5rem;
      }
      .mail-icon {
        background-image: url(/static/images/mail.svg);
        width: 5rem;
        height: 5rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
)
