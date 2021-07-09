import React,{Component} from 'react'
import UserContext from '../Store/User'
import LoginBox from './LoginBox'

class App extends Component{
    state = {
        loginTxt:'login',
        user:{ 
          userid:'mmm',
          signaturesound:'hwohwohwo',
          userjob:'king'
        }
    }


    render(){
        return (
           <>
           <UserContext.Provider value={this.state.user}>
                <LoginBox v={this.state.loginTxt} /> {/* JSX 영역에서 Javascript를 사용할려면 { } */}
           </UserContext.Provider>
           </>
        )
    }
}

export default App