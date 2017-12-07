require('normalize.css/normalize.css');
import "styles/app.less";
import React from 'react';
import { browserHistory } from 'react-router';
import Banner from 'components/banner';
import Article from 'components/article';
import Popular from 'components/popular-article';

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

class indexContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Banner />
        <Article />
        <Popular />
      </div>
    )
  }
}


export default indexContainer;
