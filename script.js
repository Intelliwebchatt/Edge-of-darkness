// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_ANALYTICS_ID');

// Fetch News from API
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWSAPI_KEY')
    .then(response => response.json())
    .then(data => {
        const newsFeed = document.getElementById('news-feed');
        data.articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'news-article';
            articleDiv.innerHTML = `
                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                <p>${article.description || ''}</p>
            `;
            newsFeed.appendChild(articleDiv);
        });
    })
    .catch(error => console.error('Error fetching news:', error));
});
