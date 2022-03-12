/*
1.
Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/users
    кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
    Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста*/

let usersBox = document.createElement('div');
usersBox.classList.add('users-box');
document.body.appendChild(usersBox);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersData => {
        for (const user of usersData) {
            let container = document.createElement('div');
            container.classList.add('container');

            let userBlock = document.createElement('div');
            userBlock.classList.add('user-block');

            let userBlockPerson = document.createElement('div');
            userBlockPerson.classList.add('user-block__person');

            let userPostBtn = document.createElement('button');
            userPostBtn.innerText = 'Show Posts';

            let userInfoBlock = document.createElement('div');
            userInfoBlock.classList.add('user-info-block');

            let userName = document.createElement('h3');
            userName.innerText = `${user.id}. ${user.name} (${user.username})`;
            let userEmail = document.createElement('p');
            userEmail.innerHTML = `email: <strong>${user.email}</strong>`;
            let userPhone = document.createElement('p');
            userPhone.innerHTML = `phone: <strong>${user.phone}</strong>`;
            let userWebsite = document.createElement('p');
            userWebsite.innerHTML = `website: <strong>${user.website}</strong>`;

            let addressBlock = document.createElement('div');
            addressBlock.classList.add('address-block');

            let city = document.createElement('p');
            city.innerText = `City: ${user.address.city}`;
            let street = document.createElement('p');
            street.innerText = `Street: ${user.address.street}`;
            let suite = document.createElement('p');
            suite.innerText = `Suite: ${user.address.suite}`;
            let zipcode = document.createElement('p');
            zipcode.innerText = `Zip code: ${user.address.zipcode}`;

            let geo = document.createElement('div');
            geo.classList.add('geo');

            let geoTitle = document.createElement('div');
            geoTitle.innerText = 'Geo: ';
            let geoInfo = document.createElement('div');
            geoInfo.classList.add('geo-info');

            let lat = document.createElement('p');
            lat.innerText = `lat: ${user.address.geo.lat}`;
            let lng = document.createElement('p');
            lng.innerText = `lng: ${user.address.geo.lng}`;

            userInfoBlock.append(userName, userEmail, userPhone, userWebsite);
            userBlockPerson.appendChild(userInfoBlock);
            geoInfo.append(lat, lng);
            geo.append(geoTitle, geoInfo);
            addressBlock.append(city, street, suite, zipcode, geo);
            userBlockPerson.appendChild(addressBlock);

            userBlock.append(userBlockPerson);
            userBlock.append(userPostBtn);
            container.appendChild(userBlock);
            usersBox.appendChild(container);

            userPostBtn.onclick = e => {
                e.target.disabled = true;
                e.target.style.transform = 'none';
                e.target.style.background = 'none';
                // /users/1/posts
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(postsData => {
                        let postsBox = document.createElement('div');
                        postsBox.classList.add('box');
                        container.insertBefore(postsBox, e.target.parentElement.nextElementSibling);

                        for (const post of postsData) {
                            let postItem = document.createElement('div');
                            postItem.classList.add('post');

                            let postId = document.createElement('h4');
                            postId.innerText = `ID: ${post.id}`;
                            let postTitle = document.createElement('h3');
                            postTitle.innerText = `TITLE: ${post.title}`;
                            let postBody = document.createElement('p');
                            postBody.innerText = `BODY: ${post.body}`;

                            postItem.append(postId, postTitle, postBody);
                            postsBox.appendChild(postItem);





                            let btnComment = document.createElement('button');
                            btnComment.innerText = 'Show comment';

                            postItem.append(btnComment);

                            btnComment.onclick = (e) => {
                                e.target.disabled = true;
                                e.target.parentElement.style.transform = 'none';
                                e.target.style.background = 'none';

                                // GET	/posts/1/comments
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {

                                        for (const commentItem of comments) {
                                            let comment = document.createElement('div');
                                            comment.classList.add('comment');

                                            let idComment = document.createElement('h5');
                                            idComment.innerText = `ID: ${commentItem.id}`;
                                            let nameComment = document.createElement('h4');
                                            nameComment.innerText = commentItem.name;
                                            let emailComment = document.createElement('h4');
                                            emailComment.innerText = commentItem.email;
                                            let bodyComment = document.createElement('p');
                                            bodyComment.innerText = commentItem.body;

                                            comment.append(idComment, nameComment, emailComment, bodyComment);
                                            postItem.appendChild(comment);
                                        }
                                    });
                            };





                        }
                    });
            }










        }
    });



