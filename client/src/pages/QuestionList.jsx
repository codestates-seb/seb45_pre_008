import { Button } from '../components/Button.jsx';
import { Link } from 'react-router-dom';

const QuestionList = () => {
  return (
    <>
      암튼 질문리스트
      <Link to={'/questions/ask'}>
        <Button>Ask Question</Button>
      </Link>
    </>
  );
};

export default QuestionList;
