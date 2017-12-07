import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shareActions from 'actions/share';

const mapStateToProps = state => {
  return {
    share: state.toJS().share,
    login: state.toJS().login
  }
};

const mapDispatchToProps = dispatch => {
  return {
    shareActions: bindActionCreators(shareActions, dispatch),
  }
};

@connect(mapStateToProps, mapDispatchToProps)

//受控组件和非受控组件
class Share extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.login);
    this.state = {
      title: '',
      content: ''
      
    };
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeContent(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.shareActions.addShare);
    console.log(this.props.share)
    this.props.shareActions.addShare({
      title: this.state.title,
      connect: this.state.content,
      categoryId: '',
      label: ''
    },this.props.login.data.token);
    
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div>发表文章</div>
        <form>
          <div className="form-group">
            <label>
              标题:
            </label>
            <input className="form-control" type="text" value={this.state.value} onChange={(event)=>{this.handleChangeTitle(event)}} />
          </div>
          <div className="form-group">
            <label>
              内容:
            </label>
            <input className="form-control" type="textarea" value={this.state.content} onChange={(event)=>{this.handleChangeContent(event)}} />
          </div>
          <button onClick={(event)=>{this.handleSubmit(event)}}>发表</button>
        </form>
      </div>
    );
  }
}

export default Share;