import { useState } from 'react';
import styled from 'styled-components';
import {
  QuestionContainer,
  QuestionBox,
  QuestionBoxTitle,
  QuestionBoxSubTitle,
  QuestionContent,
  Button,
  DescribeContainer1,
  DescribeTop,
  DescribeBottom,
  DescribeBottomContent,
  LinkAddress,
  WritingLogo,
  ErrorMessage,
} from '../assets/styles/QuestionStyle.jsx';
import Writing from './../assets/images/writing-logo.svg';
import Draft from '../components/Draft.jsx';
import Tag from '../components/Tag.jsx';
import DiscardDraft from '../components/DiscardDraft.jsx';
import { EditorState } from 'draft-js';
import { getData, saveData } from '../components/localStorage.js';

const MainBox = styled.main`
  padding: 0 24px 24px;
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
  const [isContentState, setIsContentState] = useState(
    EditorState.createEmpty(),
  );
  const [isSubContentState, setIsSubContentState] = useState(
    EditorState.createEmpty(),
  );
  const [askData, setAskData] = useState({
    title: '',
    content: '',
    subContent: '',
  });
  const [tagList, setTagList] = useState([]);
  const [isFocused, setIsFocused] = useState({
    selec1: false,
    selec2: false,
    selec3: false,
  });
  const [errorMsg, setErrorMsg] = useState({
    titleErr: '',
    contentErr: '',
    subContentErr: '',
    tagErr: '',
  });

  const handleChangeTitle = (e) => {
    setAskData({ ...askData, title: e.target.value });
  };
  const handleChangeContent = (el) => {
    setAskData({ ...askData, content: el });
    // console.log('content :', el);
  };
  const handleChangeSubContent = (el) => {
    setAskData({ ...askData, subContent: el });
    // console.log('subContent :', el);
  };
  const handleFocus = (value, key) => {
    setIsFocused({ ...isFocused, [key]: value });
  };
  const resetData = () => {
    setAskData({ title: '', content: '', subContent: '' });
    setIsContentState(EditorState.createEmpty());
    setIsSubContentState(EditorState.createEmpty());
    setTagList([]);
  };
  const postQuestion = () => {
    const newErrorMsg = {
      titleErr: '',
      contentErr: '',
      subContentErr: '',
      tagErr: '',
    };
    if (!askData.title || askData.title.length < 15) {
      newErrorMsg.titleErr = 'Title must be at least 15 characters';
    }
    if (askData.content.length < 20) {
      newErrorMsg.contentErr = 'Please enter at least 20 characters';
    }
    if (askData.subContent.length < 20) {
      newErrorMsg.subContentErr = 'Please enter at least 20 characters';
    }
    if (tagList.length < 1) {
      newErrorMsg.tagErr = 'Please enter at least one';
    }
    if (
      newErrorMsg.titleErr ||
      newErrorMsg.contentErr ||
      newErrorMsg.subContentErr ||
      newErrorMsg.tagErr
    ) {
      setErrorMsg(newErrorMsg);
    } else {
      const localData = getData('stackData');
      const newData = {
        questionId: localData[localData.length - 1].questionId + 1,
        ...askData,
        tags: tagList,
      };
      const newLocalData = [...localData, newData];

      setAskData({ title: '', content: '', subContent: '' });
      setTagList([]);
      setIsContentState(EditorState.createEmpty());
      setIsSubContentState(EditorState.createEmpty());
      setErrorMsg({
        titleErr: '',
        contentErr: '',
        subContentErr: '',
        tagErr: '',
      });
      saveData(newLocalData);

      console.log(getData('stackData'));
    }
  };

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
      <QuestionContainer
        onFocus={() => handleFocus(true, 'selec1')}
        onBlur={() => handleFocus(false, 'selec1')}
      >
        <QuestionBox>
          <QuestionBoxTitle>Title</QuestionBoxTitle>
          <QuestionBoxSubTitle>
            Be specific and imagine you’re asking a question to another person.
          </QuestionBoxSubTitle>
          <QuestionContent
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            value={askData.title}
            onChange={(e) => handleChangeTitle(e)}
          ></QuestionContent>
          <ErrorMessage>{errorMsg.titleErr}</ErrorMessage>
        </QuestionBox>
        {isFocused.selec1 && (
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
        )}
      </QuestionContainer>
      <QuestionContainer>
        <QuestionBox
          onFocus={() => handleFocus(true, 'selec2')}
          onBlur={() => handleFocus(false, 'selec2')}
        >
          <QuestionBoxTitle>
            What are the details of your problem?
          </QuestionBoxTitle>
          <QuestionBoxSubTitle>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </QuestionBoxSubTitle>
          <Draft
            isState={isContentState}
            setIsState={setIsContentState}
            handleChange={handleChangeContent}
          />
          <ErrorMessage>{errorMsg.contentErr}</ErrorMessage>
        </QuestionBox>
        {isFocused.selec2 && (
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
        )}
      </QuestionContainer>
      <QuestionContainer>
        <QuestionBox
          onFocus={() => handleFocus(true, 'selec3')}
          onBlur={() => handleFocus(false, 'selec3')}
        >
          <QuestionBoxTitle>
            What did you try and what were you expecting?
          </QuestionBoxTitle>
          <QuestionBoxSubTitle>
            Describe what you tried, what you expected to happen, and what
            actually resulted. Minimum 20 characters.
          </QuestionBoxSubTitle>
          <Draft
            isState={isSubContentState}
            setIsState={setIsSubContentState}
            handleChange={handleChangeSubContent}
          />
          <ErrorMessage>{errorMsg.subContentErr}</ErrorMessage>
        </QuestionBox>
        {isFocused.selec3 && (
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
        )}
      </QuestionContainer>
      <Tag tagList={tagList} setTagList={setTagList} errorMsg={errorMsg} />
      <Button onClick={postQuestion}>Post your question</Button>
      <DiscardDraft resetData={resetData} />
    </MainBox>
  );
}
