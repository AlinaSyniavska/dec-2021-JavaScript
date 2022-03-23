/*
(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
    Функция создает в боди 2 кнопки (назад/вперед)
при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите
к следующему дочернему элементу (лежащему на одном уровне)
НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти
внутрь элемента и  выводит первого ребенка. и тд.
    Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
    лежащему с ним на одном уровне*/

let arrChildren = [];
let index = -1;
let prevElement = document.body;

function scraper(startElement) {
    if (startElement.tagName !== 'BODY' && startElement.tagName !== 'SCRIPT') {
        arrChildren.push(startElement);
    }

    let children = startElement.children;
    for (const child of children) {
        scraper(child);
    }
}

function printInfoElement(arr, i){
    prevElement.style.background = 'none';
    arr[i].style.background = 'lightpink';
    prevElement = arr[i];
}

scraper(document.body);

/*for (const child of arrChildren) {
    console.log(child);
}*/
let btnContainer = document.createElement('div');
btnContainer.style.display = 'flex';

btnContainer.style.columnGap = '50px';
let btnForward = document.createElement('button');
btnForward.style.width = '150px';
btnForward.innerText = 'FORWARD';
let btnBack = document.createElement('button');
btnBack.style.width = '150px';
btnBack.innerText = 'BACK';
btnBack.disabled = true;

btnContainer.append(btnBack, btnForward)
document.body.appendChild(btnContainer);

btnForward.addEventListener('click', function (e) {
    btnBack.disabled = false;

    index++;
    if (index === arrChildren.length) {
        index = 0;
    }
    printInfoElement(arrChildren, index);
});

btnBack.addEventListener('click', function (e) {
    index--;
    if (index < 0) {
        index = arrChildren.length - 1;
    }
    printInfoElement(arrChildren, index);
});
