/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/

function calcAreaRect(a, b) {
    return a * b;
}

/*let calcAreaRect = (a, b) => a * b;*/

let result = calcAreaRect(5, 3);
console.log(result);
result = calcAreaRect(6, 4);
console.log(result);

/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/

function calcAreaCircle(r) {
    // return (r ** 2 * Math.PI).toFixed(2);
    return r ** 2 * Math.PI;
}

result = calcAreaCircle(3);
console.log(result);
result = calcAreaCircle(12);
console.log(result);

/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
S = 2πr(h + r)
*/

function calcAreaCylinder(h, r) {
    return 2 * Math.PI * r * (h + r);
}

result = calcAreaCylinder(3, 3);
console.log(result);
result = calcAreaCylinder(4, 7);
console.log(result);

/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/

let array = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function printElement(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

printElement(array);

/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/

function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

let someTxt = '2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi eveniet illo ipsam nihil omnis quae quasi sunt unde vero!';

createParagraph('1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, reiciendis.');
createParagraph(someTxt);

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/

function createList(item) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${item} ${i + 1}</li>`)
    }
    document.write('</ul>');
}

createList('item');
createList('list');

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/

function createList2(item, numItem) {
    document.write('<ul>');
    for (let i = 0; i < numItem; i++) {
        document.write(`<li>${item} ${i + 1}</li>`)
    }
    document.write('</ul>');
}

createList2('todo', 10);
createList2('book', 5);

/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/

let someArr = ['a', 1, 'b', 5, 'c', 10, true];

function createList3(arr) {
    document.write('<ol type="I">');
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write('</ol>');
}

createList3(someArr);

/*
- створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
Для кожного об'єкту окремий блок.*/

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        age: 20
    },
    {
        id: 2,
        name: 'Ervin Howell',
        age: 32
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        age: 18
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        age: 26
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        age: 40
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        age: 38
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        age: 31
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        age: 22
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        age: 35
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        age: 25
    }
];

function printObj(arr) {
    for (let user of arr) {
        document.write(`<div style="border-bottom: 2px solid grey">`);
        document.write(`<p>№ ${user.id}</p>`);
        document.write(`<h3>Name: ${user.name}</h3>`);
        document.write(`<p>Age: ${user.age}</p>`);
        document.write('</div>');
    }
}

document.write('<br>');
document.write('<br>');
printObj(usersList);

