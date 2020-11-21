import SmallSearchBar from "./SmallSearchBar";
import ListTiles from "./ListTiles";
import ListingDetails from "./ListingDetails";

export default function ResultsPage({ jobs, selectedJob, handleClick, handleClickJobListing }) {
  return (
    <main className="results-page">
      <SmallSearchBar handleClick={handleClick} />
      <div className="results-page__results-container">
        <ul className="results-page__results-list">
          {jobs.length === 0 ? (
            <li className="job-tile__no-results">No results found</li>
          ) : (
              jobs.map((job, index) => <ListTiles key={index} job={job} handleClick={handleClickJobListing} />)
            )}
        </ul>
        {selectedJob ? (
          <ListingDetails jobID={selectedJob.id} />
        ) : (
            <section className="listing-details">
              <h4 className="results-page__no-results">
                Select a listing for more details
            </h4>
            </section>
          )}
      </div>
    </main>
  );
}
