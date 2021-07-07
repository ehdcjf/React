import React,{Component} from 'react';
import '../css/MainContainer.css'

class MainContainer extends Component{
  render(){ 
    return(
      <>
        <div className='main_container'>
        {this.props.children}
        </div>
      </>
    )
  }
}

export default MainContainer