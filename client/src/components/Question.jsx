import styled from 'styled-components';
import Draft from './Draft.jsx';

const MainBox = styled.main`
  padding: 0px 24px 24px;
  background-color: #f8f9f9;
`;

const MainTitle = styled.h1`
  margin: 0px 0px 4px;
  padding: 24px 0 0 0;
  font-size: 27px;
  color: #232629;
  height: 86px;
`;

const InformBox = styled.div`
  width: 70%;
  max-width: 800px;
  padding: 24px;
  background-color: rgb(235, 244, 251);
  border: 1px solid rgb(166, 206, 237);
  border-radius: 8px;
`;

const InformTitle = styled.h2`
  font-size: 21px;
  font-weight: 500;
  color: #3b4045;
  margin: 0px 0px 8px;
`;

const InformStory = styled.p`
  font-size: 15px;
  color: #3b4045;
  margin: 0px;
`;

const InformSteps = styled.h5`
  font-size: 13px;
  font-weight: 600;
  color: #3b4045;
  margin: 15px 0px 8px 0px;
`;
const StepsUl = styled.ul`
  margin: 0px;
`;
const StepsList = styled.li`
  font-size: 13px;
  font-weight: 400;
  color: #3b4045;
`;
const LinkAddress = styled.a`
  color: rgb(0, 116, 204);
  text-decoration: none;
  margin: 0px 4px 0px 4px;
  cursor: pointer;
  &:hover {
    color: rgb(53, 141, 250);
  }
`;
const QuestionBox = styled.div`
  padding: 24px;
  margin: 16px 0px 0px 0px;
  background-color: #ffffff;
  border: 1px solid rgb(228, 230, 232);
  border-radius: 8px;
  width: 70%;
  max-width: 800px;
`;
const QuestionBoxTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`;
const QuestionBoxSubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
const QuestionContent = styled.input`
  font-size: 12px;
  font-weight: 400;
  padding: 7.8px 9.1px;
  margin: 10px 0px 0px 0px;
  width: 97%;
  border: 1px solid rgb(186, 191, 196);
  ::placeholder {
    color: rgb(202, 206, 209);
  }
  &:focus {
    border-color: rgb(104, 167, 221);
    outline: none;
    box-shadow: 0 0 3px 3px rgb(225, 236, 248);
  }
  border-radius: 8px;
`;
const NextButton = styled.button`
  padding: 10.4px;
  margin: 8px 0 0;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background-color: rgb(11, 149, 255);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: rgb(36, 105, 194);
  }
`;
const DescribeContainer = styled.div`
  width: 350px;
  background-color: #ffffff;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 6px;
`;
const DescribeTop = styled.div`
  padding: 12px;
  font-size: 15px;
  background-color: rgb(248, 249, 249);
  border-bottom: 1px solid rgb(214, 217, 220);
`;
const DescribeBottom = styled.div`
  margin: 16px;
  font-size: 12px;
  background-color: #ffffff;
`;

export default function Question() {
  return (
    <MainBox>
      <MainTitle>Ask a public question</MainTitle>
      <InformBox>
        <InformTitle>Writing a good question</InformTitle>
        <InformStory>
          You&rsquo;re ready to
          <LinkAddress href="https://stackoverflow.com/help/how-to-ask">
            ask
          </LinkAddress>
          a
          <LinkAddress href="https://stackoverflow.com/help/on-topic">
            programming-related question
          </LinkAddress>
          and this form will help guide you through the process.
        </InformStory>
        <InformStory>
          Looking to ask a non-programming question? See
          <LinkAddress href="https://stackexchange.com/sites#technology">
            the topics here
          </LinkAddress>
          to find a relevant site.
        </InformStory>
        <InformSteps>Steps</InformSteps>
        <StepsUl>
          <StepsList>Summarize your problem in a one-line title.</StepsList>
          <StepsList>Describe your problem in more detail.</StepsList>
          <StepsList>
            Describe what you tried and what you expected to happen.
          </StepsList>
          <StepsList>
            Add “tags” which help surface your question to members of the
            community.
          </StepsList>
          <StepsList>Review your question and post it to the site.</StepsList>
        </StepsUl>
      </InformBox>
      <QuestionBox>
        <QuestionBoxTitle>Title</QuestionBoxTitle>
        <QuestionBoxSubTitle>
          Be specific and imagine you’re asking a question to another person.
        </QuestionBoxSubTitle>
        <QuestionContent placeholder="e.g. Is there an R function for finding the index of an element in a vector?"></QuestionContent>
        <NextButton>Next</NextButton>
      </QuestionBox>
      <QuestionBox>
        <QuestionBoxTitle>
          What are the details of your problem?
        </QuestionBoxTitle>
        <QuestionBoxSubTitle>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </QuestionBoxSubTitle>
        <Draft />
        <NextButton>Next</NextButton>
      </QuestionBox>
      <QuestionBox>
        <QuestionBoxTitle>
          What did you try and what were you expecting?
        </QuestionBoxTitle>
        <QuestionBoxSubTitle>
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </QuestionBoxSubTitle>
        <Draft />
        <NextButton>Next</NextButton>
      </QuestionBox>
      <QuestionBox>
        <QuestionBoxTitle>Tags</QuestionBoxTitle>
        <QuestionBoxSubTitle>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </QuestionBoxSubTitle>
        <QuestionContent placeholder="e.g. (c flutter django)"></QuestionContent>
        <NextButton>Next</NextButton>
      </QuestionBox>
      <DescribeContainer>
        <DescribeTop>Wirting a good title</DescribeTop>
        <DescribeBottom>
          your title should summarize the problem.
        </DescribeBottom>
        <DescribeBottom>
          You might find that you have a better idea of your title after writing
          out the rest of the question.
        </DescribeBottom>
      </DescribeContainer>
      <DescribeContainer>
        <DescribeTop>Introduce the problem</DescribeTop>
        <DescribeBottom>
          Explain how you encountered the problem you’re trying to solve, and
          any difficulties that have prevented you from solving it yourself.
        </DescribeBottom>
      </DescribeContainer>
      <DescribeContainer>
        <DescribeTop>Expand on the problem</DescribeTop>
        <DescribeBottom>
          Show what you’ve tried, tell us what happened, and why it didn’t meet
          your needs.
        </DescribeBottom>
        <DescribeBottom>
          Not all questions benefit from including code, but if your problem is
          better understood with code you’ve written, you should include a
          <LinkAddress href="https://stackoverflow.com/help/minimal-reproducible-example">
            minimal, reproducible example.
          </LinkAddress>
        </DescribeBottom>
        <DescribeBottom>
          Please make sure to post code and errors as text directly to the
          question (and{' '}
          <LinkAddress href="https://meta.stackoverflow.com/questions/285551/why-should-i-not-upload-images-of-code-data-errors">
            not as images
          </LinkAddress>
          ), and{' '}
          <LinkAddress href="https://stackoverflow.com/help/formatting">
            format them appropriately.
          </LinkAddress>
        </DescribeBottom>
      </DescribeContainer>
    </MainBox>
  );
}
