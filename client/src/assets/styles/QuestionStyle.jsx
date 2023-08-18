import styled from 'styled-components';

export const LinkAddress = styled.a`
  color: rgb(0, 116, 204) !important;
  margin: 0px 4px 0px 4px;
  cursor: pointer;
  &:hover {
    color: rgb(53, 141, 250);
  }
`;
export const QuestionContainer = styled.div`
  display: flex;
  margin: 16px 0px 0px 0px;
  gap: 14px;
`;
export const QuestionBox = styled.div`
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid rgb(228, 230, 232);
  border-radius: 8px;
  width: 70%;
  max-width: 800px;
`;
export const QuestionBoxTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`;
export const QuestionBoxSubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
export const QuestionContent = styled.input`
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
export const Button = styled.button`
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
export const NextButton = styled(Button)`
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
`;
export const InvalidNextButton = styled.button`
  padding: 10.4px;
  margin: 8px 0 0;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background-color: rgb(151, 197, 252);
  border: none;
  border-radius: 6px;
`;
export const DescribeContainer1 = styled.div`
  width: 350px;
  height: 180px;
  background-color: #ffffff;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 6px;
`;
export const DescribeTop = styled.div`
  padding: 12px;
  font-size: 15px;
  background-color: rgb(248, 249, 249);
  border-bottom: 1px solid rgb(214, 217, 220);
`;
export const DescribeBottom = styled.div`
  margin: 16px;
  background-color: #ffffff;
  display: flex;
`;
export const DescribeBottomContent = styled.p`
  margin: 0 0 16px 16px;
  font-size: 12px;
`;
export const WritingLogo = styled.img`
  width: 48px;
  height: 48px;
`;
