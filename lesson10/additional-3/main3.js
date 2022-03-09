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

let currentListUsers = [...usersWithAddress];
let arrNameCheckBox = ['status', 'age', 'city'];
let arrTextLabel = ['Статус FALSE', 'Старший 29 років', 'м. Київ'];
let flStatus = 0;
let flAge = 0;
let flCity = 0;

let createListUsers = (arr) => {
    let list = document.getElementById('list');
    list.innerHTML = '';
    for (const user of arr) {
        let li = document.createElement('li');
        li.innerText = `Name: ${user.name}, age: ${user.age}, status: ${user.status}, city: ${user.address.city}`;
        list.appendChild(li);
    }
}

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

let listUsers = document.createElement('ol');
listUsers.id = 'list';
document.body.appendChild(listUsers);
document.body.appendChild(formFilter);

createListUsers(currentListUsers);

formFilter.status.addEventListener('change', e => {
    if (e.target.checked) {
        flStatus = 1;
    } else {
        flStatus = 0;
    }
});

formFilter.age.addEventListener('change', e => {
    if (e.target.checked) {
        flAge = 1;
    } else {
        flAge = 0;
    }
});

formFilter.city.addEventListener('change', e => {
    if (e.target.checked) {
        flCity = 1;
    } else {
        flCity = 0;
    }
});

formFilter.onchange = function () {
    // console.log(e.target);
    if (flStatus && flAge && flCity) {
        createListUsers(currentListUsers.filter(value => !(value.status))
            .filter(value => value.age >= 29)
            .filter(value => value.address.city === 'Kyiv')
        );
    } else if (flStatus && flAge && !flCity) {
        createListUsers(currentListUsers.filter(value => !(value.status))
            .filter(value => value.age >= 29)
        );
    } else if (flStatus && !flAge && flCity) {
        createListUsers(currentListUsers.filter(value => !(value.status))
            .filter(value => value.address.city === 'Kyiv')
        );
    } else if (!flStatus && flAge && flCity) {
        createListUsers(currentListUsers.filter(value => value.age >= 29)
            .filter(value => value.address.city === 'Kyiv')
        );
    } else if(flStatus && !flAge && !flCity){
        createListUsers(currentListUsers.filter(value => !(value.status))
        );
    } else if(!flStatus && flAge && !flCity){
        createListUsers(currentListUsers.filter(value => value.age >= 29)
        );
    } else if(!flStatus && !flAge && flCity){
        createListUsers(currentListUsers.filter(value => value.address.city === 'Kyiv')
        );
    } else if(!flStatus && !flAge && !flCity){
        createListUsers(currentListUsers);
    }
};



