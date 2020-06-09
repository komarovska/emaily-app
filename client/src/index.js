import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import App from './components/App';
import ApplicationStore from './stores/application';

const routingStore = new RouterStore();
const history = syncHistoryWithStore(createBrowserHistory(), routingStore);

const stores = {
  routing: routingStore,
  application: new ApplicationStore(),
};

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter basename="/">
      <Router history={history}>
        <App />
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
