const newQuote = document.getElementById('new-quote-btn');
newQuote.addEventListener('click', randomQuotes);
function randomQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response is not good, try again');
            }
            return response.json();
        })
        .then((data) => {
            const randomIndexNum = Math.floor(Math.random() * data.length);
            const randomQuotesGen = data[randomIndexNum];
            const quoteContent = document.querySelector('.quote');
            quoteContent.innerHTML = `<p>${randomQuotesGen.text}</p><p>– ${randomQuotesGen.author || 'Unknown'}</p>`;
        })
        .catch((error) => {
            console.error('Error loading the quote:', error);
        });
}
