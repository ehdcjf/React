import React,{useContext,useState} from 'react'; 
import Store from './Store/Context'
import ThreeDotBtn from '../action_button/ThreeDotBtn';


const CommentItem = ({id,content,date,index,target,handleTarget}) =>{
  const [input,setInput] = useState(content)
  const {state,dispatch} = useContext(Store); 


  const handleChange = (e) => { 
    setInput(e.target.value)
  } 

  const handleEnter = (e)=>{
    if(e.key === 'Enter'){
      dispatch({type:'UPDATE',payload:{
        index:index,
        content:input,
      }})
      handleTarget(Infinity)
    }

  }


  const handleDestroy = (i) => { 
    dispatch({type:'DELETE',index:i})
  }



  const inputBox = (originContent)=>{ 
    return(
      <input
        type ='text'
        className = 'comment-update-input'
        name='content'
        defaultValue ={originContent}
        onKeyDown = {handleEnter}
        onChange = {handleChange}
      />
    )
  }


  return(
    <>
       <ul className='comment-row'>
          <li className='comment-id'>{id}</li>
          <li 
            className='comment-content'
          >
            <span onClick = {()=>handleTarget(index)}> 
              {target ===index? inputBox(content) : content} 
            </span>
            <span 
                className='comment-delete-btn'
                onClick = {()=>{handleDestroy(index)}}
              > 
              X
              </span>
          </li>
          <li  style={{width:'100px'}}><ThreeDotBtn /></li>
          <li className='comment-date'>{date}</li>
        </ul>
    </>
  );
}

export default CommentItem