import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime.js';
import App from './src/App';
const Root = () => {
  return <App />;
};

ReactDOM.render(<Root />, document.getElementById('root'));
