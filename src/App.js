import React, { Component } from 'react';
import TweetList from './molecules/tweet-list'
import {NavBar,NavBarItem} from './atoms/Navbar'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { tweetName :"realDonaldTrump"}     
  }
  
  handleClick = (tweet) => {    
    this.setState({tweetName:tweet})    
  }
  

  render() {
    return (
      <div className="container">
      <NavBar> 
        <NavBarItem onClick={(e) => this.handleClick("realDonaldTrump", e)}>@realDonaldTrump</NavBarItem> 
        <NavBarItem onClick={(e) => this.handleClick("elonmusk", e)}> @elonmusk </NavBarItem> 
      </NavBar>
      <TweetList tweetName = {this.state.tweetName} />
      </div>
    );
  }
}

export default App;
