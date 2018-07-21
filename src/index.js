import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import h from 'react-hyperscript';

ReactDOM.render(h(App), document.getElementById('root'));
registerServiceWorker();
