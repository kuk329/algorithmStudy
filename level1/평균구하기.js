function solution(arr) {
    const sum = arr.reduce((acc,curr)=>{
        return acc+curr;
    }); 
    var answer = sum/arr.length;
    return answer;
}
// javascript 나누기 (/) 의
// ex. 1/2 = 0.5

// 몫만 출력 하려면 parseInt() 또는 Math.floor() 이용
// parseInt(17/3) => 5
// Math.floor(3/2) => 1
