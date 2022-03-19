let usersBox = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const userItem of users) {
            let userBox = document.createElement('div');
            userBox.classList.add('user');
            let userId = document.createElement('h4');
            userId.innerText = userItem.id;
            let userName = document.createElement('h4');
            userName.innerText = userItem.name;
            let userDetailsBtn = document.createElement('a');
            userDetailsBtn.innerText = 'Show Details';
            userDetailsBtn.href=`./user-details.html?data=${JSON.stringify(userItem)}`;

            userBox.append(userId, userName, userDetailsBtn);
            usersBox.appendChild(userBox);
        }
    });