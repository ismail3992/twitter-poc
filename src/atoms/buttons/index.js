import styled from 'styled-components';

const Button = styled.button`
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;

  /* Color the border and text with theme.main */
  color: green;
  border: 2px solid ${props => props.theme.main};
`;

export default Button;