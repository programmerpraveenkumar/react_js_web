import React, { Component } from "react";
class Header extends Component{
   
    render() {


        return (
            <div className="topbar">
      <a className="logo" href="javascript:void(0)">
        <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAOwBeAJXJ9VaZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QUcFAwZEBLpsAAAAO5JREFUSMdj2Hrw+v+///79pzb4++/f/60Hr/9n/Pvv338mRkYGWoB///8zMP7///8/Aw0BCyWaL99+wXDk7D2Gdx+/M3CwszDw8bAziAvxMfg5aVFuQe+Cgwzr91/FKodsARM5hu89cQen4eiALAs27LtC2zi4+eA1Cr8q2YnBzVqNgYWZiTo++PbzNwrf2UIFq+FkW4AO2NlYqBsHpACiM5pN/DSiDFzRGcUgIyFAOx9IiPLRLoj4eTgwIpuqFkgK85IfB/ji48jCrIFLRaMWjAQL/tGwSv73/z8D047DNxloYcm///8Zdhy+yQAAwrOldG/7uKoAAAAASUVORK5CYII=" />
      </a>
      <div className="search-box">
        <div className="input-group">
          <input aria-describedby="basic-addon2" className="form-control" placeholder="Search MyZoneLive" type="text" />
          <button className="input-group-addon pointer" id="basic-addon2">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="right-group">
        <div className="link-group">
          <a href="javascript:void(0)">
            <img src="https://i.imgur.com/5jInimY.jpg"/>Michael
          </a>
        </div>
        <div className="link-group">
          <a href="javascript:void(0)">Home</a>
        </div>
        <div className="notification-group">
          <div className="link-group">
            <a className="freqnotif" href="javascript:void(0)">
              <i className="fa fa-group"></i>
            </a>
          </div>
          <div className="link-group">
            <a className="msgnotif" href="javascript:void(0)">
              <i className="fa fa-comment"></i>
            </a>
          </div>
          <div className="link-group">
            <a className="notif" href="javascript:void(0)">
              <i className="fa fa-globe"></i>
            </a>
          </div>
          <div className="link-group">
            <a className="helpguide" href="javascript:void(0)">
              <i className="fa fa-question-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
        );
    }
}
export default Header;