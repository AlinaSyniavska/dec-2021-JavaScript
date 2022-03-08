let key = 'favorite';
let usersFromLocalStorage = JSON.parse(localStorage.getItem(key));

console.log(usersFromLocalStorage);

let container = document.createElement('div');

usersFromLocalStorage.forEach(user => {
    let userContainer = document.createElement('div');
    userContainer.style.width = '200px';
    userContainer.style.borderBottom = '1px solid lightgrey';

    let userName = document.createElement('p');
    userName.innerText = `Name: ${user.name}`;
    let useAge = document.createElement('p');
    useAge.innerText = `Age: ${user.age}`;
    let userStatus = document.createElement('p');
    userStatus.innerText = `Status: ${user.status}`;

    userContainer.append(userName, useAge, userStatus);
    container.appendChild(userContainer);
});

document.body.appendChild(container);
