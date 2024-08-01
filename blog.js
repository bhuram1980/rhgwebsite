document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        {
            title: "Understanding Salesforce Marketing Cloud",
            date: "2024-03-15",
            summary: "An in-depth look at the features and benefits of Salesforce Marketing Cloud.",
            link: "blog-post-1.html"
        },
        {
            title: "Maximizing ROI with Data Cloud",
            date: "2024-03-10",
            summary: "Learn how to leverage Salesforce Data Cloud to improve your marketing ROI.",
            link: "blog-post-2.html"
        },
        // Add more blog posts here
    ];

    const blogContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postHTML = `
            <div class="slds-col slds-size_1-of-1 slds-medium-size_1-of-3">
                <article class="slds-card">
                    <div class="slds-card__header">
                        <h2 class="slds-text-heading_medium">
                            <a href="${post.link}">${post.title}</a>
                        </h2>
                    </div>
                    <div class="slds-card__body slds-card__body_inner">
                        <p class="slds-text-body_small">${post.date}</p>
                        <p>${post.summary}</p>
                    </div>
                    <div class="slds-card__footer">
                        <a href="${post.link}" class="slds-button slds-button_neutral">Read More</a>
                    </div>
                </article>
            </div>
        `;
        blogContainer.insertAdjacentHTML('beforeend', postHTML);
    });
});