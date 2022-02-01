function solution(x) {
    // x : 정수 -> 문자열로 바꿔서 쪼개고 다시 정수 배열로 만듬.
    let array = x.toString().split("").map(Number)
    // reduce 함수를 통해 배열의 모든 값 더하기
    let sum = array.reduce((accumulator, currentNumber)=>{
        return accumulator+currentNumber;
         });
    
    return x%sum==0;

}
