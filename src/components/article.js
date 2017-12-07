require('normalize.css/normalize.css');
import "styles/app.less";
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseListActions from 'actions/course-list';

const mapStateToProps = state => {
  return {
    courseList: state.toJS().courseList,
    login: state.toJS().login,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    courseListActions: bindActionCreators(courseListActions, dispatch),
  }
};

@connect(mapStateToProps, mapDispatchToProps)

class Article extends React.Component {
  componentDidMount() {
    this.props.courseListActions.getCourseList();
  }
  render() {
    return (
      <div>
        <div className="course-list">
          <div className="module-header">
            OpenCourse / 开源项目
          <div className="subheading">种类众多的开源项目，让你爱不释手</div>
          </div>
          {
            this.props.courseList.lists && this.props.courseList.lists.map((item, index) => {
              return <div className="col-md-3" key={index}>
                <div className="course-item" style={{backgroundColor:item.bgColor}}>
                  <a href={item.href} onClick={(event) => { this.handleClick(event) }}>
                    <div className="course-img">
                      <img src={item.logo} alt="course-img"/>
                    </div>
                    <div className="course-title">{item.title}</div>
                    <div className="course-subtitle">{item.subtitle}</div>
                  </a>
                  <i className="light"></i>
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Article;
