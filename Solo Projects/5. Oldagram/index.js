const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

var render='';

Object.values(posts).forEach(val => {
        render+=
            `
            <section>
                <div class="post-header">
                    <img class="user-avatar" src="${val.avatar}">
                    <div>
                        <h4>${val.name}</h4>
                        <h5>${val.location}</h5>
                    </div>
                </div>
                <img class="post-img" src="${val.post}">
                <div class="post-footer">
                    <div class="actions">
                        <img class="like action" src="images/icon-heart.png">
                        <img class="comment action" src="images/icon-comment.png">
                        <img class="share action"src="images/icon-dm.png">
                    </div>
                    <h5 class="likes">${val.likes} likes</h5>
                    <h5>${val.username}: ${val.comment}</h5>
                </div>
            </section>
            `;
  });

document.getElementById('post-list').innerHTML=render;

