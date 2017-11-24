require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class UserComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        like: false,
        count: 0,
    }
  }
  handleClick() {
    console.log('click')
    this.setState({like: !this.state.like})
  }

  render() {
    let  text = this.state.like  ?   'xihuan' :  'buxihuan'
    return (
      <div className="index">
        {this.state.like ? '1': '2'}
        <a onClick={(event)=>{this.handleClick(event)}}>点击我</a>
        <div>{text}</div>
      </div>
    );
  }
}

UserComponent.defaultProps = {
};

export default UserComponent;
