document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted');
            console.log('Name:', this.name.value);
            console.log('Email:', this.email.value);
            console.log('Message:', this.message.value);
            
            // Clear the form
            this.reset();
            
            // Show a success message (you might want to style this better)
            alert('Thank you for your message. We will get back to you soon!');
        });
    }

    // Dynamic year for copyright in footer
    const yearSpan = document.querySelector('.copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Lazy loading images (if browser supports it)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback to a third-party lazy loading library here
    }

    // Add a scroll-to-top button (you'll need to add this button to your HTML)
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Function to load blog posts (you would typically fetch this from a server)
function loadBlogPosts() {
    const blogContainer = document.querySelector('#blog .slds-grid');
    if (blogContainer) {
        // This is where you'd typically fetch blog posts from a server
        // For now, we'll just add a dummy post
        const postHTML = `
            <div class="slds-col slds-size_1-of-1 slds-medium-size_1-of-3">
                <article class="slds-card">
                    <div class="slds-card__header">
                        <h3 class="slds-text-heading_small">
                            <a href="#">New Post Title</a>
                        </h3>
                    </div>
                    <div class="slds-card__body slds-card__body_inner">
                        <p>This is a summary of the new blog post...</p>
                    </div>
                    <div class="slds-card__footer">
                        <a href="#">Read More</a>
                    </div>
                </article>
            </div>
        `;
        blogContainer.insertAdjacentHTML('beforeend', postHTML);
    }
}

// Call loadBlogPosts when the page loads
document.addEventListener('DOMContentLoaded', loadBlogPosts);