import styled from 'styled-components';

export const StyledComponentsContainer = styled.section`
  border: 1px solid black;
  margin-bottom: 50px;
  background-color: aqua;
  padding: 25px;
`;

export const Title = styled.h4`
  font-size: 30px;
  color: ${props => props.isYellow && 'yellow'};
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
`;