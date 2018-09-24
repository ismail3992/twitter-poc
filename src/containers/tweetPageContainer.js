import React from 'react';
import fetch from 'isomorphic-fetch';
import TweetPage from '../components/pages/TweetPage';
import config from '../config';


class TweetPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetName: 'seniorly',
      tweets: [],
    };
  }

onHeaderItemClick = (tweetName) => {
  const { handle } = tweetName;
  this.setState({
    tweets: [],
    tweetName: handle,
  });
}

loadContacts = () => {
  const {
    tweetName,
    tweets,
  } = this.state;
  let url = `${config.host}${tweetName}`;
  if (tweets.length > 0) {
    const maxId = tweets.slice(-1)[0].id;
    url = `${config.host}${tweetName}/?max_id=${maxId}`;
  }
  fetch(url)
    .then(response => response.json())
    .then(json => this.setState({
      tweets: tweets.concat(json),
    }));
}


render() {
  const tweetArray = [];
  const headerItems = [{ handle: 'seniorly', text: 'Seniorly USA' }, { handle: 'elonmusk', text: 'Elon Musk' }];
  const { tweets } = this.state;
  if (tweets.length === 0) {
    this.loadContacts();
  } else {
    tweets.map((tweet) => {

      const tweetObject = {
        text: tweet.text,
        username: tweet.user.name,
      };
      tweetObject.urls = tweet.entities.urls.map(url => url.url);
      const { extended_entities } = tweet;
      if (extended_entities && extended_entities.media) {
        tweetObject.media = extended_entities.media.map(med => med.media_url)[0];
      }
      tweetArray.push(tweetObject);
      return null;
    });
  }
 return <TweetPage headerItems={headerItems} tweets={tweetArray} loadContacts={this.loadContacts} onHeaderItemClick={this.onHeaderItemClick} />;
}
}

export default TweetPageContainer;
