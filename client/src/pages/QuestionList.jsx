import { Button } from '../components/Button.jsx';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import Questions from '../components/Questions.jsx';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getData } from '../components/localStorage.js';

const ContentHeader = styled.div`
  display: flex;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const HeaderTitle = styled.h1`
  flex: 1 auto;
  line-height: 1.3;
  margin: 0 12px 12px 0;
  font-size: 27px;
  font-weight: 400;
`;

const DataController = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
`;

const CalcQuestions = styled.div`
  font-size: ${(props) => props.fontsize || '17px'};
  font-weight: ${(props) => props.fontweight || null};
  margin: 0 12px 0 0;
`;

const ResultBox = styled.div`
  line-height: 1;
  color: #6a737c;
  font-size: 12px;
  margin-bottom: 24px;
  > div {
    margin-bottom: 8px;
  }
`;

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const location = useLocation();
  const searchVal = useSelector((state) => state.search.searchValue);
  const isLogin = useSelector((state) => state.login.isLoggedin);

  const headline =
    location.pathname === '/'
      ? 'Top Questions'
      : location.pathname === '/questions'
      ? 'All Questions'
      : location.pathname === '/search'
      ? 'Search Result'
      : 'Default Headline';

  const localData = getData('stackData').reverse();

  useEffect(() => {
    const keyWord = decodeURI(location.search);

    if (keyWord) {
      const fetchPosts = async () => {
        try {
          const searchData = localData.filter((question) => {
            const titleMatches = question.title
              .toLowerCase()
              .includes(searchVal.toLowerCase());
            const contentMatches = question.content
              .toLowerCase()
              .includes(searchVal.toLowerCase());
            return titleMatches || contentMatches;
          });
          setQuestions(searchData);
        } catch (err) {
          console.error(err);
        }
      };
      fetchPosts();
      console.log(questions);
      console.log(`검색어 : ${searchVal}`);
    } else {
      const fetchPosts = async () => {
        try {
          setQuestions(localData);
        } catch (err) {
          console.err(err);
        }
      };
      fetchPosts();
      console.log(questions);
    }
  }, [location, searchVal]);

  return (
    <>
      <ContentHeader>
        <HeaderTitle>{headline}</HeaderTitle>
        <Link to={'/questions/ask'}>
          {!isLogin ? null : <Button>Ask Question</Button>}
        </Link>
      </ContentHeader>
      <DataController>
        {location.pathname === '/' ? (
          <div></div>
        ) : location.pathname === '/questions' ? (
          <CalcQuestions>
            {`${questions.length} ${
              questions.length === 1 ? `Question` : `Questions`
            }`}
          </CalcQuestions>
        ) : (
          <CalcQuestions fontsize="13px" fontweight="600">
            <ResultBox>
              <div>Result for {`"${searchVal}"`}</div>
            </ResultBox>
            {`${questions.length} ${
              questions.length === 1 ? `Result` : `Results`
            }`}
          </CalcQuestions>
        )}

        <Button backcolor="#B3D3EA" color="#1E3C52" hovercolor="none">
          Filter
        </Button>
      </DataController>
      {location.pathname === '/'
        ? questions
            .map((question) => (
              <Questions
                key={question.questionId}
                id={question.questionId}
                title={question.title}
                tags={question.tags}
                content={question.content}
                createdAt={question.createdAt}
                voteCount={question.stats.voteCount}
                answerCount={question.stats.answerCount}
                viewCount={question.stats.viewCount}
                question={question}
              />
            ))
            .slice(0, 10)
        : questions.map((question) => (
            <Questions
              key={question.questionId}
              id={question.questionId}
              title={question.title}
              tags={question.tags}
              content={question.content}
              createdAt={question.createdAt}
              voteCount={question.stats.voteCount}
              answerCount={question.stats.answerCount}
              viewCount={question.stats.viewCount}
              question={question}
            />
          ))}
    </>
  );
};

export default QuestionList;
