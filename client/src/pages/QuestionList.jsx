import { Button } from '../components/Button.jsx';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

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
  font-size: 17px;
  margin: 0 12px 0 0;
`;

const PostsContainer = styled.div`
  box-sizing: inherit;
  vertical-align: baseline;
  margin-left: -24px;
`;

const Post = styled.div`
  display: flex;
  padding: 16px;
  position: relative;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  &:first-child {
    border-top: 1px solid hsl(210, 8%, 90%);
  }
`;

const PostStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 108px;
  gap: 6px;
  margin: 0 16px 4px 0;
  align-items: flex-end;
  color: #6a737c;
`;
const StatItem = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 0.3em;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  opacity: unset;
  font-size: 13px;
`;

const PostContent = styled.div`
  flex-grow: 1;
  max-width: 100%;
`;

const PostTitle = styled.h3`
  font-size: 17px;
  font-weight: 400;
  padding-right: 24px;
  margin: -1.95px 0 4.9998px;
  a {
    color: #0074cc;
  }
`;

const QuestionList = () => {
  const location = useLocation();
  const headline =
    location.pathname === '/' ? 'Top Questions' : 'All Questions';

  return (
    <>
      <ContentHeader>
        <HeaderTitle>{headline}</HeaderTitle>
        <Link to={'/questions/ask'}>
          <Button>Ask Question</Button>
        </Link>
      </ContentHeader>
      <DataController>
        <CalcQuestions>Questions 몇개인지 세렴</CalcQuestions>
        <Button backColor="#B3D3EA" color="1E3C52" hoverColor="none">
          Filter
        </Button>
      </DataController>
      <PostsContainer>
        <Post>
          <PostStats>
            <StatItem>votes</StatItem>
            <StatItem>answers</StatItem>
            <StatItem>views</StatItem>
          </PostStats>
          <PostContent>
            <PostTitle></PostTitle>
          </PostContent>
        </Post>
      </PostsContainer>
    </>
  );
};

export default QuestionList;
