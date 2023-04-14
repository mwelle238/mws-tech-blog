// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#article-title').value.trim();
//   const body = document.querySelector('#article-body').value.trim();


//   if (title && body) {
//     const response = await fetch(`/api/articles`, {
//       method: 'POST',
//       body: JSON.stringify({ title, body }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to post article');
//     }
//   }
// };

const buttonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/articles/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete article');
    }
  } else {
    if (event.target.hasAttribute('data-btn')) {
      const btnType = event.target.getAttribute('data-btn');
      if (btnType === 'new') {
        document.querySelector('.new-article-form').classList.remove('display-none');
        document.querySelector('.new-article-btn').classList.add('display-none');
      }
      if (btnType === 'cancel') {
        document.querySelector('.new-article-form').classList.add('display-none');
        document.querySelector('.new-article-btn').classList.remove('display-none');
      }
      if (btnType === 'submit') {
        const title = document.querySelector('#article-title').value.trim();
        const body = document.querySelector('#article-body').value.trim();
      
      
        if (title && body) {
          const response = await fetch(`/api/articles`, {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to post article');
          }
        }
      }
    }
  }
};

document
  .querySelector('.article-list')
  .addEventListener('click', buttonHandler);
