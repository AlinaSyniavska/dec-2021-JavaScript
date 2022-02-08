/*
- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
*/

function findMinBase(a, b) {
    if (a < b || a === b) {
        return a;
    } else {
        return b;
    }
}

function findMin(a, b, c) {
    let min = findMinBase(a, b);
    return findMinBase(min, c);
}

console.log('MIN: ' + findMin(1, 1, 1));
console.log('MIN: ' + findMin(10, 0, 5));
console.log('MIN: ' + findMin(2, 3, -3));
console.log('MIN: ' + findMin(44, 55, 66));
console.log('MIN: ' + findMin(-7, -7, -30));

/*
- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
*/

function findMaxBase(a, b) {
    if (a > b || a === b) {
        return a;
    } else {
        return b;
    }
}

function findMax(a, b, c) {
    let max = findMaxBase(a, b);
    return findMaxBase(max, c);
}

console.log('MAX: ' + findMax(1, 1, 1));
console.log('MAX: ' + findMax(10, 0, 5));
console.log('MAX: ' + findMax(2, 3, -3));
console.log('MAX: ' + findMax(44, 55, 66));
console.log('MAX: ' + findMax(-7, -7, -30));

/*
- створити функцію яка повертає найбільше число з масиву
*/

let arr1 = [2, 2, 1, 50, 0, 9, -2, 50, 35, 33];
let arr2 = [1, -100, 5, 5];

function findMaxElement(arr) {
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

function findMinElement(arr) {
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

function addElements(arr) {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log('SUM: ' + addElements(arr1));
console.log('SUM: ' + addElements(arr2));

/*
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
*/

let arr3 = [4, 2, 4, 5, 1, 2, 0, 6, 1, 3];

function calcAverageElement(arr) {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum / arr.length;
}

console.log('AVERAGE: ' + calcAverageElement(arr3));
console.log('AVERAGE: ' + calcAverageElement(arr1));

/*
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
*/

function findMaxMin() {
    console.log(findMaxElement(arguments));
    return findMinElement(arguments);
}

console.log(findMaxMin(0, 100, 101));
console.log(findMaxMin(-5, -5, -5));
console.log(findMaxMin(2, 7, 1));
console.log(findMaxMin(10, 0, -10));

/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/

function createRandomArray(arr) {
    console.log(`Create array. Size: ${arr.length}`);
    for (let arrElement of arr) {
        arrElement = Math.round(Math.random() * 100);
        console.log(arrElement);
    }
}

let randArr1 = [];
randArr1.length = 20;
let randArr2 = [];
randArr2.length = 5;

createRandomArray(randArr1);
createRandomArray(randArr2);

/*
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
limit - аргумент, який характеризує кінцеве значення діапазону.
*/

function createRandomArrayLimit(arr, limit) {
    console.log(`Create array. Size: ${arr.length}`);
    for (let arrElement of arr) {
        arrElement = Math.round(Math.random() * limit);
        console.log(arrElement);
    }
}

createRandomArrayLimit(randArr1, 10);
createRandomArrayLimit(randArr2, 3);

/*
- Функція приймає масив та робить з нього новий масив у зворотньому порядку. [1,2,3] -> [3, 2, 1].*/

let arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr5 = ['a', 'b', 'c', 'd', 'e'];

function makeReverseArray(arr){
    let revers = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        revers[j] = arr[i];
        j++;
    }
    return revers;
}

console.log(makeReverseArray(arr4));
console.log(makeReverseArray(arr5));