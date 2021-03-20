let arr = ['vanya', 'Ishtvan'];

arr.push('olya');

arr[1]= 'Petya';

let removed = arr.splice(0,1);
console.log(removed);

arr.unshift('masha','lena');



console.log(arr);


let str = 'vasya, petya, masha';

let arr = str.split(',');

console.log(arr);