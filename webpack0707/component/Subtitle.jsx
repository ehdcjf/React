import React,{Component} from 'react';
import '../css/Subtitle.css'

class Subtitle extends Component{
  render(){ 
    return(
      <>
        <div className='sub_title'>
         {this.props.subtitle}
        </div>
      </>
    )
  }
}

export default Subtitle