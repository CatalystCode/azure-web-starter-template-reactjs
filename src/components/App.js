import React, { PropTypes, Component } from 'react';

export default class App extends Component {
   render() {
    return(
      <div>
        <h1>Body Content</h1>
        {this.props ? this.props.children : undefined}
      </div>
    );
  }
};
