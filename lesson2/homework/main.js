/*- Дано змінну time яка рівна числу від 0 до 59.
Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

// 0 - 14; 15 - 29; 30 - 44; 45 - 59
let time = Math.floor(Math.random() * 60);
console.log(time);

if ((time >= 0) && (time <= 14)) {
    console.log('time is in I quarter');
} else if ((time >= 15) && (time <= 29)) {
    console.log('time is in II quarter');
} else if ((time >= 30) && (time <= 44)) {
    console.log('time is in III quarter');
} else if ((time >= 45) && (time <= 59)) {
    console.log('time is in IV quarter');
} else {
    console.log('Error!!!');
}

/*- У змінній day дано якесь число від 1 до 31.
Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

// 1 decade: 1-10, 2 decade: 11-20, 3 decade: 21-30(31)
let min = 1;
let max = 31;
let day = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(day);

if ((day >= 1) && (day <= 10)) {
    console.log('day is in I decade');
} else if ((day >= 11) && (day <= 20)) {
    console.log('day is in II decade');
} else if ((day >= 21) && (day <= 31)) {
    console.log('day is in III decade');
} else {
    console.log('Error!!!');
}

/*- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    Перевірте роботу скрипта при test, що дорівнює true, false.
    Напишіть два варіанти скрипта - з коротким записом(тернаркою)*/

let test = true;
if (test) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

test = false;
test ? console.log('Вірно') : console.log('Неправильно');

/*- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let a = 1;
a !== 0 ? console.log('Вірно') : console.log('Неправильно');
a = 0;
a !== 0 ? console.log('Вірно') : console.log('Неправильно');
a = -3;
a !== 0 ? console.log('Вірно') : console.log('Неправильно');

/*- Скласти розклад на тиждень за домопоги switch.
Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.*/

let idDay = +prompt('Введіть день тижня у відповідності з числами 1 - 7. Де 1 - понеділок, ..., 7 - неділя');
let msg = '';
switch (idDay) {
    case 1:
        msg = 'Понеділок: Лекція';
        break;
    case 2:
        msg = 'Вівторок: Практика';
        break;
    case 3:
        msg = 'Середа: Лекція';
        break;
    case 4:
        msg = 'Четвер: Практика';
        break;
    case 5:
        msg = 'П\'ятниця: Лекція';
        break;
    case 6:
        msg = 'Субота: Англійська мова';
        break;
    case 7:
        msg = 'Неділя: Відпочинок';
        break;
    default:
        msg = 'Невірно вказаний день тижня';
        break;
}
alert(msg);

/*- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.*/

let year = +prompt('Введіть будь-який рік...');
year%4 ? alert(`${year} - Невисокосний рік`) : alert(`${year} - Високосний рік`);

/*
- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!*/

let officialName = prompt('Яка «офіційна» назва JavaScript?').toLowerCase();

if(officialName === 'ecmascript'){
    alert('Правильно');
} else {
    alert('Не знаєте? ECMAScript!');
}