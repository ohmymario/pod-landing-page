import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { GlobalStyle } from './styles'
import App from './components/app/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

