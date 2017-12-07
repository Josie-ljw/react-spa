import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import { SET_COURSE_LIST } from '../actions/course-list';
let defaultData = [{
  title: 'Soda',
  subtitle: '高性能模版引擎',
  member: 0,
  comments: 0,
  href: 'javascript:0',
  bgColor: '#70c3ff',
  category: 'Javascript',
  categoryDesc: '没看过这些，怎么敢说懂js',
  logo: 'http://cdn.alloyteam.com/assets/img/sodalogo-4d18ed.png',
},
{
  title: 'OMI',
  subtitle: '开放现代的Web组件化框架',
  member: 20,
  comments: 100,
  href: 'http://alloyteam.com/',
  bgColor: '#fd6a7f',
  category: 'PHP',
  categoryDesc: '没看过这些，怎么敢说懂js',
  logo: 'http://cdn.alloyteam.com/assets/img/sodalogo-4d18ed.png',
},
{
  title: 'hello world',
  subtitle: '开放现代的Web组件化框架',
  member: 0,
  comments: 0,
  href: 'javascript:0',
  bgColor: '#7f8ea0',
  category: 'Node.js',
  categoryDesc: '没看过这些，怎么敢说懂js',
  logo: 'http://cdn.alloyteam.com/assets/img/sodalogo-4d18ed.png',
},
{
  title: 'hello world',
  subtitle: '开放现代的Web组件化框架',
  member: 0,
  comments: 0,
  href: 'javascript:0',
  bgColor: '#89d04f',
  category: 'Node.js',
  categoryDesc: '没看过这些，怎么敢说懂js',
  logo: 'http://cdn.alloyteam.com/assets/img/sodalogo-4d18ed.png',
}
]

const initState = fromJS({
  lists: defaultData
});

export default createReducer(initState, {
  [SET_COURSE_LIST]: (state, action) => {
    let data = action.data.length ? action.data : defaultData
    return state.merge({
      lists: data
    });
  }
})