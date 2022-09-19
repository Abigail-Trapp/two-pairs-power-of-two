function solution(numbers) {
    let result = 0
    for(let i=0;i<numbers.length;i++){
    for(let j=0;j<numbers.length;j++){
       let powOfTwo = Math.log2(numbers[i] + numbers[j])%1===0
       if(numbers[i] <= numbers[j] && powOfTwo === true){
        result ++
       }
       
    }
    }
    return result
}
console.log(solution([1,-1,2,3]))