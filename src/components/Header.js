import React, { Component } from 'react';
import {routes} from '../routes/routes';

class Header extends Component {

  getInitialState(){
      let userProfile = window.userProfile;

      return {given_name: userProfile.given_name || 'N/A'}
  }

  render() {
    var self = this;
    let routeName = this.props.routePage;
    let routeCollection = routes.props.children;
    let routeIterator = (routeCollection instanceof Array) ? routeCollection : [routeCollection];

    return (
      <nav className="navbar navbar-trans" role="navigation">
          <div classNameName="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapsible">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand text-danger" href="#">App Header Label</a>
              </div>
              <div className="navbar-collapse collapse" id="navbar-collapsible">
                  <ul className="nav navbar-nav navbar-left">
                      {
                        routeIterator.map(route => {
                          let routeProps = route.props;
                          let className = (routeName === routeProps.component.displayName) ? "active": "inactive";

                          if(routeProps.href && routeProps.linkLabel)
                            return <li className={className}><a href={routeProps.href}>{routeProps.linkLabel}</a></li>
                        })
                      }
                      <li>&nbsp;</li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                      <li className="userProfile">
                        <span className="userLabel">{self.state && self.state.given_name ? 'Hello ' + self.state.given_name : undefined}&nbsp;</span>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-square fa-stack-2x"></i>
                          <i className="fa fa-user fa-stack-1x fa-inverse" style={{color:'#6ca439'}}>
                          </i>
                        </span>
                      </li>
                      <li><img className="logoImg" src="/dist/assets/images/partner_catalyst_logo.png" width="175"/></li>
                  </ul>
              </div>
          </div>
     </nav>
    );
  }

}

export default Header;
