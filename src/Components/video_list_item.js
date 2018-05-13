import React from "react";

const ListItem = ({ video, onVideoSelect }) => {
  //   destructuring, {video} <=> const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li
      onClick={() => {
        onVideoSelect(video);
      }}
      className="list-group-item"
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div>
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;