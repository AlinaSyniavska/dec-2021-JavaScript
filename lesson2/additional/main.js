/*Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
    Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.*/

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// let friends = ["Ivan", "Ira"];

if (friends.length >= 3) {
    console.log('це великий масив, в якому  3 і більше елементи');
    document.write('<div style="font-size: 30px; text-transform: uppercase">це великий масив, в якому  3 і більше елементи</div>')
} else {
    console.log('це маленький масив, в якому менше 3-х елементів');
    document.write('<div style="font-size: 30px; text-transform: uppercase">це маленький масив, в якому менше 3-х елементів</div>')
}

/*Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
    Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.*/

let a = Math.round(Math.random() * 10);
let b = Math.round(Math.random() * 10);
let c = Math.round(Math.random() * 10);
let middle;

console.log('A: ' + a + '   B: ' + b + '   C: ' + c);

if (a !== b && a !== c && b !== c) {
    if (a < b && a < c) {   // a - min
        if (b < c) {
            middle = b;
        } else {
            middle = c;
        }
    } else if (b < a && b < c) {    // b - min
        if (a < c) {
            middle = a;
        } else {
            middle = c;
        }
    } else if (c < a && c < b) {    // c - min
        if (a < b) {
            middle = a;
        } else {
            middle = b;
        }
    }
} else {
    console.log('Середнього числа немає, бо два числа з трьох однакові (або навіть три)');
}

console.log('middle: ' + middle);

/*Перепишіть конструкцію if з використанням умовного оператора '?':
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}*/

a = Math.round(Math.random() * 5);
b = Math.round(Math.random() * 5);
let result;

console.log('A: ' + a + '   B: ' + b);

if (a + b < 4) {
    result = 'Мало (конструкція if)';
} else {
    result = 'Багато (конструкція if)';
}
console.log(result);

a + b < 4 ? console.log('Мало (конструкція ?)') : console.log('Багато (конструкція ?)');

/*Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
напишіть це тернарним оператором*/

let min = -100;
let max = 100;
let number = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(number);

number > 0 ? console.log('positive') :
    number < 0 ? console.log('negative') : console.log('it is null');



