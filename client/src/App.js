import ImperialHeader from "./components/ImperialHeader";
import LandingPage from "./components/LandingPage";
import ResultsPage from "./components/ResultsPage";
import ReportPage from "./components/ReportPage";
import { Switch, Route, useHistory } from "react-router-dom";

import "./styles/styles.css";
import { useEffect, useState } from "react";
import { getJobList } from "./utils/APIs";

function App() {
  const history = useHistory();

  const [jobList, setJobList] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState(null);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleClickJobListing = (e, id) => {
    setSelectedJob(jobList[jobList.findIndex((job) => job.id === id)]);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setSelectedJob(null);

    const searchTerms = {
      what: event.target.what.value.toLowerCase(),
      where: event.target.where.value.toLowerCase(),
    };

    if (searchTerms.what.trim() && searchTerms.where.trim()) {
      //Both terms exist
      let newJobList = jobList.filter((job) => {
        return job.title.toLowerCase().includes(searchTerms.what) || job.company.toLowerCase().includes(searchTerms.what)
      })
      setFilteredJobs(newJobList.filter((job) => job.location.toLowerCase().includes(searchTerms.where)))
    } else if (searchTerms.what.trim() && !searchTerms.where.trim()) { //What exists

      setFilteredJobs(jobList.filter((job) => {
        return job.title.toLowerCase().includes(searchTerms.what) || job.company.toLowerCase().includes(searchTerms.what)
      }))
    } else if (!searchTerms.what.trim() && searchTerms.where.trim()) { //Where exists
      setFilteredJobs(jobList.filter((job) => job.location.toLowerCase().includes(searchTerms.where)))
    } else {
      setFilteredJobs(jobList);
    }

    history.push("/jobs");
  };

  const refreshData = () => {
    getJobList().then((data) => setJobList(data));
    setSelectedJob(null);
  };

  useEffect(() => {
    getJobList().then((data) => setJobList(data));
  }, []);

  return (
    <div className="App">
      <ImperialHeader refreshData={refreshData} />
      <Switch>
        <Route path="/" exact render={(routerProps) => <LandingPage handleClick={handleClick} />} />
        <Route path="/jobs" exact render={() => <ResultsPage jobs={filteredJobs} selectedJob={selectedJob} handleClick={handleClick} handleClickJobListing={handleClickJobListing} />} />
        <Route path="/report" exact component={ReportPage} />
      </Switch>
    </div>
  );
}

export default App;
