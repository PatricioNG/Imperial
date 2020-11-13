import SmallSearchBar from "./SmallSearchBar";
import ListTiles from "./ListTiles";
import ListingDetails from "./ListingDetails";

export default function ResultsPage() {
  return (
    <main className="results-page">
      {/* search bar & filters? */}
      <SmallSearchBar />
      <div className="results-page__results-container">
        {/* results lists on the left */}
        <ul className="results-page__results-list">
          <ListTiles />
          <ListTiles />
          <ListTiles />
        </ul>
        {/* specific listing details on the right (sticky) */}
        <ListingDetails />
      </div>
    </main>
  );
}
