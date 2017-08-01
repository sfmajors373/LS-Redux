import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
