import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const Wrapper = styled.div`
  font-size: 24px;
  margin-bottom: 0.40em;
  color: green;
  font-weight: 5s000;
`;

const Heading = ({ text }) => <Wrapper>{text}</Wrapper>;

Heading.propTypes = {
  text: string.isRequired,
};

export default Heading;
