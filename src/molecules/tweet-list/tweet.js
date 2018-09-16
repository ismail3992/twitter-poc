import React from 'react'

const Tweet = (props) =>{
  const hashtags = props.entities.hashtags.map(hashtag => <div>{hashtag.text}</div>)
  const urls = props.entities.urls.map(url => <div>{url.url}</div>)
  var mediaArray = props.extended_entities
  let medias ='';
  if (mediaArray){
     medias = props.extended_entities.media.map(med => <img src= {med.media_url}/> )
  }
  return(<div className="tweet">
  <div>{ props.id_str }</div>
  <div>{ props.user.screen_name }</div>
  <div>{ props.text }</div>
  <div>{hashtags }</div>
  <div>{medias}</div>
  <div>{urls}</div>
</div>
)

} 

export default Tweet