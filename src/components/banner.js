import React from 'react';
import "video-react/dist/video-react.css";
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseListActions from 'actions/course-list';
import { Player, ControlBar, ReplayControl, ForwardControl, CurrentTimeDisplay,
 TimeDivider, PlaybackRateMenuButton, VolumeMenuButton, BigPlayButton} from 'video-react';
import cs from 'classnames';

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

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      navTop: false
    };
  }
  componentDidMount(){
    window.addEventListener('scroll',()=>{this.handleScroll()});
  }
  handleSGoShare() {
    //判断是否登录然后进行跳转
    if(this.props.login.success) {
      browserHistory.push('/share');
    }else {
      browserHistory.push('/login');
    }
  }
  handleScroll(){
    let sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(!this.state.navTop && sTop >= 10){
       this.setState({
         navTop: true
       })
    }
    if(sTop < 10){
       this.setState({
         navTop:false
       })
    }
  }
  render() {
    return (
      <div>
        <div ref="tab" className={cs({'topbar-fixed':this.state.navTop},'topbar')}>
          <div className="team-logo">
            FEZ-Blog
          </div>
          <ul className="top-banner">
            <li><a onClick={() => { this.handleSGoShare() }}>登录</a></li>
            <li className="user-avatar">
              josie
            </li>
          </ul>
        </div>
        <div className="banner-player">
          <Player poster="https://isuxdesign-1251263993.file.myqcloud.com/detail/upload/toutu333.png" autoPlay>
            <source src="http://media.w3.org/2010/05/bunny/movie.mp4" />
            <ControlBar autoHide={false} disableDefaultControls={true}>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton
                rates={[5, 2, 1, 0.5, 0.1]}
                order={7.1}
              />
              <VolumeMenuButton />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
    )
  }
}

export default Banner;




