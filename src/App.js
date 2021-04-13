import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Switch from "react-bootstrap/Switch";
import Changelog from "./containers/Changelog/Changelog";
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNav from "./components/top_nav/TopNav";
import FeatureRequest from "./containers/feature_request/FeatureRequest";
import Home from "./containers/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <TopNav/>
          <Switch>
              <Route path="" component={Home}/>
              <Route path="/changelog" exact component={Changelog}/>
              <Route path="/feature_request" exact component={FeatureRequest}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
