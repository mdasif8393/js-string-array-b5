const myFavDate = new Date('1971-12-26');
// console.log(myFavDate);
const anotherDate = new Date(1971, 3, 26, 11, 50, 40, 80);
console.log(anotherDate);

if (myFavDate.getTime() < anotherDate) {
    console.log('my fav date is earliar')
}