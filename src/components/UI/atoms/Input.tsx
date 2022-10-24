import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  font-size: 18px;
  background: rgb(18, 18, 20);
  border-color: rgb(18, 18, 20);
  color: rgb(255, 255, 255);
  padding: 0px 1em 0px;
  border-radius: 5px;
  outline: 0px;
  transition: border 0.2s ease 0s;
  border: 2px solid rgb(18, 18, 20);
  margin-top: 10px;

  &:focus {
    border-color: #8257e5;
  }
`;
