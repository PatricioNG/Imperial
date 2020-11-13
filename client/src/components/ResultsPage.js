import SmallSearchBar from "./SmallSearchBar";
import ListTiles from "./ListTiles";
import ListingDetails from "./ListingDetails";

export default function ResultsPage({ jobs, handleClick }) {
  return (
    <main className="results-page">
      {/* search bar & filters? */}
      <SmallSearchBar handleClick={handleClick} />
      <div className="results-page__results-container">
        {/* results lists on the left */}
        <ul className="results-page__results-list">
          {jobs.length === 0 ? <li className="job-tile__no-results">No results found</li> :
            jobs.map((job) => <ListTiles job={job} />)}
        </ul>
        {/* specific listing details on the right (sticky) */}
        <ListingDetails />
      </div>
    </main>
  );
}
