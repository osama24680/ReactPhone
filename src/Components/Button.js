import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  margin-right: 40px;
  font-size: 1.4rem;
  background-color: transparent;
  border:.05rem solid ;
  border-radius: .5rem;
  padding:0.2rem .5rem;
  cursor: pointer;
  margin:.2rem .5rem .2rem 0;
  transition: all .5s;
  color:${props => props.yellow? "var(--mainYellow)" :" var(--lightBlue)"};
  border-color: ${props => props.yellow? "var(--mainYellow)" :" var(--lightBlue)"};
  &:hover{
    background: ${props => props.yellow? "var(--mainYellow)" :" var(--lightBlue)"};;
    color:var(--mainBlue);
  }
  &:focus{
      outline: none;
  }
`;