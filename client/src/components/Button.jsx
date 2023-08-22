import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background-color: ${(props) => props.backcolor || 'rgb(11, 149, 255)'};
  padding: 8px 10.4px;
  margin: ${(props) => props.margin || '0'};
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 13px;
  font-weight: ${(props) => props.weight || 'normal'};
  color: ${(props) => props.color || '#ffffff'};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hovercolor || 'rgb(36, 105, 194)'};
  }
`;
