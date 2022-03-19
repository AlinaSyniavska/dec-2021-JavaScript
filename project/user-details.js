let userBox = document.getElementsByClassName('user-details')[0];
let postsBox = document.getElementsByClassName('posts')[0];
let postsBtn = document.getElementsByClassName('posts-btn')[0];

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let userId = document.createElement('p');
userId.innerText = user.id;
let userName = document.createElement('p');
userName.innerText = user.name;
let userName2 = document.createElement('p');
userName2.innerText = `username: ${user.username}`;
let userEmail = document.createElement('p');
userEmail.innerText = `email: ${user.email}`;
let userPhone = document.createElement('p');
userPhone.innerText = `phone: ${user.phone}`;

userBox.append(userId, userName, userName2, userEmail, userPhone);

postsBtn.onclick = (e) => {
    e.target.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const postItem of posts) {
                let post = document.createElement('div');
                post.classList.add('post');

                let postTitle = document.createElement('h5');
                // postTitle.innerText = postItem.title;
                postTitle.innerText = `${postItem.id}. ${postItem.title}`;
                let postDetailsBtn = document.createElement('button');
                postDetailsBtn.innerText = 'Show Post Details';

                postDetailsBtn.onclick = () => {
                    location.href = `./post-details.html?data=${JSON.stringify(postItem)}`;
                }

                post.append(postTitle, postDetailsBtn);
                postsBox.appendChild(post);
            }
        });
}
