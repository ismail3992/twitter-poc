import React from 'react'
import fetch from 'isomorphic-fetch'
import Tweet from './tweet'
// import TweetUl from '../../atoms/Tweet/TweetUl';
// import TweetLI from '../../atoms/Tweet/TweetLI';

class TweetList extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      totalPages: null,
      scrolling: false,
      tweetName:  this.props.tweetName
    }
    this.loadContacts()  
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
    
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.tweetName !== this.props.tweetName){
      console.log("nextProps.tweetName",nextProps.tweetName)
        this.setState({tweetName:nextProps.tweetName,tweets:[]},(e) => {
          this.loadContacts()
        })
    }
}

  // componentDidUpdate() {
  //   var tweetName = this.state.tweetName
  //   this.scrollListener = window.addEventListener('scroll', (e) => {
  //     this.handleScroll(e)
  //   })
  // }
  
  handleScroll = () => {
    const { scrolling, totalPages, page} = this.state
    if (scrolling) return
    if (totalPages <= page) return
    var lastLi = document.querySelector('ul.tweets > li:last-child')
    if(lastLi){
      var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
      var pageOffset = window.pageYOffset + window.innerHeight
      var bottomOffset = 20
      if (pageOffset > lastLiOffset - bottomOffset) {
        this.loadMore()
      }

    }
  }

  loadContacts = () => {
    const {tweets } = this.state
    let tweetName = this.state.tweetName
    console.log("load Contacts",tweetName )
    var url = ''
    if(tweets.length>0){
      const max_id = tweets.slice(-1)[0].id
      url = `http://35.154.80.39:3000/${tweetName}/?max_id=${max_id}`
    }  
    else{
     url = `http://35.154.80.39:3000/${tweetName}`
    }

    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({
        tweets: tweets.concat(json),
        scrolling: false,
        totalPages: json.total_pages,
      }))
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page+1,
      scrolling: true,
    }), this.loadContacts)
  }

  render() {
    return <ul className="tweets tweet-container">
      {
        this.state.tweets.map(tweet => <li key={tweet.id}>
          <Tweet {...tweet} />
        </li>)
      }
    </ul>
  }
}

export default TweetList