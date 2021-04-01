import React from "react";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PublishIcon from "@material-ui/icons/Publish";
import "./Post.css";

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">
        <div className="post__top">
          <MoreHorizIcon className="post__dots" />
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>

        <div className="post__bottom">{message}</div>
        <div className="post__image">
          <img src={image} alt="" />
        </div>
        <div className="post__options">
          <div className="post__option">
            <ChatBubbleOutlineIcon />
            <p>{Math.floor(Math.random()*100)}</p>
          </div>
          <div className="post__option">
            <RepeatIcon />
            <p>{Math.floor(Math.random()*100)}</p>
          </div>
          <div className="post__option">
            <FavoriteBorderIcon />
            <p>{Math.floor(Math.random()*100)}</p>
          </div>
          <div className="post__option">
            <PublishIcon />
          </div>
        </div>
      </div>
    );
}

export default Post;
