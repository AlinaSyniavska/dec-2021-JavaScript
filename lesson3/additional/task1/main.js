/*1. Створити пустий масив та :
a. заповнити його 50 парними числами за допомоги циклу.
b. заповнити його 50 непарними числами за допомоги циклу.
c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
*/

//1a
let arrayPair = [];
let j = 0;

for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        arrayPair[j] = i;
        console.log(`arrayPair[${j}] = ${arrayPair[j]}`);
        j++;
    }
}
console.log('-------------------------');

// 1b
let arrayOdd = [];
j = 0;

for (let i = 0; i < 100; i++) {
    if (i % 2) {
        arrayOdd[j] = i;
        console.log(`arrayOdd[${j}] = ${arrayOdd[j]}`);
        j++;
    }
}
console.log('-------------------------');

// 1c
let arrayRand1 = [];

for (let i = 0; i < 20; i++) {
    arrayRand1[i] = Math.floor(Math.random() * 11);    // 0-10
    console.log(`arrayRand1[${i}] = ${arrayRand1[i]}`);
}
console.log('-------------------------');

// 1d
let arrayRand2 = [];

for (let i = 0; i < 20; i++) {
    arrayRand2[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;    // 8-732
    console.log(`arrayRand2[${i}] = ${arrayRand2[i]}`);
}
console.log('-------------------------');

/*
2. Вивести за допомогою console.log кожен третій елемент
*/

/*for (let i = 0; i < arrayRand2.length; i++) {
    if (!((i + 1) % 3) && i !== 0) {
        console.log(`arrayRand2[${i}] = ${arrayRand2[i]}`);
    }
}*/
for (let i = 0; i < arrayRand2.length; i = i + 3) {
    if (i !== 0) {
        console.log(`arrayRand2[${i}] = ${arrayRand2[i]}`);
    }
}
console.log('-------------------------');

/*
3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
*/

/*for (let i = 0; i < arrayRand2.length; i++) {
    if (!((i + 1) % 3) && i !== 0 && !(arrayRand2[i] % 2)) {
        console.log(`arrayRand2[${i}] = ${arrayRand2[i]}`);
    }
}*/
for (let i = 0; i < arrayRand2.length; i = i + 3) {
    if (i !== 0 && !(arrayRand2[i] % 2)) {
        console.log(`arrayRand2[${i}] = ${arrayRand2[i]}`);
    }
}
console.log('-------------------------');

/*
4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
*/
let arrayCopy = [];
j = 0;

/*for (let i = 0; i < arrayRand2.length; i++) {
    if (!((i + 1) % 3) && i !== 0 && !(arrayRand2[i] % 2)) {
        console.log(`arrayRand2[${i}] = ${arrayRand2[i]}`);
        arrayCopy[j] = arrayRand2[i];
        j++;
    }
}*/
for (let i = 0; i < arrayRand2.length; i += 3) {
    if (i !== 0 && !(arrayRand2[i] % 2)) {
        console.log(`arrayRand2[${i}] = ${arrayRand2[i]}`);
        arrayCopy[j] = arrayRand2[i];
        j++;
    }
}

for (let arrayCopyElement of arrayCopy) {
    console.log(`${arrayCopyElement}`);
}
console.log('-------------------------');

/*5. Вивести кожен елемент масиву, сусід справа якого є парним
EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56*/

let arr1 = [1, 2, 3, 5, 7, 9, 56, 8, 67];

for (let i = 0; i < arr1.length; i++) {
    if (!(arr1[i + 1] % 2) && i !== arr1.length - 1) {
        console.log(`arr1[${i}] = ${arr1[i]}`);
    }
}
console.log('-------------------------');

/*6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*/

let arrCost = [100, 250, 50, 168, 120, 345, 188];
let averageCheck = 0;
let averagePrice;

for (let number of arrCost) {
    averageCheck += number;
}

averagePrice = (averageCheck / arrCost.length).toFixed(2);

console.log(`Середній чек:  ${averageCheck}`);
console.log(`Середня вартість покупки:  ${averagePrice}`);
console.log('-------------------------');

/*
7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
*/

let arrayRand3 = [];

for (let i = 0; i < 10; i++) {
    arrayRand3[i] = Math.floor(Math.random() * 11);
    arrayCopy[i] = arrayRand3[i] * 5;
    console.log(`arrayRand3[${i}] = ${arrayRand3[i]}`);
    console.log(`arrayCopy[${i}] = ${arrayCopy[i]}`);
}
console.log('-------------------------');

/*
8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
*/

let arr2 = [1988, 'november', 22, true, 9, 'october', 1987, false, 'birthday', {alphabet: 'en', letters: 26}];
j = 0;

for (let arr2Element of arr2) {
    if (typeof arr2Element === 'number') {
        arrayCopy[j] = arr2Element;
        console.log(`arrayCopy[${j}] = ${arrayCopy[j]}`);
        j++;
    }
}

/*- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:*/

/*З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив
Example:*/
/*
    let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },
        // TO BE CONTINUED .....
    ]*/

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];
let obj = {};
let index = 0;

for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            obj = user;
            obj.address = city;
        }
    }

    usersWithCities[index] = obj;
    index++;
}

for (let usersWithCity of usersWithCities) {
    console.log(usersWithCity);
}


/*
- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
*/

let array10 = [];
let array10Copy = [];

for (let i = 0; i < 10; i++) {
    array10[i] = Math.floor(Math.random() * 10);
    if (!(array10[i] % 2)) {
        console.log(`array10[${i}]: ${array10[i]}`);
    }
}

/*
- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
*/

for (let i = 0; i < 10; i++) {
    array10[i] = Math.floor(Math.random() * 10);
}
for (let i = 0; i < array10.length; i++) {
    array10Copy[i] = array10[i];
}

/*
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
*/

let abc = ['a', 'b', 'c'];
let word = '';

for (let i = 0; i < abc.length; i++) {
    word += abc[i];
}
console.log('1: ' + word);

/*
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
*/

let i = 0;
word = '';
while (i < abc.length) {
    word += abc[i];
    i++;
}
console.log('2: ' + word);

/*
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
*/

word = '';
for (let string of abc) {
    word += string;
}
console.log('3: ' + word);


