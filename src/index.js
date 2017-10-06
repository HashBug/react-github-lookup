import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configstore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
)

registerServiceWorker();
