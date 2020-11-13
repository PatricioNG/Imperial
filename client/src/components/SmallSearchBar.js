export default function SmallSearchBar() {
  return (
    <section className="results-search">
      <form className="results-search__job-form">
        <section className="results-search__job-form-section">
          <p className="results-search__job-form-heading">What</p>
          <label className="results-search__job-form-label">
            Job title, experience, or branch of the Empire
            <input
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
