import React,{Component} from 'react';
import '../css/Leftmenu.css'

class Leftmenu extends Component{
  constructor(props){
    super(props);
    this.state={ 
      '상담신청':[
        '상담게시판',
        '지원하기',
        '자주 묻는 질문'
      ]
    }
  
  }
  
 

  render(){

    const now = this.props.lmenu_head; 
    const items = this.state[`${now}`]; 


    return(
      
      <>
      <div className='left_menu'>
        <h3>{this.props.lmenu_head}</h3>
        <ul>
        {items.map((v,i)=>{ 
          return(
            <li key={i}>
              <a href="/">{v}</a>
            </li>
          )
        })}
        </ul>
      </div>
      </>
    )
  }
}

export default Leftmenu