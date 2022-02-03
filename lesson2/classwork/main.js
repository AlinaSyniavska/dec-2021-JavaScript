/*- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/

let number1 = Math.floor(Math.random() * 1000) + 1;
let number2 = Math.floor(Math.random() * 1000) + 1;
console.log('1st number: ' + number1);
console.log('2nd number: ' + number2);

if (number1 > number2) {
    console.log('Max: ' + number1);
} else if (number1 < number2) {
    console.log('Max: ' + number2);
} else {
    console.log('Numbers is equal');
}

/*- У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.*/

let numApartment = +prompt('Введіть № квартири (від 1 до 90)');
let msg = 'Такої квартири і такого під\'їзду немає';

if(numApartment > 0){
    if (numApartment <= 20) {
        msg = 'Це I під\'їзд';
    } else if (numApartment <= 48) {
        msg = 'Це II під\'їзд';
    } else if (numApartment <= 90) {
        msg = 'Це III під\'їзд';
    }
}

alert(msg);

/*- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
    якщо змінна не рівна 10 - тоді НЕВІРНО*/

let number = +prompt('Введіть число...');

number === 10 ? alert('ВІРНО') : alert('НЕВІРНО');

/*- Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
    якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
якщо в змінну записали щось інше, спрацьовує else*/

let x = [undefined, 1, 'hello', true, [2, 3], {id: 666}];

for (let i = 0; i < x.length; i++) {
    let type = typeof x[i];

    if (type === 'number') {
        console.log('This is a number -- 1');
    } else if (type === 'string') {
        console.log('This is a string -- 2');
    } else if (type === 'boolean') {
        console.log('This is a boolean -- 3');
    } else if (type === 'object') {
        console.log('This is an object or an array -- 4');
    } else {
        console.log('I do not know that it is');
    }
}

/*- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
    Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН*/

let temp = parseInt(prompt('Чи ми йдемо сьогодні в OKTEN на навчання? \nЯка сьогодні температура?'));

if ((temp >= 10) && (temp <= 22)) {
    alert('ми йдемо ВЧИТИСЯ');
} else {
    alert('сидимо вдома і вчимося ОНЛАЙН');
}

/*
- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
    числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .*/

let userNumber = parseInt(prompt('Введіть число від 1 до 5'));

switch (userNumber){
    case 1:
        document.write('<div style = "color: blue; font-size: 30px">Ви отримуєте приз Авто!</div>');
        break;
    case 2:
        document.write('<div style = "color: blue; font-size: 30px">Ви отримуєте приз Телефон!</div>');
        break;
    case 3:
        document.write('<div style = "color: blue; font-size: 30px">Ви отримуєте приз Велосипед!</div>');
        break;
    case 4:
        document.write('<div style = "color: blue; font-size: 30px">Ви отримуєте приз Ноутбук!</div>');
        break;
    case 5:
        document.write('<div style = "color: blue; font-size: 30px">Ви отримуєте приз Самокат!</div>');
        break;
    default:
        document.write('<div style = "color: red; font-size: 30px">Ви ввели невірне число! Залишаєтеся без приза.</div>');
}
