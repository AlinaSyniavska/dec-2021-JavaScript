/*- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let normalizesName = (name, symbol) => {
    let normalName = name.split(symbol).filter(item => item.length > 0).join(' ');

    return normalName;
}

console.log(normalizesName(n1, '.'));
console.log(normalizesName(n2, '-'));
console.log(normalizesName(n3, '_'));

/*
- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
*/

let createRandomArray = length => {
    let array = [];

    for (let i = 0; i < length; i++) {
        let arrayElement = Math.round(Math.random() * 100);
        array.push(arrayElement);
    }
    return array;
}

console.log('RANDOM');
console.log(createRandomArray(5));
console.log(createRandomArray(15));

/*
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
Відсортувати його за допомоги sort
*/

let sortArray = createRandomArray(10);
console.log('SORT');
console.log(sortArray);
console.log(sortArray.sort((a, b) => a - b));

/*
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
відфільтрувати  його за допомоги filter, залишивши тільки парні числа
*/

let filterArray = createRandomArray(10);
console.log('FILTER PAIR');
console.log(filterArray);
console.log(filterArray.filter(item => !(item % 2)));

/*
- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
*/

let randArray = createRandomArray(10).map(element => element + '');

console.log(randArray);

/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]*/

let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a)
    }
}

console.log(sortNums([11, 21, 3], 'ascending')); // [3,11,21]
console.log(sortNums([11, 21, 3], 'descending')); // [21,11,3]

/*
- є масив*/
/*-- відсортувати його за спаданням за monthDuration

-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);

console.log(coursesAndDurationArray);

let longCourses = coursesAndDurationArray.filter(item => item.monthDuration > 5);

console.log(longCourses);