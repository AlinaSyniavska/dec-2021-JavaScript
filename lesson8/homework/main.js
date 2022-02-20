/*
- Напишіть код,  котрий :
-- отримує текст з параграфа з id "content"
*/

let elementById = document.getElementById('content').innerText;
console.log(elementById);

/*
-- отримує текст з блоку з id "rules"
*/

let elementByIdRules = document.getElementById('rules').innerText;
console.log(elementByIdRules);

/*
-- замініть текст параграфа з id 'content' на будь-який інший
*/

document.getElementById('content').innerText = 'Node.innerText - это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков. ';

/*
-- замініть текст параграфа з id 'rules' на будь-який інший
*/

document.getElementById('rules').innerText = 'Node.textContent - это альтернативное свойство, которое имеет ряд отличий.';

/*
-- змініть кожному елементу колір фону на червоний
*/

let childrenBody = document.body.children;
for (const child of childrenBody) {
    console.log(child);
    child.style.background = 'red';
}

/*
-- змініть кожному елементу колір тексту на синій
*/

for (const child of childrenBody) {
    child.style.color = 'blue';
}

/*
-- отримати весь список класів елемента з id=rules і вивести їх в console.log
*/

console.log(document.getElementById('rules').classList);

/*
-- поміняти колір тексту у всіх елементів fc_rules на червоний
*/

let collectionOfFcRules = document.getElementsByClassName('fc_rules');
for (const collection of collectionOfFcRules) {
    collection.style.color = 'darkred';
}