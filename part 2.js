window.onload = function() {
    const savedPosts = JSON.parse(localStorage.getItem('myPosts')) || [];
    savedPosts.forEach(post => displayPost(post));
};

function addPost() {
    const postInput = document.getElementById('postInput');
    const postText = postInput.value;

    if (postText.trim() === "") {
        alert("Please write something first!");
        return;
    }

    // Display the post
    displayPost(postText);

    // Save to Local Storage
    savePost(postText);

    // Clear the input
    postInput.value = "";
}

function displayPost(text) {
    const container = document.getElementById('postContainer');
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerText = text;
    
    // Newest posts appear at the top
    container.insertBefore(postDiv, container.firstChild);
}

function savePost(text) {
    const posts = JSON.parse(localStorage.getItem('myPosts')) || [];
    posts.push(text);
    localStorage.setItem('myPosts', JSON.stringify(posts));
}