/*є масив -

створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
 до масиву favorites улюблених обраних об'єктів в локальному сховищі.
Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.*/

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let key = 'favorite';
localStorage.setItem(key, JSON.stringify([]));

let container = document.createElement('div');

users.forEach(user => {
    let userContainer = document.createElement('div');
    userContainer.classList.add('user-container');

    let userInfo = document.createElement('div');
    let userName = document.createElement('p');
    userName.innerText = `Name: ${user.name}`;
    let useAge = document.createElement('p');
    useAge.innerText = `Age: ${user.age}`;
    let userStatus = document.createElement('p');
    userStatus.innerText = `Status: ${user.status}`;

    let btnFavorite = document.createElement('button');
    btnFavorite.innerText = 'ADD TO FAVORITES';

    userInfo.append(userName, useAge, userStatus);
    userContainer.append(userInfo, btnFavorite);
    container.appendChild(userContainer);

    btnFavorite.addEventListener('click', () => {
       let arrFavorites = JSON.parse(localStorage.getItem(key));
       arrFavorites.push(user);
       localStorage.setItem(key, JSON.stringify(arrFavorites));
       btnFavorite.disabled = true;
    });

});

let anchor = document.createElement('a');
anchor.href = 'favorites.html';
anchor.innerText = 'See favorites';

document.body.appendChild(container);
document.body.appendChild(anchor);

