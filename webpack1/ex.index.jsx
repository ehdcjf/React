//리액트

// const React = require('react')
// const ReactDOM = require('react-dom')
// const LoginBox = require('./loginBox.jsx')
// const {Component} = React

import React,{Component} from 'react' 
import ReactDOM  from 'react-dom'
import LoginBox from './loginBox.jsx'


//import구분은 자바스크립트 버전업이 되면서 생김 노드js구문이 아님 
// require는 node js 처리가 됨. 

class App extends Component{ 
  render(){ 
    return(
      <> 
      <div>hello Bable!!</div>
      <LoginBox />
      </>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.querySelector('#root'),
)