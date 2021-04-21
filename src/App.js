import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./homepage.js";
import Details from "./detailspage.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/detailspage/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
