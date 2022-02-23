/*
- створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.*/

let container1 = document.createElement('div');
container1.innerText = 'FORM 1';
container1.classList.add('container');

let container2 = document.createElement('div');
container2.innerText = 'FORM 2';
container2.classList.add('container');

document.body.append(container1, container2);

let form1 = document.createElement('form');
form1.setAttribute('name', 'f1');
container1.appendChild(form1);

let input1 = document.createElement('input');
input1.setAttribute('name', 'input1');
input1.setAttribute('tabindex', '1');

let input2 = document.createElement('input');
input2.setAttribute('name', 'input2');
input2.setAttribute('tabindex', '2');

form1.append(input1, input2);

let form2 = document.createElement('form');
form2.setAttribute('name', 'f2');
container2.appendChild(form2);

let input3 = document.createElement('input');
input3.setAttribute('name', 'input3');
input3.setAttribute('tabindex', '3');

let input4 = document.createElement('input');
input4.setAttribute('name', 'input4');
input4.setAttribute('tabindex', '4');

form2.append(input3, input4);

let btn = document.createElement('button');
btn.innerText = 'Read';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    console.log(`Text from input 1: ${form1.input1.value}`);
    console.log(`Text from input 2: ${form1.input2.value}`);
    console.log(`Text from input 3: ${form2.input3.value}`);
    console.log(`Text from input 4: ${form2.input4.value}`);
});

document.body.appendChild(document.createElement('hr'));

/*
- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
*/

let rowNumber = document.createElement('input');
rowNumber.setAttribute('tabindex', '4');
rowNumber.setAttribute('type', 'number');

let columnNumber = document.createElement('input');
columnNumber.setAttribute('tabindex', '5');
columnNumber.setAttribute('type', 'number');

let cellText = document.createElement('input');
cellText.setAttribute('tabindex', '6');

let createTable = document.createElement('button');
createTable.innerText = 'Create Table';

document.body.append(rowNumber, columnNumber, cellText, createTable);

createTable.addEventListener('click', () => {
    let trNumber = rowNumber.value;
    let tdNumber = columnNumber.value;
    let cellContent = cellText.value;

    let container = document.createElement('div');
    let table = document.createElement('table');
    container.appendChild(table);
    document.body.appendChild(container);

    for (let i = 0; i < trNumber; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j < tdNumber; j++) {
            let td = document.createElement('td');
            td.innerText = cellContent;
            tr.appendChild(td);
        }
    }

    rowNumber.value = '';
    columnNumber.value = '';
    cellText.value = '';
});

/*
- Створити масив не цензурних слів.
    Створити інпут текстового типу.
    Якщо людина вводить слово і воно міститься в масиві не цензурних слів
кинути алерт з попередженням.
    Перевірку робити при натисканні на кнопку*/

let badWords = ['зараза', 'пеньок', 'ідіот', 'дурень'];

let inputWord = document.createElement('input');
inputWord.setAttribute('placeholder', 'enter a word...');
let btnCheck = document.createElement('button');
btnCheck.innerText = 'CHECK';
document.body.appendChild(document.createElement('hr'));
document.body.append(inputWord, btnCheck);

btnCheck.addEventListener('click', () => {
    let word = inputWord.value.toLowerCase().trim();

    for (const badWord of badWords) {
        if (badWord === word) {
            alert('You are a rude person :(');
            inputWord.value = '';
        }
    }

    if (inputWord.value) {
        alert('You are the most polished person in the world :)');
        inputWord.value = '';
    }
});

/*
- Створити масив не цензурних слів.
    Створити інпут текстового типу.
    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    Кинути алерт з попередженням у випадку якщо містить.
    Перевірку робити при натисканні на кнопку*/

let inputSentence = document.createElement('input');
inputSentence.setAttribute('placeholder', 'enter a sentence...');
let btnCheck2 = document.createElement('button');
btnCheck2.innerText = 'CHECK SENTENCE';
document.body.appendChild(document.createElement('hr'));
document.body.append(inputSentence, btnCheck2);

btnCheck2.addEventListener('click', () => {
    let sentence = inputSentence.value.toLowerCase().trim();
    let arrWords = sentence.split(' ');

    for (const badWord of badWords) {
        for (const arrWord of arrWords) {
            if (arrWord === badWord) {
                alert('You are a rude person2 :(');
                inputSentence.value = '';
            }

        }
    }
    if (inputSentence.value) {
        alert('You are the most polished person2 in the world :)');
        inputSentence.value = '';
    }
});

