
import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Business from './pages/Business'
import RnD from './pages/Rnd'
import Company from './pages/Company'
import Consult from './pages/Consult'

class App extends Component{ 
  render(){ 
    return(
      <> 
      <BrowserRouter>
        <Navbar /> 

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/company" component={Company}/>
          <Route path="/business" component={Business}/>
          <Route path="/rnd" component={RnD}/>
          <Route path="/consult" component={Consult}/>
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App 