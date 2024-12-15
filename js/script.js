"use strict"

// const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// ОБЪЕКТЫ
// const options =  {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'yellow',
//         bg: 'red'
//     },
        // методы ынутри объекта
//     makeTest: function() {
//         console.log('test');
//     }
// };

// вызываем метод
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// ключи элементов и значения
// console.log(Object.keys(options).length);

// delete options.width;
// console.log(options);

// перебор элемент объекта
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`inner option ${i} have value ${options[key] [i]}` );
//             counter++;
//         }
//     } else {
//         console.log(`option ${key} have value ${options[key]}` );
//         counter++;    
//     }
// }

// console.log(counter);

// МАССИВЫ
const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// перебор массива в форич
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`);
// });

// убирает один элемент в конце
// arr.pop();
// добавляет один элемент
// arr.push(10);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt(", ");
// разделить по запятой
// const products = str.split(", ");
const sort = arr.sort();
console.log(sort);

function compareNum(a, b) {
    return a - b;
}
// склеить по звездочке
// console.log(products.join("* "));
