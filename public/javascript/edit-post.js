// Edit post function
async function editFormHandler(event) {
    event.preventDefault();
    
    // Get post title and content from form 
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-text"]').value;
    // Get post ID from current URL
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    // Update post 
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);