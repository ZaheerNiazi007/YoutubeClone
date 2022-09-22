import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

const VideoCard = ({image, title, channel, views, timestamp, channelImage}) => {
    return (
        <div className='gallery videocard zoom'>
       
          <img className='videocard__image' src={image} alt='' />
          <div className="videocard__info">
            <Avatar 
              className='videocard__avatar' 
              alt={channel} 
              src={channelImage} 
            />
            <div className="videocard__text text">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{views} views • {timestamp}</p>
             
            
            </div> 
            
          </div>
          <div className='video_button'>  <button className='btn'><WatchLaterOutlinedIcon/><span>WATCH LATER</span></button>
              <button className='btn'><PlaylistAddIcon/><span>ADD TO QUEUE</span></button></div>
          </div>
    )
}

export default VideoCard;
