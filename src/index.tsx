import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import styled, {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Courier New";
    }
`

ReactDOM.render(
  <>
      <Global/>
    <App/>
  </>,
  document.getElementById('root')
);


