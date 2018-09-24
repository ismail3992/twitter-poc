import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Images';
/* eslint react/prop-types: 0 */
import Heading from '../../atoms/Heading';

const StyledWrapper = styled.div`
    border: 1px;  
    border-color:grey;
    padding: 20px;
    width: 400px;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color:#fff;
    box-shadow: 1px 3px 4px #dedede;
    
`;
const TweetCard = ({
  text, handleScreenName, hashtags, media, urls,
}) => (
  <StyledWrapper>
    <Heading text={handleScreenName} />
    <p>{text}</p>
    <div>{hashtags}</div>
    {media && <Image src={media} alt="image.png" />}
    <div>{urls}</div>
  </StyledWrapper>
);

export default TweetCard;
