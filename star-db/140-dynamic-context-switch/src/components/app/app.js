import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import {
  LoginPage,
  SecretPage,
  PeoplePage,
  PlanetsPage,
  StarshipsPage
} from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {
  // https://coursehunters.net/course/react-redux-professionalnaya-razrabotka
  // coursehunters -u https://coursehunters.net/course/react-redux-professionalnaya-razrabotka  -l 118-129
  // 102 Авторизация и закрытые страницы
  // this 140 applicationCache.js

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Route
                path="/"
                render={() => <h2>Welcome to StarDB</h2>}
                exact={true}
              />
              <Route
                path="/people"
                render={() => <h2>People</h2>}
                exact={true}
              />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" exact component={StarshipsPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;

                  return <StarshipDetails itemId={id} />;
                }}/>

              <Route 
                path="/login"
                render={() => {
                  <LoginPage 
                  //isLoggedIn={false}
                    //onLogin = {()=>{}}
                  />;
                }}
              />
              <Route
                path="/secret"
                render={() => {
                  <SecretPage 
                  isLoggedIn={false} 
                  />;
                }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
