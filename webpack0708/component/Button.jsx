  
import React,{Component} from 'react'
import UserContext from '../Store/User'

class Button extends React.Component{
    name = "하이루 방가방가"
    static contextType = UserContext
    render(){
      console.log(this.context);
        return (
            <>
              <ul>
                <li>{this.context.userid}</li>
                <li>{this.context.signaturesound}</li>
                <li>{this.context.userjob}</li>
              </ul>
              <button onClick={()=>this.props.onClick(this.name)}>로그인</button>
              <button onClick={()=>alert('userid')}>로그인2</button>
            </>
        )
    }
}

export default Button