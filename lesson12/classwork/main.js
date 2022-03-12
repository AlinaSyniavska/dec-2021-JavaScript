/*
1.
Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/posts
    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста*/

let postBox = document.createElement("div");
postBox.classList.add('box');
document.body.appendChild(postBox);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postArr => {
        for (const postItem of postArr) {
            // console.log(postItem);
            let post = document.createElement('div');
            post.classList.add('post');

            let idPost = document.createElement('h4');
            idPost.innerText = `ID: ${postItem.id} - UserID: ${postItem.userId}`;
            let titlePost = document.createElement('h3');
            titlePost.innerText = postItem.title;
            let bodyPost = document.createElement('p');
            bodyPost.innerText = postItem.body;

            let btnComment = document.createElement('button');
            btnComment.innerText = 'Show comment';

            post.append(idPost, titlePost, bodyPost, btnComment);
            postBox.appendChild(post);

            btnComment.onclick = (e) => {
                e.target.disabled = true;
                // GET	/posts/1/comments
                fetch(`https://jsonplaceholder.typicode.com/posts/${postItem.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {

                        for (const commentItem of comments) {
                            // console.log(commentItem);
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
                            post.appendChild(comment);
                        }
                    });
            };
        }
    });





