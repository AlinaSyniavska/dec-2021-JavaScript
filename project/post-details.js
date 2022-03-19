let postBox = document.getElementsByClassName('post-details')[0];
let commentsBox = document.getElementsByClassName('comments')[0];

let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
console.log(post);

let postId = document.createElement('h4');
postId.innerText = post.id;
let postTitle = document.createElement('h4');
postTitle.innerText = post.title;
let postBody = document.createElement('p');
postBody.innerText = post.body;

postBox.append(postId, postTitle, postBody);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const commentItem of comments) {
            let comment = document.createElement('div');
            comment.classList.add('comment');

            let commentId = document.createElement('p');
            commentId.innerText = commentItem.id;
            let commentName = document.createElement('p');
            commentName.innerText = commentItem.name;
            let commentEmail = document.createElement('p');
            commentEmail.innerText = commentItem.email;
            let commentBody = document.createElement('p');
            commentBody.innerText = commentItem.body;

            comment.append(commentId, commentName, commentEmail, commentBody);
            commentsBox.appendChild(comment);
        }
    });




