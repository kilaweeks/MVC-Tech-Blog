// Add post function 
async function newFormHandler(event) {
    event.preventDefault();
    // Get title and content values from form 
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-text"]').value;
    // Add post 
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);