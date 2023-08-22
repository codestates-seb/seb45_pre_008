import styled from 'styled-components';
import { Button, QuestionContent } from './../assets/styles/QuestionStyle.jsx';

const AnswerContainer = styled.main`
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;
const AnswerBox = styled.div`
  background-color: #ffffff;
  width: 100%;
`;
const AnswerTitleHeader = styled.div`
  border-bottom: 1px solid rgb(186, 191, 196);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnswerTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
  color: #3b4045;
  padding-bottom: 8px;
`;

const AnswerContent = styled.p`
  font-size: 15px;
  color: #232629;
  margin: 0;
  padding-bottom: 16px;
`;
const AnswerSubContent = styled.p`
  font-size: 15px;
  color: #232629;
  margin: 0;
  padding-bottom: 16px;
`;

const AnswerTags = styled.div`
  display: flex;
  gap: 4px;
`;

const Tag = styled.div`
  padding: 5px;
  color: #39739d;
  background-color: #e1ecf4;
  border-radius: 5px;
  font-size: 12px;
`;
const YourAnswerTitle = styled.div`
  margin: 30px 0 10px;
  font-size: 19px;
  color: #232629;
`;
const YourAnswerContent = styled(QuestionContent)`
  height: 200px;
`;
const RightAside = styled.aside`
  width: 300px;
  float: right;
  margin-left: 24px;
  height: 100%;

  ul {
    padding: 0;
    display: block;
    text-align: left;
    align-items: center;
    height: auto;
    background-color: hsl(47, 87%, 94%);
    border-radius: 3px;
    border: 1px solid hsl(47, 65%, 84%);
    box-shadow:
      0 1px 2px hsla(0, 0%, 0%, 0.05),
      0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);

    > li {
      width: 100%;
      padding: 0 15px;
      margin: 12px 0;
      font-size: 13px;
      list-style-type: disc;
      list-style-position: inside;
    }

    .widget-header {
      width: 100%;
      height: 41px;
      padding: 15px;
      font-weight: 700;
      font-size: 12px;
      background-color: hsl(47, 83%, 91%);
      border-bottom: 1px solid hsl(47, 65%, 84%);
      list-style-type: none;
      margin: 0;
    }

    .widget-header:nth-child(4) {
      border-top: 1px solid var(--yellow-200);
    }
  }
`;

export default function AnswerWindow() {
  return (
    <AnswerContainer>
      <AnswerBox>
        <AnswerTitleHeader>
          <AnswerTitle>title is written here.</AnswerTitle>
          <Button>Ask Question</Button>
        </AnswerTitleHeader>
        <AnswerContent>content is written here.</AnswerContent>
        <AnswerSubContent>subcontent is written here.</AnswerSubContent>
        <AnswerTags>
          <Tag>tag1</Tag>
          <Tag>tag2</Tag>
        </AnswerTags>
        <div>
          <YourAnswerTitle>Your Answer</YourAnswerTitle>
          <YourAnswerContent></YourAnswerContent>
          <Button>Post Your Answer</Button>
        </div>
      </AnswerBox>
      <RightAside>
        <ul>
          <li className="widget-header">The Overflow Blog</li>
          <li>Why everyone should be an AppSec specialist (Ep. 598)</li>
          <li className="widget-header">Featured on Meta</li>
          <li>Moderation strike: Results of negotiations</li>
          <li>
            Our Design Vision for Stack Overflow and the Stack Exchange network
          </li>
          <li>Temporary policy: Generative AI (e.g., ChatGPT) is banned</li>
          <li>Preview of Search and Question-Asking Powered by GenAI</li>
          <li>Collections: A New Feature for Collectives on Stack Overflow</li>
          <li className="widget-header">Hot Meta Posts</li>
          <li>
            Should code-only answers that promote the author&apos;s library be
            flagged?
          </li>
          <li>
            May old questions be repeated for new version of language standard?
          </li>
        </ul>
      </RightAside>
    </AnswerContainer>
  );
}
