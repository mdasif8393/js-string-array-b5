function addNumbers (num1, num2){
    // console.log(arguments[3]);
    // const result = num1 + num2;
    // return result;
    let sum = 0;
    for(const number of arguments){
       sum = sum + number
    }
    return sum;
}

const sum = addNumbers(10, 20, 30, 40, 50);
console.log(sum);