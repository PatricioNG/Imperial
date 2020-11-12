import ImperialHeader from './components/ImperialHeader';
import LandingPage from './components/LandingPage';
import ResultsPage from "./components/ResultsPage";
import { Switch, Route } from "react-router-dom";

import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <ImperialHeader />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/jobs" exact component={ResultsPage} />
        {/* <LandingPage /> */}
      </Switch>
    </div>
  );
}

export default App;
