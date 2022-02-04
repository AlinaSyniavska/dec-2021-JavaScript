/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
    1. перебрати його циклом while
    2. перебрати його циклом for
    3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1
let i = 0;
while (i < array.length) {
    console.log(`1: [${i}] = ${array[i]}`);
    i++;
}
console.log('-----------------------');

// 2
for (let j = 0; j < array.length; j++) {
    console.log(`2: [${j}] = ${array[j]}`);
}
console.log('-----------------------');

// 3
i = 0;
while (i < array.length) {
    if (i % 2) {
        console.log(`3: [${i}] = ${array[i]}`);
    }
    i++;
}
console.log('-----------------------');

// 4
for (let j = 0; j < array.length; j++) {
    if (j % 2) {
        console.log(`4: [${j}] = ${array[j]}`);
    }
}
console.log('-----------------------');

// 5
i = 0;
while (i < array.length) {
    // if (array[i] % 2 === 0) {
    if (!(array[i] % 2)) {
        console.log(`5: [${i}] = ${array[i]}`);
    }
    i++;
}
console.log('-----------------------');

// 6
for (let j = 0; j < array.length; j++) {
    if (!(array[j] % 2)) {
        console.log(`6: [${j}] = ${array[j]}`);
    }
}
console.log('-----------------------');

// 7
for (let j = 0; j < array.length; j++) {
    if (!(array[j] % 3)) {
        array[j] = 'okten';
    }
    console.log(`7: [${j}] = ${array[j]}`);
}
console.log('-----------------------');

// 8
array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let j = array.length - 1; j >= 0; j--) {
    console.log(`8: [${j}] = ${array[j]}`);
}
console.log('*******************');

// 1
i = array.length - 1;
while (i >= 0) {
    console.log(`1: [${i}] = ${array[i]}`);
    i--;
}
console.log('-----------------');

// 2 = 8

// 3
i = array.length - 1;
while (i >= 0) {
    if (i % 2) {
        console.log(`3: [${i}] = ${array[i]}`);
    }
    i--;
}
console.log('-----------------');

// 4
for (let j = array.length - 1; j >= 0; j--) {
    if (j % 2) {
        console.log(`4: [${j}] = ${array[j]}`);
    }
}
console.log('-----------------');

// 5
i = array.length - 1;
while (i >= 0) {
    // if (array[i] % 2 === 0) {
    if (!(array[i] % 2)) {
        console.log(`5: [${i}] = ${array[i]}`);
    }
    i--;
}
console.log('-----------------');

// 6
for (let j = array.length - 1; j >= 0; j--) {
    if (!(array[j] % 2)) {
        console.log(`6: [${j}] = ${array[j]}`);
    }
}
console.log('-----------------');

// 7
for (let j = array.length - 1; j >= 0; j--) {
    if (!(array[j] % 3)) {
        array[j] = 'okten';
    }
    console.log(`7: [${j}] = ${array[j]}`);
}
console.log('-----------------');

