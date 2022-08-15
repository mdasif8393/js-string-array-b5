const numbers = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,4];
// const slicedArray = numbers.slice(3,9);

// const spliceArray = numbers.splice(2, 3);

const splice2 = numbers.splice(2, 3, 333, 4444, 555);
console.log(splice2);
console.log(numbers);