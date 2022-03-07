/*-- взять массив пользователей

- Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
2й - оставляет старше 29 лет включительно
3й - оставляет тех у кого город киев
Данные выводить в документ*/

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let arrNameCheckBox = ['status', 'age', 'city'];
let arrTextLabel = ['Статус FALSE', 'Старший 29 років', 'м. Київ'];

let formFilter = document.createElement('form');
formFilter.setAttribute('name', 'fFilter');

for (let i = 0; i < arrNameCheckBox.length; i++) {
    let containerInput = document.createElement('div');
    let chBox = document.createElement('input');
    chBox.setAttribute('type', 'checkbox');
    chBox.setAttribute('id', `${arrNameCheckBox[i]}`);
    let label = document.createElement('label');
    label.setAttribute('for', `${arrNameCheckBox[i]}`)
    label.innerText = `${arrTextLabel[i]}`;

    containerInput.append(chBox, label);
    formFilter.appendChild(containerInput);
}

let btnFilter = document.createElement('button');
btnFilter.innerText = 'FILTER';
formFilter.appendChild(btnFilter);
let listUsers = document.createElement('ul');

document.body.appendChild(formFilter);
document.body.appendChild(listUsers);

formFilter.onsubmit = function (e) {
    e.preventDefault();

    let arrFilter = [];
    let resultUsers = [];

    if (formFilter.status.checked) {
        arrFilter = usersWithAddress.filter(value => !(value.status));
        resultUsers = [...arrFilter];
        arrFilter = [];
    }

    if (formFilter.age.checked) {
        if (formFilter.status.checked) {
            arrFilter = resultUsers.filter(value => value.age >= 29);
        } else {
            arrFilter = usersWithAddress.filter(value => value.age >= 29);
        }
        resultUsers = [];
        resultUsers = [...arrFilter];
        arrFilter = [];
    }

    if (formFilter.city.checked) {
        if (formFilter.status.checked || formFilter.age.checked) {
            arrFilter = resultUsers.filter(value => value.address.city === 'Kyiv');
        } else {
            arrFilter = usersWithAddress.filter(value => value.address.city === 'Kyiv');
        }

        resultUsers = [];
        resultUsers = [...arrFilter];
        arrFilter = [];
    }

    // console.log(resultUsers);
    formFilter.status.checked = false;
    formFilter.age.checked = false;
    formFilter.city.checked = false;


    listUsers.innerText = '';
    for (const user of resultUsers) {
        let li = document.createElement('li');
        li.innerText = `Name: ${user.name}, age: ${user.age}, status: ${user.status}, city: ${user.address.city}`;
        listUsers.appendChild(li);
    }
};

