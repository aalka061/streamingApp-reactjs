import React from 'react'


const VideoListItem = (props) => {
   const videoTitle = props.video.snippet.title;
   const videoImageUrl = props.video.snippet.thumbnails.default.url;

    return (
        <li onClick={function(){props.onVideoSelect(props.video)}} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={videoImageUrl} />
                </div>
                <div className="media-body"> 
                    <div className="media-heading">
                     {videoTitle}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;