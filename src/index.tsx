import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {stores} from "./store-mobX/store";

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
  document.getElementById('root')
);


