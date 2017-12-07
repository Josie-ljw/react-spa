require('normalize.css/normalize.css');

import "styles/app.less";

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginActions from 'actions/login';


const mapStateToProps = state => {
  return {
    login: state.toJS().login
  }
};

const mapDispatchToProps = dispatch => {
  return {
    LoginActions: bindActionCreators(LoginActions, dispatch),
  }
};

@connect(mapStateToProps, mapDispatchToProps)

class UserComponent extends React.Component {
  render() {
    return (
      <div className="index">
        {this.props.login.success}
      </div>
    );
  }
}

UserComponent.defaultProps = {
};

export default UserComponent;
