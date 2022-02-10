// Всі функції повинні бути описані стрілочним типом!!!!
/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/

let calcAreaRect = (a, b) => a * b;

console.log(calcAreaRect(5, 3));
console.log(calcAreaRect(6, 4));

/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/

let calcAreaCircle = (r) => r ** 2 * Math.PI;

console.log(calcAreaCircle(3));
console.log(calcAreaCircle(12));

/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
S = 2πr(h + r)
*/

let calcAreaCylinder = (h, r) => 2 * Math.PI * r * (h + r);

console.log(calcAreaCylinder(3, 3));
console.log(calcAreaCylinder(4, 7));

/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/

let array = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let printElement = (arr) => {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

printElement(array);

/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/

let createParagraph = text => {
    document.write(`<p>${text}</p>`);
};

let someTxt = '22 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi eveniet illo ipsam nihil omnis quae quasi sunt unde vero!';

createParagraph('11 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, reiciendis.');
createParagraph(someTxt);

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/

let createList = item => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${item} ${i + 1}</li>`)
    }
    document.write('</ul>');
};

createList('data');
createList('product');

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/

let  createList2 = (item, numItem) => {
    document.write('<ul>');
    for (let i = 0; i < numItem; i++) {
        document.write(`<li>${item} ${i + 1}</li>`)
    }
    document.write('</ul>');
}

createList2('audio', 10);
createList2('video', 5);

/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/

let someArr = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];

let createList3 = arr => {
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

let printObj = arr => {
    for (let user of arr) {
        document.write('<div>');
        document.write(`<p>№ ${user.id}</p>`);
        document.write(`<h3>Name: ${user.name}</h3>`);
        document.write(`<p>Age: ${user.age}</p>`);
        document.write('</div>');
        document.write('<hr>');
    }
}

document.write('<br>');
document.write('<br>');
printObj(usersList);

