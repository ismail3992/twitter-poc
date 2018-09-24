/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import Header from '../../molecules/Header';
import TweetList from '../../organisms/TweetList';

const TweetListWrapper = styled.div`
  margin-top: 50px;
`;

const StyledLoader = styled.div`
  text-align: center;
`;

const TweetPage = ({
  headerItems, tweets, loadContacts, onHeaderItemClick,
}) => {
  const loader = <StyledLoader>Loading ...</StyledLoader>;
  return (
    <div>
      <Header headerItems={headerItems} onHeaderItemClick={onHeaderItemClick} />
      <TweetListWrapper>
        <InfiniteScroll loadMore={loadContacts} hasMore loader={loader}>
          <TweetList tweets={tweets} />
        </InfiniteScroll>
      </TweetListWrapper>
    </div>
  );
};

export default TweetPage;
