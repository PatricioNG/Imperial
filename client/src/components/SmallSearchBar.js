export default function SmallSearchBar({ handleClick }) {
  return (
    <section className="results-search">
      <form onSubmit={(event) => handleClick(event)} className="results-search__job-form">
        <section className="results-search__job-form-section">
          <p className="results-search__job-form-heading">What</p>
          <label className="results-search__job-form-label">
            Job title, experience, or branch of the Empire
            <input
              name="what"
              className="results-search__job-form-input"
              type="text"
              placeholder="Job title, experience, or branch of the Empire"
            />
          </label>
        </section>

        <section className="results-search__job-form-section">
          <p className="results-search__job-form-heading">Where</p>
          <label className="results-search__job-form-label">
            Planet, galactic sector, or outpost
            <input
              name="where"
              className="results-search__job-form-input"
              type="text"
              placeholder="Planet, galactic sector, or outpost"
            />
          </label>
        </section>

        <button className="results-search__job-form-button">Find Jobs</button>
      </form>
    </section>
  );
}
