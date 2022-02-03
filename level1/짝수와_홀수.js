
function solution(num) {
    if(num%2==0){
        return "Even";
    }else{
        return "Odd"
    }    
}



// 다른 풀이 : 삼항연산자 이용

function solution(num){
  
  return num%2 ? "Odd" : "Even";
  // 0 은 false라는 사실 을 이용
  
  
}
