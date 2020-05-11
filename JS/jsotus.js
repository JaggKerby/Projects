// // // Циклы

// // const age = prompt( 'Enter your age: ');

// // if (age > 18 && age < 75) {
// //     alert( 'Access Granted');
// // } else if (age < 18) {
// //     alert ('Too young');
// // } else {
// //     alert ('Too old');
// // }
// // //////////////////////////////////////////////////////////////
// // const sym = prompt ('Enter your gender M or F: ');

// // const gender = (sym === 'M' ) ? 'Male' : 'Female' ;

// // console.log (gender);


// // let num = +prompt ('Enter a number: ' );

// // switch (num) {
// //     case 0:
// //         alert( 0 );
// //         break;
// //     case 1:
// //         alert( 1 );
// //         break;
// //     case 2:
// //     case 3:
// //         alert( '2,3');
// //         break;
// //     default:
// //         alert('another number');
// // }
// // //////////////////////////////////////////////////////////////
// // const a = 12;
// // const b = 3;

// // if ( a > b ) {
// //     console.log ( a );
// // } else {
// //     console.log ( b );
// // }

// // const num = +prompt ( 'Enter a number from 1 to 12: ');

// // switch (num) {
// //     case 1:
// //         alert('January');
// //         break;
// //     case 2:
// //         alert('February');
// //         break;
// //     case 3:
// //         alert('March');
// //         break;
// //     case 4:
// //         alert('April');
// //         break;
// //     case 5:
// //         alert('May');
// //         break;
// // }
// // //////////////////////////////////////////////////////////////
// // const circle = 19.65;
// // const square = 25;

// // const line = Math.sqrt(square);
// // const findround = circle/Math.PI;

// // const diametr = 2*Math.sqrt(findround);

// // if (diametr <= line ) {
// //     alert('Круг влезет в квадрат');
// // } else {
// //     alert ('Круг больше квадрата')
// // }

// // /*Объекты*/

// // const auto =  {
// //   color: 'red',
// //   model: 'Volkswagen',
// //   year: 2020
// // }
// // const input = prompt('answer: ');
// // const value = auto[input];
// // if (value) {
// //   console.log(value);
// // } else {
// //   console.log('not found');
// // }

// // const input = prompt('Enter a property: ');
// // const hasProp = input in auto; 

// // if (hasProp) {
// //    delete auto[input];
// // } else {
// //   auto[input] = null;
// // }

// // console.log(auto);

// // /*Копирование объекта в новый объект*/
// // const storeGood = {
// //   number: 100,
// //   place: 'A101',
// //   weight: 25
// // }

// // const shopGood = Object.assign({}, storeGood, {cost: 20});

// // storeGood.number = 2000;

// // console.log(storeGood, shopGood);
// // ///////переименование элемента объекта///////////////////
// // let person = {
// //   name: 'Sam',
// //   years: 25
// // }

// // let {name, years:age, height=null} = person;

// // console.log(person);

// // /*Запись нового элемента в объект
// // Создайте объект user, содержащий поле name со
// // значением ‘John’.
// // 1.Запросить у пользователя ввод числа. Записать
// // введенное значение в поле age объекта user.
// // 2.Создать копию объекта user с именем admin.
// // Добавить новому объекту поле role со значением
// // ‘admin’.
// // *Записать все значения полей объекта admin в
// // отдельные переменные. Имена переменных
// // должны совпадать с названиями полей.
// // Записать все значения полей объекта admin в отдельные переменные. Имена переменных
// // должны совпадать с названиями полей. */

// // const  user = {
// //     name: 'John' 
// //   }

// // let userage = prompt('Enter your age: ');

// // user['age'] = userage;

// // console.log(user);

// // const admin = Object.assign({}, user, {role: 'admin'});

// // console.log(admin);

// // let {age, name, role} = admin;

// // console.log(age,name,role);
// // //////////////////////////////////////////////////////////////
// // // Массивы 

// // const arr = [10,20,30,40,50];

// // const elem = +prompt('Введите номер элемента: ');

// // const index = arr.indexOf(elem);

// // if (index >= 0 ) {
// //   console.log(arr[index], index);
// // } else {
// //   console.log('Not Found');
// // }

// const arr = [];

// for (let i = 0; i<5; i++) {
//   let input = prompt('Enter a value: ');
//   arr.push(input);
// }
// console.log(arr);

// /* push - добавляет элемент в конец массива 
// unshift - добавляет элемент в начало массива сдвигая все остальные 
// const arr = [10, 20];
// arr[4] = 4;  - вставляет элемент на 4 позицию массива, если элементов в массиве меньше то они заполнятся undefined. 
// [10, 20, undefined, undefined, 4] */


/* поиск максимальног и минимального значения в массиве */

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, -9, 10];
// let max = getMaxValue(nums);
// let min = getMinValue(nums);


// function getMaxValue(nums){
//     let max = nums[0]; 
//     for (i=0; i < nums.length; i++) {
//       if (max < nums[i]) {
//         max = nums[i]; 
//       }
//     }
//   return max;
// };

// function getMinValue(nums) {
//   let min = nums[0];
//   for (i = 0; i < nums.length; i++) {
//     if ( min > nums[i]) {
//       min = nums[i];
//     }
//   }
//    return min;
// }

// console.log(max, min);