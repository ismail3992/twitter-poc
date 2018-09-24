/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 100%;
    max-width: 100%;
    border-radius: 5px;
    margin: 10px 0 0 0;
`;

const image = ({ src, alt }) => <StyledImage src={src} alt={alt} />;

export default image;
