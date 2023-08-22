import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

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
  flex-shrink: 0;
  flex-wrap: wrap;
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

const PostWrapper = styled.div`
  flex-grow: 1;
  max-width: 100%;
`;

const PostTitle = styled.h3`
  font-size: 17px;
  font-weight: 400;
  padding-right: 24px;
  margin: -1.95px 0 4.9998px;
  color: #0074cc;
`;

const PostContent = styled.div`
  color: #3b4045;
  font-size: 13px;
  margin: -2px 0 8px;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const PostFooter = styled.div`
  align-items: center;
  column-gap: 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 8px;
`;

const TagBox = styled.div`
  float: left;
  display: inline;
`;

const TagItem = styled.div`
  display: inline-block;
  margin-right: 4px;
  gap: 4px;
  padding: 0.4em 0.5em;
  background-color: rgb(225, 236, 244);
  border-radius: 5px;
  color: rgb(57, 115, 156);
  font-size: 12px;
`;

const UserBox = styled.div`
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-left: auto;
`;

const CreatedTime = styled.time`
  color: #6a737c;
  font-size: 12px;
`;

const Questions = ({
  question,
  title,
  tags,
  content,
  createdAt,
  voteCount,
  answerCount,
  viewCount,
}) => {
  const options = {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  const location = useLocation();

  return (
    <PostsContainer>
      <Post>
        <PostStats>
          <StatItem>{voteCount} votes</StatItem>
          <StatItem>{answerCount} answers</StatItem>
          <StatItem>{viewCount} views</StatItem>
        </PostStats>
        <PostWrapper>
          <PostTitle>
            <Link to={`/questions/${question.questionId}`}>{title}</Link>
          </PostTitle>
          {location.pathname === '/' ? null : (
            <PostContent>{content}</PostContent>
          )}
          <PostFooter>
            <TagBox>
              {tags.map((item) => (
                <TagItem key={item}>{item}</TagItem>
              ))}
            </TagBox>
            <UserBox>
              <CreatedTime>
                asked&nbsp;
                <span>
                  {new Date(createdAt).toLocaleString('ko-KR', options)}
                </span>
              </CreatedTime>
            </UserBox>
          </PostFooter>
        </PostWrapper>
      </Post>
    </PostsContainer>
  );
};

export default Questions;
