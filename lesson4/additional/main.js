/*
- створити функцію, яка якщо приймає один аргумент,
просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.
*/

/*function checkArgs() {
    let res;
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else {
        if (typeof arguments[0] === "number") {
            res = 0;
        } else {
            res = '';
        }
        for (let argument of arguments) {
            res += argument;
        }
        console.log(res);
    }
}*/

function checkArgs(...arg) {
    let res;
    if (arg.length === 1) {
        console.log(arg[0]);
    } else {
        if (typeof arg[0] === "number") {
            res = 0;
        } else {
            res = '';
        }
        for (let argument of arg) {
            res += argument;
        }
        console.log(res);
    }
}

checkArgs(2);
checkArgs('abc', 5);
checkArgs(3, 10);

/*
- створити функцію, яка приймає два масиви та складає значення елементів з однаковими індексами
та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]
*/

function addIndexes(arr1, arr2) {
    let length = 0;
    let resArr = [];
    if (arr1.length === arr2.length) {
        length = arr1.length;
    } else {
        length = Math.max(arr1.length, arr2.length) - (Math.max(arr1.length, arr2.length) - Math.min(arr1.length, arr2.length));
    }

    for (let i = 0; i < length; i++) {
        resArr[i] = arr1[i] + arr2[i];
    }
    return resArr;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];
let arr3 = [10, 10, 10, 10, 20, 30];

console.log(addIndexes(arr1, arr2));
console.log(addIndexes(arr1, arr3));

/*
- Створити функцію яка приймає масив будь яких об'єктів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
*/

let someArray = [];

let arrayObj = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org'
    },
    {name: 'max', age: 31, status: true}
];

function returnKeys(arr) {
    let result = [];
    let i = 0;
    for (const element of arr) {
        for (const elementKey in element) {
            result[i] = elementKey;
            i++;
        }
    }
    return result;
}

someArray = returnKeys(arrayObj);
console.log(someArray);

/*
    - Створити функцію яка приймає масив будь яких об'єктів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
*/

function returnValues(arr) {
    let result = [];
    let i = 0;
    for (const element of arr) {
        for (const elementKey in element) {
            result[i] = element[elementKey];
            i++;
        }
    }
    return result;
}

someArray = returnValues(arrayObj);
console.log(someArray);
