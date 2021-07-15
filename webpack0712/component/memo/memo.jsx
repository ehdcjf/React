import React,{useState,useMemo,useCallback} from 'react';

const Memo = () =>{
  // input에 대한 상태값과 저정을 위한 값. 

  const [username,setUsername] = useState(''); 
  const [list,setList] = useState([]); 

  // const change = useCallback((e)=>{ 
  //   let {value} = {...e.target}
  //   setUsername(value)
  // },[])
  /**
   useCallback 
   스타일 컴포넌트
   */

  const inputChange = e => { 
    let {value} = {...e.target}; 
    setUsername(value); 
  }

  // const submit = e => { 
  //   e.preventDefault();
  //   if(username!=''){
  //     const newList = [...list,username]; 
  //     setList(newList);
  //     setUsername(''); 
  //   }
  // }

  const submit = useCallback((e)=>{ 
    e.preventDefault();
    if(username!=''){
      const newList = [...list,username]; 
      setList(newList);
      setUsername(''); 
    }
  },[list,username]) //list와 username 상태가 바뀔때만 함수를 재생성합니다.

  const renderList = () => { 
    // let newArr = []; 
    // for(let i =0; i<list.length; i++){ 
    
    //  newArr.push( <li key ={i}>{list[i]}</li>) 
    // }

    return (
      list.map((v,i)=>{ 
      return <li key={i}>{v}</li>
    })
    ); 
  }



  const userCount = useMemo(()=>{ 
    console.log('count')
    return list.length
  },[list.length])
  /* 
    변수의 값을 메모이제이션
    useMemo(콜백함수, 상태값을 담은 배열)
    콜백함수의 리턴값과 배열에 담긴 값이 다를 때만 실행.
  */
  return(
    <>
      {console.log('render')}
      <h2>회원리스트({userCount})</h2>
      <form onSubmit = {submit}>
        <input 
          type="text"
          name='username' 
          value = {username} 
          onChange = {inputChange}
        />
        <button type='submit'>
           추가
        </button>
      </form>
      <ol>
        {renderList()}
      </ol>
    </>
  ); 
}

export default Memo