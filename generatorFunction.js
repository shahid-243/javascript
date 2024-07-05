// 10 apr 2024

function* addition(num1, num2){
    yield (num1 + num2);
    return 10
    yield 10 + 30
}

let sum = addition(10,20)

console.log(sum.next());
console.log(sum.next());
console.log(sum.next());