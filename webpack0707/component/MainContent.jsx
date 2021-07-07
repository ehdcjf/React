import React,{Component} from 'react';
import '../css/MainContent.css'

class MainContent extends Component{
  render(){ 
    return(
      <div className='main_content'>
        {this.props.children}
      </div>
    )
  }
}

export default MainContent