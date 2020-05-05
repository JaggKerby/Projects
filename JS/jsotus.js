

// const age = prompt( 'Enter your age: ');

// if (age > 18 && age < 75) {
//     alert( 'Access Granted');
// } else if (age < 18) {
//     alert ('Too young');
// } else {
//     alert ('Too old');
// }


// const sym = prompt ('Enter your gender M or F: ');

// const gender = (sym === 'M' ) ? 'Male' : 'Female' ;

// console.log (gender);


// let num = +prompt ('Enter a number: ' );

// switch (num) {
//     case 0:
//         alert( 0 );
//         break;
//     case 1:
//         alert( 1 );
//         break;
//     case 2:
//     case 3:
//         alert( '2,3');
//         break;
//     default:
//         alert('another number');
// }

// const a = 12;
// const b = 3;

// if ( a > b ) {
//     console.log ( a );
// } else {
//     console.log ( b );
// }

// const num = +prompt ( 'Enter a number from 1 to 12: ');

// switch (num) {
//     case 1:
//         alert('January');
//         break;
//     case 2:
//         alert('February');
//         break;
//     case 3:
//         alert('March');
//         break;
//     case 4:
//         alert('April');
//         break;
//     case 5:
//         alert('May');
//         break;
// }

// const circle = 19.65;
// const square = 25;

// const line = Math.sqrt(square);
// const findround = circle/Math.PI;

// const diametr = 2*Math.sqrt(findround);

// if (diametr <= line ) {
//     alert('Круг влезет в квадрат');
// } else {
//     alert ('Круг больше квадрата')
// }



// const auto =  {
//   color: 'red',
//   model: 'Volkswagen',
//   year: 2020
// }

// const input = prompt('answer: ');
// const value = auto[input];

// if (value) {
//   console.log(value);
// } else {
//   console.log('not found');
// }


// const input = prompt('Enter a property: ');
// const hasProp = input in auto; 

// if (hasProp) {
//    delete auto[input];
// } else {
//   auto[input] = null;
// }

// console.log(auto);

// const storeGood = {
//   number: 100,
//   place: 'A101',
//   weight: 25
// }

// const shopGood = Object.assign({}, storeGood, {cost: 20});

// storeGood.number = 2000;

// console.log(storeGood, shopGood);


// let person = {
//   name: 'Sam',
//   years: 25
// }

// let {name, years:age, height=null} = person;

// console.log(name, age, height);


// const  user = {
//   name: 'John' 
// }

// let userage = prompt('Enter your age: ');

// user['age'] = userage;

// console.log(user);


// const admin = Object.assign({}, user, {role: 'admin'});

// console.log(admin);


// let {age, name, role} = admin;

// console.log(age,name,role);


