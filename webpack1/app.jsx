
import React,{Component} from 'react' 
import FunctionComp from './component/FunctionComp'
import ClassComp from './component/ClassComp'


class App extends Component{ 
  render(){ 
    return(
      <> 
      <h1>Hello React!!</h1>
      <ul className='Comp'>
        <ClassComp />
        <FunctionComp/>
        <ClassComp />
        <FunctionComp/>
      </ul>
      </>
    )
  }
}

export default App 