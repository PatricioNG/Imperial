import ImperialHeader from "./components/ImperialHeader";
import LandingPage from "./components/LandingPage";
import ResultsPage from "./components/ResultsPage";
import ReportPage from "./components/ReportPage";
import { Switch, Route, useHistory } from "react-router-dom";

import "./styles/styles.css";
import { useEffect, useState } from "react";
import { getJobList } from "./utils/APIs";

function App() {

  const history = useHistory()

  const [jobList, setJobList] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();

    const searchTerms = {
      what: event.target.what.value.toLowerCase(),
      where: event.target.where.value.toLowerCase()
    }

    if (searchTerms.what.trim() && searchTerms.where.trim()) { //Both terms exist
      let newJobList = jobList.filter((job) => {
        return job.title.toLowerCase().includes(searchTerms.what) || job.company.toLowerCase().includes(searchTerms.what)
      })
      setJobList(newJobList.filter((job) => job.location.toLowerCase().includes(searchTerms.where)))
    } else if (searchTerms.what.trim() && !searchTerms.where.trim()) { //What exists

      setJobList(jobList.filter((job) => {
        return job.title.toLowerCase().includes(searchTerms.what) || job.company.toLowerCase().includes(searchTerms.what)
      }))
    } else if (!searchTerms.what.trim() && searchTerms.where.trim()) { //Where exists
      setJobList(jobList.filter((job) => job.location.toLowerCase().includes(searchTerms.where)))
    }

    history.push('/jobs');
  }

  const refreshData = () => {
    getJobList().then((data) => setJobList(data));
  }

  useEffect(() => {
    getJobList().then((data) => setJobList(data));
  }, [])

  return (
    <div className="App">
      <ImperialHeader refreshData={refreshData} />
      <Switch>
        <Route path="/" exact render={(routerProps) => <LandingPage handleClick={handleClick} />} />
        <Route path="/jobs" exact render={() => <ResultsPage jobs={jobList} />} />
        <Route path="/report" exact component={ReportPage} />
      </Switch>
    </div>
  );
}

export default App;
