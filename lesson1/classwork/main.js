/*
1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
Скласти результат цих чисел в змінній result.
*/
let arr = [];
let result = 0;
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 10); // 0 - 9
    result += arr[i];
    console.log(arr[i]);
}
console.log('result: ' + result);

/*2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр*/
let book = {
    title: 'Harry Potter',
    quantityPages: 1000,
    genre: 'children\'s literature'
};
// console.log(book.genre);

/*3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори*/
let bookDetective = {
    title: 'The best detectives',
    quantityPages: 1050,
    genre: 'detective',
    authors: [
        {title: 'detective 1', author: 'author 1'},
        {title: 'detective 2', author: 'author 2'}
    ]
};

/*4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
Вивести кожну книгу як окремий об'єкт*/
let books = [
    {
        title: 'Book 1',
        quantityPages: 100,
        genre: 'fantasy',
        author: 'author 1'
    },
    {
        title: 'Book 2',
        quantityPages: 200,
        genre: 'fantasy',
        author: 'author 2'
    },
    {
        title: 'Book 3',
        quantityPages: 300,
        genre: 'fantasy',
        author: 'author 3'
    }
];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

/*5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
Значення площі зберігати в змінній s.*/
let height = 23;
let width = 10;
let s = height * width;
console.log('result: ' + s);

/*6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
результат помістіть у змінну v.*/
let heightC = 10;
let dC = 4;
let rC = dC/2;
const PI = 3.14;
let v = (PI * (rC ** 2) * heightC).toFixed(2);
console.log('result: ' + v);

/*
7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
або оператор зведення в ступінь **).*/
let n = 3;
let m = 4;
let k = Math.sqrt((n ** 2) + (4 ** 2));
console.log('result: ' + k)
