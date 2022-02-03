function solution(arr) {
    var answer = [];
    var minPosition=0;
    var min=arr[0]
    for(let i =1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
            minPosition=i;
        }
    }
    arr.splice(minPosition,1);
    if(arr.length==0){
        return [-1];
    }
    

    return arr;
}

