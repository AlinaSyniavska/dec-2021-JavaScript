/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
щоб отримати 5 елементів в рядку.
    Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts*/

let postsBox = document.createElement('div');
postsBox.classList.add('box');
document.body.appendChild(postsBox);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        // console.log(posts);
        for (const post of posts) {
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
        }
    });

/*
    2.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
    Для кожного елементу свій блок div.comment
Всі характеристики повинні мати свої блоки всередені div.comment
https://jsonplaceholder.typicode.com/comments*/

let commentsBox = document.createElement('div');
commentsBox.classList.add('box');
document.body.appendChild(commentsBox);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(commentArr => {
        // console.log(commentArr);

        commentArr.forEach(comment => {
            let commentItem = document.createElement('div');
            commentItem.classList.add('comment');

            let commentId = document.createElement('h5');
            commentId.innerHTML = `<strong>ID: ${comment.id}</strong>`;
            let commentName = document.createElement('h4');
            commentName.innerHTML = `<strong>${comment.name}</strong>`;
            let commentEmail = document.createElement('h4');
            commentEmail.innerHTML = `<strong>${comment.email}</strong>`;
            let commentBody = document.createElement('p');
            commentBody.innerText = comment.body;

            commentItem.append(commentId, commentName, commentEmail, commentBody);
            commentsBox.appendChild(commentItem);
        })
    });



