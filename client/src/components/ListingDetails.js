import { Link } from "react-router-dom";
import imperialSymbol from "../assets/icons/imperialSymbol.svg";

export default function ListingDetails({ job }) {
  const listifier = (list) => {
    return list.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <section className="listing-details">
      <div className="listing-details__top-container">
        <img src={imperialSymbol} alt="" className="listing-details__logo" />
        <div className="listing-details__text-container">
          <h2 className="listing-details__job-title">{job.title}</h2>
          <p className="listing-details__job-text">
            {job.company} - {job.location}
          </p>
          <p className="listing-details__job-text">
            Full-time, Permanent - On-site
          </p>
        </div>
        <button className="listing-details__button">Apply Now</button>
        <button className="listing-details__button-secondary">Save</button>
      </div>
      <div className="listing-details__desc-container">
        {job.description ? <p>job.description</p> : null}
        {/* job description - responsibilities */}
        <h3>Responsibilities</h3>
        <ul>{listifier(job.responsibilities)}</ul>
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
        <p className="listing-details__posting-date">
          Posted {job.postedDaysAgo} days ago
        </p>{" "}
        {/* postedDaysAgo */}
        <Link to="/report">report job</Link>
      </div>
    </section>
  );
}
