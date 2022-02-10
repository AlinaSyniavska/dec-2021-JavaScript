// Всі функції повинні бути описані стрілочним типом!!!!

/*
- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
*/

let findMinBase = (a, b) => {
    if (a < b || a === b) {
        return a;
    } else {
        return b;
    }
}

let findMin = (a, b, c) => {
    let min = findMinBase(a, b);
    console.log('MIN number: ' + findMinBase(min, c));
}

findMin(1, 1, 1);
findMin(10, 0, 5);
findMin(2, 3, -3);
findMin(44, 55, 66);
findMin(-7, -7, -30);

/*
- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
*/

let findMaxBase = (a, b) => {
    if (a > b || a === b) {
        return a;
    } else {
        return b;
    }
}

let findMax = (a, b, c) => {
    let max = findMaxBase(a, b);
    console.log('MAX number: ' + findMaxBase(max, c));
}

findMax(1, 1, 1);
findMax(10, 0, 5);
findMax(2, 3, -3);
findMax(44, 55, 66);
findMax(-7, -7, -30);

/*
- створити функцію яка повертає найбільше число з масиву
*/

let arr1 = [2, 2, 1, 50, 0, 9, -2, 50, 35, 33];
let arr2 = [1, -100, 5, 5];

let findMaxElement = arr => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log('MAXelem: ' + findMaxElement(arr1));
console.log('MAXelem: ' + findMaxElement(arr2));

/*
- створити функцію яка повертає найменьше число з масиву
*/

let findMinElement = arr => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min >= arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

console.log('MINelem: ' + findMinElement(arr1));
console.log('MINelem: ' + findMinElement(arr2));

/*
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
*/

let adderElements = arr => {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log('SUM: ' + adderElements(arr1));
console.log('SUM: ' + adderElements(arr2));

/*
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
*/

let arr3 = [4, 2, 4, 5, 1, 2, 0, 6, 1, 3];

let calcAverageElement = arr => {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum / arr.length;
}

console.log('AVERAGE: ' + calcAverageElement(arr3));
console.log('AVERAGE: ' + calcAverageElement(arr1));
console.log('----------------------');

/*
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
*/

let findMaxMin = (...arr) => {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }
        if (min >= arr[i]) {
            min = arr[i];
        }
    }
    console.log(`MAX: ${max}`);
    return min;
}

console.log('MIN: ' + findMaxMin(0, 100, 101));
console.log('MIN: ' + findMaxMin(-5, -5, -5));
console.log('MIN: ' + findMaxMin(2, 7, 1));
console.log('MIN: ' + findMaxMin(10, 0, -10));
console.log('----------------------');

/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/

let createRandomArray = size => {
    let randArray = [];
    for (let i = 0; i < size; i++) {
        randArray[i] = Math.round(Math.random() * 100);
    }
    return randArray;
}

console.log(createRandomArray(5));
console.log('----------------------');
console.log(createRandomArray(3));
console.log('----------------------');

/*
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
limit - аргумент, який характеризує кінцеве значення діапазону.
*/

let createRandomArrayLimit = (size, limit) => {
    let randArray = [];
    for (let i = 0; i < size; i++) {
        randArray[i] = Math.round(Math.random() * limit);
    }
    return randArray;
}

console.log(createRandomArrayLimit(10, 10));
console.log('----------------------');
console.log(createRandomArrayLimit(5, 3));
console.log('----------------------');

/*
- Функція приймає масив та робить з нього новий масив у зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

let arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr5 = ['a', 'b', 'c', 'd', 'e'];
let notes = ['si', 'la', 'sol', 'fa', 'mi', 're', 'do'];

let makeReverseArray = arr => {
    let revers = [];

    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        revers[j] = arr[i];
    }
    return revers;
}

console.log(makeReverseArray(arr4));
console.log(makeReverseArray(arr5));
console.log(makeReverseArray(notes));