import styled from 'styled-components';
import Draft from '../components/Draft.jsx';
import Writing from './../assets/images/writing-logo.svg';
import { useState } from 'react';

const AskQuestion = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f8f9f9;
`;

const MainBox = styled.main`
  width: 100%;
  max-width: 1264px;
  margin: 0;
  border-left: 0;
  border-right: 0;
  padding: 0px 24px 24px;
  background-color: transparent;
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
  margin-left: 30px;
`;
const StepsList = styled.li`
  font-size: 13px;
  font-weight: 400;
  color: #3b4045;
  list-style-type: disc;
`;
const LinkAddress = styled.a`
  color: rgb(0, 116, 204) !important;
  margin: 0px 4px 0px 4px;
  cursor: pointer;
  &:hover {
    color: rgb(53, 141, 250);
  }
`;
const QuestionContainer = styled.div`
  display: flex;
  margin: 16px 0px 0px 0px;
  gap: 14px;
`;
const QuestionBox = styled.div`
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid rgb(228, 230, 232);
  border-radius: 8px;
  width: 70%;
  max-width: 800px;
`;
const TagBoxContainer = styled(QuestionBox)`
  margin: 16px 0px 0px 0px;
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
const InvalidNextButton = styled.button`
  padding: 10.4px;
  margin: 8px 0 0;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background-color: rgb(151, 197, 252);
  border: none;
  border-radius: 6px;
`;
const DescribeContainer1 = styled.div`
  width: 350px;
  height: 180px;
  background-color: #ffffff;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 6px;
`;
const DescribeContainer2 = styled(DescribeContainer1)`
  height: 150px;
`;
const DescribeContainer3 = styled(DescribeContainer1)`
  height: 300px;
`;
const DescribeTop = styled.div`
  padding: 12px;
  font-size: 15px;
  background-color: rgb(248, 249, 249);
  border-bottom: 1px solid rgb(214, 217, 220);
`;
const DescribeBottom = styled.div`
  margin: 16px;
  background-color: #ffffff;
  display: flex;
`;
const DescribeBottomContent = styled.p`
  margin: 0 0 16px 16px;
  font-size: 12px;
`;
const WritingLogo = styled.img`
  width: 48px;
  height: 48px;
`;
const TagBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0 0 0;
  padding: 7.8px 9.1px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 8px;
  ::placeholder {
    color: rgb(202, 206, 209);
  }
  &:focus-within {
    border-color: rgb(104, 167, 221);
    outline: none;
    box-shadow: 0 0 3px 3px rgb(225, 236, 248);
  }
`;
const TagItem = styled.div`
  display: flex;
  gap: 4px;
  padding: 5px;
  background-color: rgb(225, 236, 244);
  border-radius: 5px;
  color: rgb(57, 115, 156);
  font-size: 12px;
`;
const DeleteButton = styled.button`
  all: unset;
  width: 14px;
  height: 14px;
  text-align: center;
  color: rgb(57, 115, 157);
  border-radius: 2px;
  &:hover {
    background-color: rgb(57, 115, 157);
    color: rgb(225, 236, 244);
    width: 14px;
    height: 14px;
  }
`;
const TagInput = styled.input`
  border: none;
  outline: none;
  cursor: text;
`;

export default function Question() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subContent, setSubContent] = useState('');
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeSubContent = (e) => {
    setSubContent(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };
  const submitTagItem = () => {
    const updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };
  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem,
    );
    setTagList(filteredTagList);
  };

  const isTitleValid = title.length >= 15;
  const isContentValid = content.length >= 20;
  const isSubContentValid = subContent.length >= 20;

  return (
    <AskQuestion>
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
              Be specific and imagine you’re asking a question to another
              person.
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
                  Show what you’ve tried, tell us what happened, and why it
                  didn’t meet your needs.
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
                  Please make sure to post code and errors as text directly to
                  the question (and{' '}
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
        <TagBoxContainer>
          <QuestionBoxTitle>Tags</QuestionBoxTitle>
          <QuestionBoxSubTitle>
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </QuestionBoxSubTitle>
          <TagBox>
            {tagList.map((tagItem, index) => {
              return (
                <TagItem key={index}>
                  <span>{tagItem}</span>
                  <DeleteButton onClick={deleteTagItem}>X</DeleteButton>
                </TagItem>
              );
            })}
            <TagInput
              type="text"
              placeholder="e.g. (c flutter django)"
              onChange={(e) => setTagItem(e.target.value)}
              value={tagItem}
              onKeyPress={onKeyPress}
            />
          </TagBox>
          <NextButton>Next</NextButton>
        </TagBoxContainer>
      </MainBox>
    </AskQuestion>
  );
}
