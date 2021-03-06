import ReactDOM from 'react-dom';
import App from './pages/App';
import ErrorBoundary from './atoms/ErrorBoundary';
import { createGlobalStyle } from "styled-components";
import { context } from "@reatom/react";
import { store } from "./store";
import './i18n/i18n';

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
    <context.Provider value={store}>
      <Global/>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </context.Provider>
  </>,
  document.getElementById('root')
);


