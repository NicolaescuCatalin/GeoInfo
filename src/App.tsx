import * as React from "react";
import "./index.css";
import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllCountries from "./components/all-countries/allCountries";
import Continents from "./components/continents/continents";
import CountriesOnContinent from "./components/countries-on-continent/countriesOnContinent";
import CountryInfo from "./components/country-info/countryInfo";
const App = () => {
  return (
    <div>
      <Header />

      <div className="center">
        <Router>
          <div className="container">
            <Switch>
              <Route path="/allCountries">
                <AllCountries />
              </Route>
              <Route
                path={`/countriesOnContinent/:continentCode`}
                component={CountriesOnContinent}
              ></Route>
              <Route path="/country/:ID" component={CountryInfo}></Route>
              <Route path="/">
                <Continents />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
