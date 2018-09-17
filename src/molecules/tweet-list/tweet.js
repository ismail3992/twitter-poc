import React from 'react'
import TweetCard from '../../atoms/Tweet/TweetCard';

const Tweet = (props) =>{
  const hashtags = props.entities.hashtags.map(hashtag => <div>{hashtag.text}</div>)
  const urls = props.entities.urls.map(url => <a href={url.url}> {url.url} </a>)
  var mediaArray = props.extended_entities
  let medias ='';
  const name = props.user.name 
  const screenName =  ' @'+props.user.screen_name
  if (mediaArray){
     medias = props.extended_entities.media.map(med => <img src= {med.media_url}/> )
  }
  return(
  <TweetCard>
  <h5>{ name } {screenName}</h5> 
  <p>{ props.text }</p>
  <div>{hashtags }</div>
  <div>{medias}</div>
  <div>{urls}</div>
  </TweetCard>
)

} 

export default Tweet