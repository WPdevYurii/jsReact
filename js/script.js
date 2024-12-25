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
    // makeTest: function() {
    //     console.log('test');
    // },
    // showAgeAndLangs: function(plan) {
    //     const {age} = plan;
    //     const {languages} = plan.skills;
    //     let str = `Мне ${age} и я владею языками: `;

    //     languages.forEach(function(lang) {
    //         str += `${lang.toUpperCase()} `;
    //     });

    //     return str;
    // }
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
// const arr = [1, 2, 3, 6, 8];
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

// function standardizeStrings(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].toLowerCase());
//     }
// }

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     // Самый оптимальный вариант решения
//     return str.split('').reverse().join('');
// }

// reverse(someString);


// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt(", ");
// разделить по запятой
// const products = str.split(", ");
// const sort = arr.sort();
// console.log(sort);

// function compareNum(a, b) {
//     return a - b;
// }
// склеить по звездочке
// console.log(arr.join(", "));

// function showFamily(arr) {
    
// }

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// }

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// перебор массива
// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj [key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 3,
//     c: 17,
//     d: {
//         x: 7,
//         y: 32
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 21;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     f: 17,
//     e: 20
// }

// console.log(Object.assign(add, numbers));

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// метод копирования массива
// const newArray = oldArray.slice();

// метод объединения массива из нового стандарта
// const video = ['you', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

//     console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [3, 8, 10];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};


// задание 10
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// function showExperienceCorrect(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// function showExperience(plan) {
//     let result = '';
//     for (let key in plan) {
//         if(typeof(plan[key]) === 'object') {
//             for (let i in plan[key]) {
//                  if(i === 'exp') {
//                     result = `${plan[key] [i]}`;
//                  } else {
                     
//                  }
                
//             }
//         } 
//     }

//     return result;
// }

// console.log(showExperience(personalPlanPeter));

// объект
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// }

// наследуем от объекта
// const john = Object.create(soldier);

// const john = {
//     health: 100
// };
// наследуем свойства
// Object.setPrototypeOf(john, soldier);

// john.sayHello();

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     remamberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов', ''),
//                   b = prompt('На соклько оцените его?', '');

//             if (a != null && b!= null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }   
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count) {
//             console.log("Иы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     },
    
// }

// TASK 13
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     // высота магазинов
//     let shopsHeight = data.height;
//     // денег за кубический метр
//     let moneyPer1m3 = data.moneyPer1m3;
//     // бюджет
//     let budget = data.budget;
//     let totalMoney = 0;
//     // высота и длинна всех магазов
//     let shopsSum = 0;
//     // всего м3 помещений 
//     let totalm3 = 0;
//     for (const shop of data.shops) {
//         shopsSum += shop.length + shop.width;
//     }

//     totalm3 = shopsSum * shopsHeight;
//     totalMoney = totalm3 * moneyPer1m3

//     if (budget >= totalMoney) {
//         return ('Бюджета недостаточно');
//         console.log();
//     } else {
//         return ('Бюджета достаточно');
//     }
// }

// isBudgetEnough(shoppingMallData);

// динамическая типизация

// to number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// to bolean

// 0, '', null, undefined, NaN;

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working ...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"44444"));