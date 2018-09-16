import styled from 'styled-components';

export const NavBar = styled.div`
background-color: #d6f0fb;
position: fixed;
top: 0;
width: 100%;
margin: 0;
padding: 0;
display: block;
color: #black;
text-decoration: none;
`;


export const NavBarItem = styled.a`
float: left;
display: block;
color: #black;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
:hover{
  background: #4fa5eb;
  color: black;

}`;
