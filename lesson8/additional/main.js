/*
написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
*/

let classes = [];

function collectClasses(startElement) {
    let children = startElement.children;

    for (const child of children) {
        if (child.classList.length) {
            for (const childElement of child.classList) {
                if (classes.indexOf(childElement) === -1) {
                    classes.push(childElement);
                }
            }
        }
        collectClasses(child);
    }
}

collectClasses(document.body);
console.log(classes);
