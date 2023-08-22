import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import GlobalStyle from './assets/styles/GlobalStyle.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
        onScriptLoadError={() => console.log('실패')}
        onScriptLoadSuccess={() => console.log('성공')}
      >
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>,
);
