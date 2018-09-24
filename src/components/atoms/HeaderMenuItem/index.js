import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';

const StyledLink = styled.a`
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
  }
`;

const HeaderMenuItem = ({ text, onClick }) => <StyledLink onClick={onClick}>{text}</StyledLink>;

HeaderMenuItem.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
};

export default HeaderMenuItem;
