function solution(s) {
    var answer ;
    answer = '*'.repeat(s.length-4)+s.slice(-4);
    return answer;
}

// array.slice([begin[,end]]) : slice() 메서드는 어떤 배열의 begin 부터 end까지 (end는 미포함) 에 대한
// 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열을 바뀌지 않는다. 
