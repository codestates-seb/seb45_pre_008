import './App.css';
import Question from './components/Question.jsx';
import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Login from './pages/Login.jsx';
import QuestionList from './pages/QuestionList.jsx';
import SignUp from './pages/SignUp.jsx';
import Main from './pages/Main.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/questions" element={<QuestionList />} />
        </Route>
        <Route path="/questions/ask" element={<Question />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
