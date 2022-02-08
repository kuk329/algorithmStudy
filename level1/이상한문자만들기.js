function solution(s) {
    var arr = s.split(" "); // 공백을 기준으로 문자열을 나눠서 배열에 저장.
    const word = [];  // 나중에 합칠 배열
  
    for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split(""); // 배열을 다시 나눠서 배열에 저장
      
    for (let j = 0; j < arr2.length; j++) {

      arr2[j] = j % 2 === 0 ? arr2[j].toUpperCase() : arr2[j].toLowerCase(); // 짝수번째는 대문자, 홀수번째는 소문자로
    }
    word.push(arr2.join(""));
  }
  return word.join(" ");
}
