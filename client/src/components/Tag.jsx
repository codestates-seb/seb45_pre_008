import { useState } from 'react';
import styled from 'styled-components';
import {
  QuestionContainer,
  QuestionBox,
  QuestionBoxTitle,
  QuestionBoxSubTitle,
  NextButton,
  DescribeContainer1,
  DescribeTop,
  DescribeBottom,
  DescribeBottomContent,
  LinkAddress,
  WritingLogo,
} from './../assets/styles/QuestionStyle.jsx';
import Writing from './../assets/images/writing-logo.svg';

const TagBoxContainer = styled(QuestionBox)`
  margin: 0 0 64px 0;
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
const DescribeContainer4 = styled(DescribeContainer1)`
  height: 240px;
`;

export default function Tag() {
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState([]);

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

  return (
    <QuestionContainer>
      <TagBoxContainer>
        <QuestionBoxTitle>Tags</QuestionBoxTitle>
        <QuestionBoxSubTitle>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
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
            className="tag-input"
            type="text"
            placeholder="e.g. (c flutter django)"
            onChange={(e) => setTagItem(e.target.value)}
            value={tagItem}
            onKeyPress={onKeyPress}
          />
        </TagBox>
        <NextButton>Next</NextButton>
      </TagBoxContainer>
      <DescribeContainer4>
        <DescribeTop>Adding tags</DescribeTop>
        <DescribeBottom>
          <WritingLogo src={Writing} />
          <div>
            <DescribeBottomContent>
              Tags help ensure that your question will get attention from the
              right people.
            </DescribeBottomContent>
            <DescribeBottomContent>
              Tag things in more than one way so people can find them more
              easily. Add tags for product lines, projects, teams, and the
              specific technologies or languages used.
            </DescribeBottomContent>
            <DescribeBottomContent>
              <LinkAddress href="https://stackoverflow.com/help/tagging">
                Learn more about tagging
              </LinkAddress>
            </DescribeBottomContent>
          </div>
        </DescribeBottom>
      </DescribeContainer4>
    </QuestionContainer>
  );
}
