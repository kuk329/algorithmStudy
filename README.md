# algorithmStudy
programmers level 1부터 


### repeat() : 문자열을 주어진 횟수만큼 반복해 반환한다. 

```javascript

str="hello";
str_repeat = str.repeat(3);

console.log(str_repeat); // hellohellohello


```



### string.split(separator, limit) 함수 : 문자열을 일정한 구분자로 잘라서 배열로 저장한다.

```javascript
// ex.
const str ="hello new world";
const arr = str.split(" ");
console.log(arr.length); // 3

console.log(arr[0]); // hello
console.log(arr[1]); // new
console.log(arr[2]); // world


// split("") 이렇게 자르면 공백까지 배열에 저장된다.

// limit 사용
const arr2 = str.split(" ",2);
console.log(arr2.length); // 2

console.log(arr2[0]); // hello
console.log(arr2[1]); // new

```

### reduce() : 배열의 각 요소에 대해 주어진 reducer함수를 실행하고, 하나의 결과값을 반환한다.


```javascript

arr.reduce(callback[,initialValue]);

// 1부터 10까지 다 더하기
const numbers =[1,2,3,4,5,6,7,8,9,10]

const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);



```
