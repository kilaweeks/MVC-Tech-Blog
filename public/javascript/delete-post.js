// Delete post funciton
async function deleteFormHandler(event) {
    event.preventDefault();
    
    // Get post ID from current URL
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    // Delete post by ID
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',    
    });    
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);