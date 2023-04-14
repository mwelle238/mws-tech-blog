const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    const id = document.querySelector('#comment').getAttribute("data-id");
    if (comment) {
      const response = await fetch(`/api/articles/${id}`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/article/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }
};
  
const commentButtonHandler = async (event) => {
    document.querySelector('.comment-form').classList.remove("display-none");
    document.querySelector('#comment-button').classList.add("display-none");
};
  
document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
  
document
    .querySelector('#comment-button')
    .addEventListener('click', commentButtonHandler);