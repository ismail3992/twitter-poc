/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
// import { array } from 'prop-types';
import TweetCard from '../../molecules/TweetCard';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  height: 100%;
  flex: none;
  background: #e6ecf0;
  width: auto;
  margin: 0 auto;
`;


const TweetList = ({ tweets }) => {
  const tweetsComponent = tweets.map(tweet => (<TweetCard
    text={tweet.text}
    handleScreenName={tweet.username}
    hashtags={tweet.hashtags}
    media={tweet.media}
    urls={tweet.urls}
  />
  ));
  return (
    <Wrapper>{tweetsComponent}</Wrapper>
  );
};

// TweetList.propTypes = {
//   tweets: array,
// };

export default TweetList;
