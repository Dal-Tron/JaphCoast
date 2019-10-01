const FaqSection = props => (
  <div className="section faq-section">
    <div className="faq-icon" />
    <div className="title title-2 faq-title">FAQ</div>
    <div className="faq-container">
      <div className="title-4 question">
        For guests who want to arrange their own lodging, what will the cost be
        for them to attend the wedding?
      </div>
      <div className="title-4 answer">
        The day pass is $75USD and the guest is able to arrive up to one hour
        prior to the ceremony and stay until 2am.
      </div>
      <div className="title-4 question">
        Can you let us know what days Holly will be in the office?
      </div>
      <div className="title-4 answer">
        Holly will be available every Monday, Tuesday and Wednesday. Working
        remotely Thursdays and Fridays as needed until mid-October.
      </div>
      <div className="title-4 question">
        Are people able to buy into the group, but either arrive or leave on a
        different day?
      </div>
      <div className="title-4 answer">
        Yes, Holly can accommodate that on a case by case basis and they will
        still fall under the umbrella of the group booking.
      </div>
      <div className="title-4 question">
        If all the reserved spots are booked, are people still able to come? The
        website seems to say the hotel is fully booked for our dates.
      </div>
      <div className="title-4 answer">
        All are welcome to make their own arrangements and attend the ceremony
        using the day pass mentioned above. I suspect you cannot book the hotel
        online because they have space blocked off, similar to your wedding, but
        guests will still be able to attend.
      </div>
      <div className="title-4 question">
        What would the costs be if someone had already paid a deposit and wanted
        to give that spot to another guest because they are unable to go?
      </div>
      <div className="title-4 answer">
        Depending on the situation, it may be free, but the tour operator may
        charge $78.75 change fee to make name changes. If the hotel is on stop
        sell, fully sold out, name changes are complicated.
      </div>
      <div className="title-4 question">
        Are people who are unable to pay the deposit by the due date still able
        to join? Do they have to take care of their own bookings, or can they
        still be part of the group? What are their rates likely to be?
      </div>
      <div className="title-4 answer">
        Guests can be added at any time, up to 10 days prior to departure, Holly
        just has to request updated pricing. So the rates will be different but
        as long as there is room at the resort and on the flights, it is not a
        problem at all. Not everyone is able to book holidays this far in
        advance, Holly is happy to help those that fall under this category.
      </div>
    </div>
    <style jsx>{`
      .faq-section {
        background: #40386e;
        padding-top: 5rem;
      }
      .faq-icon {
        background-image: url(/static/images/faq.svg);
        width: 16rem;
        height: 16rem;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
      }
      .faq-container {
        max-width: 60rem;
        margin-left: auto;
        margin-right: auto;
      }
      .question {
        font-family: Laila;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 3rem;
      }
      .answer {
        padding-bottom: 5rem;
        font-size: 2.6rem;
      }
      @media (max-width: 950px) {
        .question,
        .answer {
          padding-left: 1rem;
          padding-right: 1rem;
          font-size: 1.8rem;
        }
      }
    `}</style>
  </div>
)

export default FaqSection
