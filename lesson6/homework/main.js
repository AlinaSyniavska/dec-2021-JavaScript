/*- Знайти та вивести довжину наступних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/

console.log(`length: ${'hello world'.length}`);
console.log(`length: ${'lorem ipsum'.length}`);
console.log(`length: ${'javascript is cool'.length}`);

/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/

console.log(`ToUpperCase: ${'hello world'.toUpperCase()}`);
console.log(`ToUpperCase: ${'lorem ipsum'.toUpperCase()}`);
console.log(`ToUpperCase: ${'javascript is cool'.toUpperCase()}`);

/*- Перевести до нижнього регістру наступні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

console.log(`ToLowerCase: ${'HELLO WORLD'.toLowerCase()}`);
console.log(`ToLowerCase: ${'LOREM IPSUM'.toLowerCase()}`);
console.log(`ToLowerCase: ${'JAVASCRIPT IS COOL'.toLowerCase()}`);

/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/

let str1 = ' dirty string   ';
let trim = str1.trim();
console.log(trim);

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/

let str2 = 'Каждый охотник желает знать';

let stringToArray = str => str.split(' ');

let arr = stringToArray(str2);
console.log(arr);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

/*- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/

let str3 = 'Каждый охотник желает знать';

let delete_characters = (str, length) => str.substr(0, length);

console.log(delete_characters(str3, 7));
document.writeln(delete_characters(str3, 7)); // Каждый

/*- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/

let str4 = "HTML JavaScript PHP";

let insert_dash = str => {
    // let arr = str.split(' ');
    // let newStr = arr.map(item => item.concat('-')).join('').slice(0, -1).toUpperCase();
    let newStr =  str.split(' ').join('-').toUpperCase();
    return newStr;
}

console.log(insert_dash(str4))
document.writeln(insert_dash(str4)); // 'HTML-JAVASCRIPT-PHP'

/*- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.*/

let capitalizeFirstLetter = str => {
    let firstLetter = str.charAt(0).toUpperCase()
    // return firstLetter.concat(str.slice(1));
    return firstLetter + (str.slice(1));
}

console.log(capitalizeFirstLetter('javascript is cool'));

/*
- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.*/

let capitalize = str => {
    let newStr = str
                .split(' ')
                .map(item => item[0]
                    .toUpperCase()
                    .concat(item.slice(1)))
                .join(' ');

    return newStr;
}

console.log(capitalize('Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери'));