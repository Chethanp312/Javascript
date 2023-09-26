//Array
const myArr = [1,2,3,4,5];
//console.log(myArr[3]);

const mereArray = new Array(1,2,3,4,5,6);
//console.log(mereArray[3]);

//Methods
// myArr.push(6);
// myArr.push(7);
myArr.push(8);
//console.log(myArr);

const marvel_heros =["thor","Ironman", "spiderman"];

const dc_heros = ["spiderman", "batman"];

marvel_heros.push(dc_heros);

//console.log(marvel_heros);

//console.log(marvel_heros.concat(dc_heros));

const all_new_heros = [...marvel_heros , ...dc_heros]; // Spread
//console.log(all_new_heros);

let score1 = 100;
let score2 = 200;
let score3 = 300; 

console.log(Array.of(score1,score2,score3));

