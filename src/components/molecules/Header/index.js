/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import HeaderMenuItem from '../../atoms/HeaderMenuItem';

const StyledHeader = styled.div`
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    display: block;
    color: #black;
    text-decoration: none;
    box-shadow: 0 0 1px #a9a9a9;
`;

// [ { handle: "seniorly", text: "Seniorly USA" }]
const Header = ({ headerItems, onHeaderItemClick }) => {
  const menuItems = headerItems.map(item => (
    <HeaderMenuItem onClick={() => { onHeaderItemClick(item); }} text={item.text} />
  ));
  return (
    <StyledHeader>
      {menuItems}
    </StyledHeader>
  );
};

export default Header;
