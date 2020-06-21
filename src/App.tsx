import * as React from "react";
import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllCountries from "./components/all-countries/allCountries";
import Continents from "./components/continents/continents";
import CountriesOnContinent from "./components/countries-on-continent/countriesOnContinent";
const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/">
            <Continents />
          </Route>
          <Route path="/allCountries">
            <AllCountries />
          </Route>
          <Route path="/countriesOnContinent/:continent">
            <CountriesOnContinent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
