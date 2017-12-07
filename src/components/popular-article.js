import React from 'react';
import "styles/app.less";
import { browserHistory } from 'react-router';

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
class Popular extends React.Component {
  render() {
    return (
      <div>
        <div className="course-list">
          <div className="module-header">
            Blog / 博客
            <div className="subheading">
              最新技术发展,业界前沿博客
            </div>
          </div>
          <div className="popular-module">
            <div className="popular-header">热门博客</div>
            {
              this.props.courseList.lists.map((item, index) => {
                return <a className="popular-article" href={item.href} key={index}>
                    {item.title}
                    <div className="author">josie</div>
                </a>
              })
            }
          </div>
          <div className="popular-module article-category">
            <div className="popular-header">博客分类</div>
            {
              this.props.courseList.lists.map((item, index) => {
                return <a className="category-list" href={item.href} key={index}>
                  <div className="category-info">
                    <div className="category-icon">
                      <img src="http://cdn.alloyteam.com/assets/img/icon_js-1aeaf5.png" alt="category-logo"/>
                    </div>
                    <div className="category-desc">
                      <h3>{item.category}</h3>
                      <div className="gray-medium text-14">没看过这些，怎么敢说懂js</div>
                    </div>
                  </div>
                </a>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Popular;