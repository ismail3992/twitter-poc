import styled from 'styled-components';

export const NavBar = styled.div`
background-color: #fff;
position: fixed;
top: 0;
width: 100%;
margin: 0;
padding: 0;
display: block;
color: #black;
text-decoration: none;
box-shadow: 0 0 1px #a9a9a9;
`;


export const NavBarItem = styled.a`
float: left;
display: block;
color: #66757f;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
cursor:pointer;
:hover{
  color: #1DA1F2;
  border-bottom: 2px solid;
}`;
