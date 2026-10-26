// --- 1. Dynamic Footer Date ---
const footerElement = document.querySelector('footer p');
const currentDate = new Date(); 
const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const currentDateTime = currentDate.toLocaleString(undefined, options); 

if (footerElement) {
    footerElement.innerHTML = `&copy; ${currentDateTime} Albert Einstein. Designed with CSS Grid.`;
}

// --- 2. Mobile Hamburger Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// When the hamburger icon is clicked, toggle the 'active' class to show/hide the menu
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// --- 3. Functional Blog Post Submission ---
const blogForm = document.getElementById('blog-form');
const blogContainer = document.getElementById('blog-posts');

blogForm.addEventListener('submit', function(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the values the user typed in
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;

    // Create a new div element for the blog post
    const newPost = document.createElement('div');
    newPost.classList.add('post');

    // Add the HTML structure inside the new post
    newPost.innerHTML = `
        <h4>${title}</h4>
        <p>${content}</p>
    `;

    // Add the new post to the top of the blog section
    blogContainer.prepend(newPost);

    // Clear the form fields after publishing
    blogForm.reset();
});