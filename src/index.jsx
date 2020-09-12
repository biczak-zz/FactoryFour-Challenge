import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from 'Containers/App';

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);
