import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Consulting from './Consulting';
import Subtitle from '../component/Subtitle';
import MainContainer from '../component/MainContainer';
import Leftmenu from '../component/Leftmenu'

class Consult extends Component{
  render(){ 
    return(
      <>
       <BrowserRouter>
        <Subtitle subtitle='consult'/>
        <MainContainer>
          <Leftmenu 
            lmenu_head='상담신청'
          />
          
            <Switch>
              <Route exact path="/consult/consulting" component={Consulting}/>
            </Switch>
          
        </MainContainer>

        
      </BrowserRouter>
      </>
    )
  }
}

export default Consult