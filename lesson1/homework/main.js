// 1
let str1 = 'hello';
console.log(str1);
alert(str1);
document.write(`${str1} `);
str1 = true;
console.log(str1);
alert(str1);
document.write(`${str1} `);

let str2 = 'owu';
console.log(str2);
alert(str2);
document.write(`${str2} `);

let str3 = 'com';
console.log(str3);
alert(str3);
document.write(`${str3} `);

let str4 = 'ua';
console.log(str4);
alert(str4);
document.write(`${str4} `);

let num1 = 1;
console.log(num1);
alert(num1);
document.write(`${num1} `);
num1 = 'this is a string';
console.log(num1);
alert(num1);
document.write(`${num1} `);

let num2 = 10;
console.log(num2);
alert(num2);
document.write(`${num2} `);

let num3 = -999;
console.log(num3);
alert(num3);
document.write(`${num3} `);

let num4 = 123;
console.log(num4);
alert(num4);
document.write(`${num4} `);

let num5 = 3.14;
console.log(num5);
alert(num5);
document.write(`${num5} `);

let num6 = 2.7;
console.log(num6);
alert(num6);
document.write(`${num6} `);

let num7 = 16;
console.log(num7);
alert(num7);
document.write(`${num7} `);

let bool1 = true;
console.log(bool1);
alert(bool1);
document.write(`${bool1} `);
bool1 = 11;
console.log(bool1);
alert(bool1);
document.write(`${bool1} `);

let bool2 = false;
console.log(bool2);
alert(bool2);
document.write(`${bool2} `);


document.write('<br/>');

// 2
let firstName = 'Alina';
let middleName = 'Melekhin';
let lastName = 'Syniavska';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

// 3
/*
За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".*/

let firstNameUser = prompt('Введіть Ім*я');
let middleNameUser = prompt('Введіть По-Батькові');
let ageUser = prompt('Введіть вік');
alert(`Вітаю, ${firstNameUser} ${middleNameUser}. Тобі ${ageUser} роки(років).`);

// 4
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 5
console.log(5 < 6); // -> true
console.log(5 > 6); // -> false
console.log(5 === 6); // -> false
console.log(5 >= 6); // -> false
console.log(10 === 10); // -> true
console.log(10 <= 10); // -> true
console.log(10 !== 10); // -> false
console.log(10 > 10); // -> false
console.log(10 != 10); // -> false
console.log(123 === '123'); // -> false
console.log(123 == '123'); // -> true

// 6
/* Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему? */
let str = "20";
let aa = 5;
document.write(str + aa + "<br/>"); // 205, перехід на новий рядок
document.write(str - aa + "<br/>"); // 15
document.write(str * "2" + "<br/>"); // 40
document.write(str / 2 + "<br/>"); // 10







