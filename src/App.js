import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Posts from './components/Posts';
import Trending from './components/Trending';
import POSTRequest from './components/http';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      location:[]
    };
  }
  componentWillMount(){
    POSTRequest("getLocations","").then(res=>{
     this.setState({location:res});
    })
  }
  render() {


    return (
      <div>
      <h1>this is test deploy txt change</h1>
    <Header></Header>
    <div className="left-content">
      <div className="global-links">
        <a href="javascript:void(0)">
          <img src="http://i.imgur.com/5jInimY.jpg" /> First Last
          <span className="counter">1</span>
        </a>
        <a className="activepage" href="javascript:void(0)">
          <img src="http://brassnecktheatre.com/wp-content/uploads/2013/11/news-icon.png" /> News Feed
          <span className="counter">
            <i className="fa fa-ellipsis-h"></i>
          </span>
        </a>
        <a href="javascript:void(0)">
          <img src="http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Messages-icon.png" /> Messenger
          <span className="counter">1</span>
        </a>
        <div className="group-content">
          <h4>Other Locations</h4>
          {this.state.location.map((item, key) =>
          <a href="javascript:void(0)">
            <img src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" /> {item.name}
            <span className="counter">1</span>
          </a>
          )}
          <a href="javascript:void(0)">
            <i className="fa fa-caret-down"></i>
            <span>See More...</span>
          </a>
        </div>
        
       
      </div>
    </div>
    <div className="feed-content">
      <div className="recentcontainer">
        <ul className="newpostheader nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-pencil"></i>
              <span>Create a Post</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-book"></i>
              <span>Media Album</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-video-camera"></i>
              <span>Live Video</span>
            </a>
          </li>
        </ul>
        <div className="newpost">
          <textarea placeholder="Post Something..."></textarea>
        </div>
        <ul className="newpostfooter nav nav-tabs nav-justified">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-picture-o"></i>
              <span>Photo/Video</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-smile-o"></i>
              <span>Feeling/Activity</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-ellipsis-h"></i>
            </a>
          </li>
        </ul>
      </div>
      <Posts></Posts>
    
    </div>
    <div className="thirdcol-content">
      
      <div className="section-content">
        <a href="javascript:void(0)">
          <i className="fa fa-calendar"></i>
          1 event invite
        </a>
      </div>
       <Trending></Trending>
      <div className="section-content">
        <h4>
          Sponsored
        </h4>
        
        <a href="javascript:void(0)">
          Create Ad
        </a>
        <div>
          <a href="javascript:void(0)">
            <img src="http://i.imgur.com/pZ2VCSf.png"/>
            <div>
              Play at Global Poker!
              <div>
                <small>GlobalPoker.com</small>
              </div>
            </div>
            <div>
              Real Poker. Real Winnings. Legally Cash Out via PayPal
            </div>
          </a>
        </div>
        <div>
          <a href="javascript:void(0)">
            <img src="http://i.imgur.com/2miHaRa.png"/>
            <div>
              How To Start Your Own Social Media Marketing Agency and Get Small Businesses To Hire You
            </div>
            <div>
              Tai Lopez went from broke & sleeping on his mom's sofa to becoming a social media mogul an...
            </div>
          </a>
        </div>
      </div>
      <div className="section-content">
        <a href="javascript:void(0)">English (US)</a> · <a href="javascript:void(0)">Español</a> · <a href="javascript:void(0)">Português (Brasil)</a> · <a href="javascript:void(0)">Français (France)</a> · <a href="javascript:void(0)">Deutsch</a>
      </div>
    
      <div>
        <a href="javascript:void(0)">Privacy</a> · <a href="javascript:void(0)">Terms</a> · <a href="javascript:void(0)">Advertising</a> · <a href="javascript:void(0)">Ad Choices</a> · <a href="javascript:void(0)">Cookies</a> · <a href="javascript:void(0)">More</a>
        <p>
          MyZoneLive © 2017
        </p>
      </div>
    </div>
    <div className="right-content">
     
    </div>
    </div>
    )
  }
}


export default App;
