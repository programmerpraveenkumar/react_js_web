import React, { Component } from 'react';
import POSTRequest from './http';
export default class Trending extends Component{
    state = {
      postss: []
  }
    //   constructor(props) {
    //       super(props);
        
    //   }

      componentWillMount(){
        POSTRequest("getTrending","").then(res=>{
         this.setState({postss:res});
        })
      }
     render() {
          return (
            <div className="section-content">
            <h4>
              Trending
              
           
              <a href="javascript:void(0)">
                <i className="fa fa-video-camera"></i>
              </a>
            
              <a href="javascript:void(0)">
                <i className="fa fa-futbol-o"></i>
              </a>
             
              <a href="javascript:void(0)">
                <i className="fa fa-flask"></i>
              </a>
            
              <a href="javascript:void(0)">
                <i className="fa fa-balance-scale"></i>
              </a>
            
              <a className="activetrend" href="javascript:void(0)">
                <i className="fa fa-line-chart"></i>
              </a>
            </h4>
            <div className="trend-feed">
              <ul>
              {this.state.postss.map((item, key) =>
                <li>
                  <a href="javascript:void(0)">{item.location_name}</a>
                        <span>{item.content}</span>
                </li>
              )}
              </ul>
              <div>
                <a href="javascript:void(0)">
                  <i className="fa fa-caret-down"></i> 
                  See More
                </a>
                <a href="javascript:void(0)">
                  <i className="fa fa-question"></i> 
                </a>
              </div>
            </div>
          </div>
          )
    }
}