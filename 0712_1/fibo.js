function fibo(n){ 
  let result; 

  if(n in memo){ 
    result = memo[n]
  }else{ 
    if(n==1 ||n==2){ 
      result = 1
    }else{ 
      result = fibo(n-2)+fibo(n-1)
    }

    memo[n] = result 
  }
  return result
}