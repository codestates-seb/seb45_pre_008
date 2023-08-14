import { useState } from 'react';
import styled from 'styled-components';
import {
  QuestionContainer,
  QuestionBox,
  QuestionBoxTitle,
  QuestionBoxSubTitle,
  QuestionContent,
  NextButton,
  InvalidNextButton,
  DescribeContainer1,
  DescribeTop,
  DescribeBottom,
  DescribeBottomContent,
  LinkAddress,
  WritingLogo,
} from '../assets/styles/QuestionStyle.jsx';
import Writing from './../assets/images/writing-logo.svg';
import Draft from '../components/Draft.jsx';
import Tag from '../components/Tag.jsx';

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
const DescribeContainer2 = styled(DescribeContainer1)`
  height: 150px;
`;
const DescribeContainer3 = styled(DescribeContainer1)`
  height: 300px;
`;

export default function Question() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subContent, setSubContent] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeSubContent = (e) => {
    setSubContent(e.target.value);
  };

  const isTitleValid = title.length >= 15;
  const isContentValid = content.length >= 20;
  const isSubContentValid = subContent.length >= 20;

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
        <StepsUl className="steps-ul">
          <StepsList className="steps-list">
            Summarize your problem in a one-line title.
          </StepsList>
          <StepsList className="steps-list">
            Describe your problem in more detail.
          </StepsList>
          <StepsList className="steps-list">
            Describe what you tried and what you expected to happen.
          </StepsList>
          <StepsList className="steps-list">
            Add “tags” which help surface your question to members of the
            community.
          </StepsList>
          <StepsList className="steps-list">
            Review your question and post it to the site.
          </StepsList>
        </StepsUl>
      </InformBox>
      <QuestionContainer>
        <QuestionBox>
          <QuestionBoxTitle>Title</QuestionBoxTitle>
          <QuestionBoxSubTitle>
            Be specific and imagine you’re asking a question to another person.
          </QuestionBoxSubTitle>
          <QuestionContent
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            value={title}
            onChange={handleChangeTitle}
          ></QuestionContent>
          {isTitleValid ? (
            <NextButton disabled={!isTitleValid}>Next</NextButton>
          ) : (
            <InvalidNextButton>Next</InvalidNextButton>
          )}
        </QuestionBox>
        <DescribeContainer1>
          <DescribeTop>Wirting a good title</DescribeTop>
          <DescribeBottom>
            <WritingLogo src={Writing} />
            <div>
              <DescribeBottomContent>
                your title should summarize the problem.
              </DescribeBottomContent>
              <DescribeBottomContent>
                You might find that you have a better idea of your title after
                writing out the rest of the question.
              </DescribeBottomContent>
            </div>
          </DescribeBottom>
        </DescribeContainer1>
      </QuestionContainer>
      <QuestionContainer>
        <QuestionBox>
          <QuestionBoxTitle>
            What are the details of your problem?
          </QuestionBoxTitle>
          <QuestionBoxSubTitle>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </QuestionBoxSubTitle>
          <Draft
            value={content}
            onChange={handleChangeContent}
            minlength={20}
          />
          {isContentValid ? (
            <NextButton disabled={!isContentValid}>Next</NextButton>
          ) : (
            <InvalidNextButton>Next</InvalidNextButton>
          )}
        </QuestionBox>
        <DescribeContainer2>
          <DescribeTop>Introduce the problem</DescribeTop>
          <DescribeBottom>
            <WritingLogo src={Writing} />
            <DescribeBottomContent>
              Explain how you encountered the problem you’re trying to solve,
              and any difficulties that have prevented you from solving it
              yourself.
            </DescribeBottomContent>
          </DescribeBottom>
        </DescribeContainer2>
      </QuestionContainer>
      <QuestionContainer>
        <QuestionBox>
          <QuestionBoxTitle>
            What did you try and what were you expecting?
          </QuestionBoxTitle>
          <QuestionBoxSubTitle>
            Describe what you tried, what you expected to happen, and what
            actually resulted. Minimum 20 characters.
          </QuestionBoxSubTitle>
          <Draft value={subContent} onChange={handleChangeSubContent} />
          {isSubContentValid ? (
            <NextButton disabled={!isSubContentValid}>Next</NextButton>
          ) : (
            <InvalidNextButton>Next</InvalidNextButton>
          )}
        </QuestionBox>
        <DescribeContainer3>
          <DescribeTop>Expand on the problem</DescribeTop>
          <DescribeBottom>
            <WritingLogo src={Writing} />
            <div>
              <DescribeBottomContent>
                Show what you’ve tried, tell us what happened, and why it didn’t
                meet your needs.
              </DescribeBottomContent>
              <DescribeBottomContent>
                Not all questions benefit from including code, but if your
                problem is better understood with code you’ve written, you
                should include a
                <LinkAddress href="https://stackoverflow.com/help/minimal-reproducible-example">
                  minimal, reproducible example.
                </LinkAddress>
              </DescribeBottomContent>
              <DescribeBottomContent>
                Please make sure to post code and errors as text directly to the
                question (and{' '}
                <LinkAddress href="https://meta.stackoverflow.com/questions/285551/why-should-i-not-upload-images-of-code-data-errors">
                  not as images
                </LinkAddress>
                ), and{' '}
                <LinkAddress href="https://stackoverflow.com/help/formatting">
                  format them appropriately.
                </LinkAddress>
              </DescribeBottomContent>
            </div>
          </DescribeBottom>
        </DescribeContainer3>
      </QuestionContainer>
      <Tag />
    </MainBox>
  );
}
