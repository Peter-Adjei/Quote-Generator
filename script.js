const quoteContainer = document.getElementById('quote-continer');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');




let apiQuotes = [];

// Show New Quote
function newQuote(){
    // Pick a random quotes from ApiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   // check if Author field is blank and replace it with 'unknown'
   if (!quote.author) {
      quoteAuthor.textContent = 'Unknown';
   } else {
      quoteAuthor.textContent = quote.author;
   }
   // check quote length to determine styling
   if (quote.text.length > 120){
      quoteText.classList.add('long-quote');
   } else{
      quoteText.classList.remove('long-quote');

   } 
    quoteText.textContent = quote.text;
}




// Get Quotes from API
async function getQuotes(){
 
const apiUrl = 'https://type.fit/api/quotes';
 try{
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
    
 } catch (error){
    // Catch Error Here
 }
}


// tweet Quote
function tweetQuote(){
   const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent} `;
   window.open(twitterUrl, '_blank');
}


// Event Listeners
newQuoteButton. addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote)

getQuotes();

