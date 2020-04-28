import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './styled/styled';
import App from './components/App/App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Normalize />
    <App />
  </>,
  document.getElementById('root')
);
