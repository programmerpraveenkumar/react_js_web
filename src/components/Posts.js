import React, { Component } from "react";
import POSTRequest from './http';


class Posts extends Component{
  state = {
    posts: []
}
    constructor(props) {
        super(props);
      
    }
    componentWillMount(){
      POSTRequest("getFeeds","").then(res=>{
       this.setState({posts:res});
      })
    }
   render() {
        return (
            <div>
{this.state.posts.map((item, key) =>
<div className="recentcontainer">
        <div className="newpostheader">
          <a href="javascript:void(0)">
            <img src="http://i.imgur.com/5jInimY.jpg" />
<span className="name">{item.username} </span>
          </a>
          <span>Posted <a href="javascript:void(0)">in  </a> <a href="javascript:void(0)">{item.location_name}</a>.</span>
          <div>
            <a className="date" href="javascript:void(0)">44 mins</a>
            <a href="javascript:void(0)">
              <i className="fa fa-globe"></i>
            </a>
          <div className="rightsideofpost">
            <a className="follow" href="javascript:void(0)">
              <i className="fa fa-star"></i>
            </a>
            <a className="personpostmenu" href="javascript:void(0)">
              <i className="fa fa-caret-down"></i>
            </a>
          </div>
          </div>
      </div>
        <div className="newpost">
          <div className="postcontent">
          {item.content}
          </div>
        </div>
        <ul className="newpostfooter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-thumbs-up"></i>
              <span>Like</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" title="Leave a comment">
              <i className="fa fa-comment-o"></i>
              <span>Comment</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
              <i className="fa fa-share"></i>
              <span>Share</span>
            </a>
          </li>
        </ul>
        <ul className="community-counter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-thumbs-up"></i>
              <span>{item.like_count}</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-comment-o"></i>
              <span>{item.comment_count}</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-share"></i>
              <span>{item.comment_count}</span>
            </a>
          </li>
        </ul>
        <div className="commentpost">
          <div className="input-group">
            <a href="javascript:void(0)">
              <img src="http://i.imgur.com/5jInimY.jpg" />
            </a>
    
            <textarea className="form-control" placeholder="Write a comment..."></textarea>
            <div className="input-group-btn">
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-smile-o"></i>
              </a>
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-picture-o"></i>
              </a>
              <a className="btn btn-default" href="javascript:void(0)">
                <i className="fa fa-gift"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
            </div>

        );
    }
}

export default Posts;
