/*
--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

let arr1 = [10, 20, 30, 40, 50];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log('*************************');

let arr2 = ['apple', 'watermelon ', 'strawberry', 'banana', 'kiwi'];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

console.log('*************************');

let arr3 = ['string', 2022, true, 'task', false];
/*for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}*/
for (let arr3Element of arr3) {
    console.log(arr3Element);
}

console.log('*************************');

/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/

let arr4 = [];
arr4[0] = 1;
arr4[1] = 2;
arr4[2] = 3;
arr4[3] = 5;
arr4[4] = 8;

/*for (let i = 0; i < arr4.length; i++) {
    let arr4Element = arr4[i];
    console.log(arr4Element);
}*/
for (let arr4Element of arr4) {
    console.log(arr4Element);
}

console.log('*************************');
/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/

for (let i = 0; i < 10; i++) {
    document.write('<div class="target bg-beige">Block</div>');
}

for (let i = 0; i < 10; i++) {
    document.write(`<div class="target bg-powderblue">Block ${i}</div>`);
}

let index = 0;
while (index < 20) {
    document.write('<h1 class="target bg-lavender">Header</h1>');
    index++;
}

index = 0;
while (index < 20) {
    document.write(`<h1 class="target bg-lightpink">Header ${index}</h1>`);
    index++;
}

/*
- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/

let arr5 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for (let number of arr5) {
    console.log(number);
}
console.log('*************************');

let arr6 = ['red', 'green', 'yellow', 'grey', 'blue', 'black', 'pink', 'white', 'purple', 'brown'];
for (let string of arr6) {
    console.log(string);
}
console.log('*************************');

let arr7 = [1988, 'november', 22, true, 9, 'october', 1987, false, 'birthday', 0];
for (let arr7Element of arr7) {
    console.log(arr7Element);
}
console.log('*************************');

let arr8 = [1, true, 2, false, 'str1', 'str2', true, 3, 4, false];
for (let arr8Element of arr8) {
    if (typeof arr8Element === 'boolean') {
        console.log(arr8Element);
    }
}
console.log('*************************');

let arr9 = ['str1', false, 2022, 'str2', 'str3', true, 2021, 2020, false, false];
for (let arr9Element of arr9) {
    if (typeof arr9Element === 'number') {
        console.log(arr9Element);
    }
}
console.log('*************************');

let arr10 = [false, 5, 'Mary', 6, true, 'Viki', 23, 8, false, 'Solo'];
for (let arr10Element of arr10) {
    if (typeof arr10Element === 'string') {
        console.log(arr10Element);
    }
}
console.log('*************************');

/*
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
  Вивести в консоль всі його елементи в циклі.
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/

let arr11 = [];
arr11[0] = 'a';
arr11[1] = true;
arr11[2] = {name: 'Will', age: 20};
arr11[3] = 'b';
arr11[4] = 1000;
arr11[5] = 'c';
arr11[6] = 500;
arr11[7] = false;
arr11[8] = [0.1, 0.5];
arr11[9] = 'd';

for (let arr11Element of arr11) {
    console.log(arr11Element)
}
console.log('*************************');

for (let i = 0; i < 10; i++) {
    console.log(`step ${i}`);
    document.write(`<div>step ${i}</div>`);
}
console.log('*************************');
document.write('<br/>');

for (let i = 0; i < 100; i++) {
    console.log(`step -> ${i}`);
    document.write(`<div>step => ${i}</div>`);
}
console.log('*************************');
document.write('<br/>');

for (let i = 0; i < 100; i = i + 2) {
    console.log(`step 2 -> ${i}`);
    document.write(`<div>step 2 => ${i}</div>`);
}
console.log('*************************');
document.write('<br/>');

for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
        console.log(`step pair -> ${i}`);
        document.write(`<div>step pair => ${i}</div>`);
    }
}
console.log('*************************');
document.write('<br/>');

for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(`step odd -> ${i}`);
        document.write(`<div>step odd => ${i}</div>`);
    }
}



