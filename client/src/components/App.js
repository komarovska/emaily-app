import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Form from './Form';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
    return(
        <div>
            <BrowserRouter>
              <div>
                  <Header/>
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
                  <Route
                      component={SurveyNew}
                      path="/movies/new"
                  />
              </div>
            </BrowserRouter>
        </div>
    )
};

export default App;
