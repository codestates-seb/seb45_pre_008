import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import GlobalStyle from './assets/styles/GlobalStyle.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>,
);
