import './App.css';
import GlobalStyle from './assets/styles/GlobalStyle.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
