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

class Login extends React.Component {
  handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.refs.Username.value);
    var name = this.refs.Username.value;
    localStorage.setItem('name', JSON.stringify(name));
    this.props.LoginActions.goLogin('wuli','123');
  }
  handleRegister(ev) {
    ev.preventDefault();
    console.log(this.refs.Username.value);
    this.props.LoginActions.goRegister('wuli','123');
  }
  render() {
    return (<div className="login-page">
        <div className="container">
          <form className="login-module">
            <div className="login-title">登录</div>
            <div className="form-group">
              <label>用户名</label>
              <input className="form-control" ref="Username"  type="text" placeholder="请输入用户名" />
            </div>
            <div className="form-group">
              <label>密码</label>
              <input className="form-control" ref="Password"  type="password" placeholder="请输入密码" />
            </div>
            <div className="form-group">
              <div className="text-center"><button className="btn-login" onClick={ev=>this.handleSubmit(ev)}>提交</button></div>
              <a className="btn-register" onClick={ev=>this.handleRegister(ev)}>去注册 ></a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;