import imperialSymbol from "../assets/icons/imperialSymbol.svg";

export default function ListingDetails() {
  return (
    <section className="listing-details">
      <div className="listing-details__top-container">
        <img src={imperialSymbol} alt="" className="listing-details__logo" />
        <h2 className="listing-details__job-title">Job Title</h2>{" "}
        {/* job title */}
        <p className="listing-details__company-location">
          Company - Location
        </p>{" "}
        {/* company - location */}
        <p className="listing-details__contract">
          Full-time, Permanent - Remote
        </p>{" "}
        {/* contract - on-site/remote */}
        <button className="listing-details__button">Apply Now</button>
        <button className="listing-details__button-secondary">Save</button>
      </div>
      <div className="listing-details__desc-container">
        {/* job description - intro */}
        <p>
          We’re looking for developers to help build our platform that will
          touch millions of people. We’re changing a huge industry and creating
          beautiful user experiences along the way. We're an early-stage company
          with a flat organization structure, so title and hierarchy are
          flexible. Autozen is a well-funded tech company in stealth mode with a
          great team and massive market = big opportunity. We’re making moves to
          be a hyper-growth company.
        </p>
        {/* job description - responsibilities */}
        <h3>Responsibilities</h3>
        <ul>
          <li>Perk</li>
          <li>Perk</li>
          <li>Perk</li>
          <li>Perk</li>
          <li>Perk</li>
          <li>Perk</li>
        </ul>
        {/* job description - perks */}
        <h3>Perks</h3>
        <ul>
          <li>Perk</li>
          <li>Perk</li>
          <li>Perk</li>
          <li>Perk</li>
          <li>Perk</li>
          <li>Perk</li>
        </ul>
        <p>Posted x days ago</p> {/* postedDaysAgo */}
      </div>
    </section>
  );
}
