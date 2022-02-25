//Entry point for webpack
import ReactDOM from 'react-dom';
import { App } from './app';
import { GlobalStyles } from './common/styles/globalStyles';
ReactDOM.render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById('root')
);
