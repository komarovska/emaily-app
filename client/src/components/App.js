import React from 'react';
import * as mobx from 'mobx';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import Header from './Header';
import Form from './Form';
import HomePage from './Home'
import Dashboard from './Dashboard';

const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Nice Landing</h2>;

@inject('application')
@observer
export default class App extends React.Component {
  render() {
    return(
        <div>
            <BrowserRouter>
              <div>
                  <Header/>
                  <Route
                    component={HomePage}
                    path="/home"
                    exact
                  />
                  <Route
                    component={Landing}
                    path="/"
                    exact
                  />
                  <Route
                    component={Form}
                    path="/form"
                    exact
                  />
                  <Route
                      component={Dashboard}
                      path="/movies"
                      exact
                  />
                  <Route path='/movies' 
                    render={() => 
                      this.props.application.isLoggedIn ? 
                      <Dashboard /> : 
                      <Redirect to="/home"/> 
                  }
/>
              </div>
            </BrowserRouter>
        </div>
    )
  }
};
