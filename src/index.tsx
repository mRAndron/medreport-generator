import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import App from './App';

import 'semantic-ui-css/semantic.min.css';
import './index.scss';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
