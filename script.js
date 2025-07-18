window.onload = () => {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const container = document.getElementById('posts');

  if (posts.length === 0) {
    container.innerHTML = "<p>No posts yet.</p>";
    return;
  }

  posts.reverse().forEach(post => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h2>${post.title}</h2>
      <a href="post.html?id=${post.id}">Read More</a>
    `;
    container.appendChild(div);
  });
};
