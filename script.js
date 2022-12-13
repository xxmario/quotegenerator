const quoteCard = document.getElementById("quoteCard");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitterBtn");
const newQuoteButton = document.getElementById("newQuoteBtn");
const loader = document.getElementById("loader");
let allQuotes = [];

function newQuote() {
  showLoadingSpinner();
  const quoteId = Math.floor(Math.random() * allQuotes.length);
  quoteText.innerText = allQuotes[quoteId].text;
  quoteAuthor.innerText = "Unknown";
  if (allQuotes[quoteId].author) {
    quoteAuthor.innerText = allQuotes[quoteId].author;
  }
  hideLoadingSpinner();
}
async function loadQuotes() {
  try {
    showLoadingSpinner();
    const quotesAPI = "https://type.fit/api/quotes";
    //consider to use a proxy like heruku if it doesn't work or has a CORS error
    const response = await fetch(quotesAPI);
    allQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.error(error);
  }
}

newQuoteButton.addEventListener("click", () => {
  newQuote();
});

function showLoadingSpinner() {
  loader.hidden = false;
  quoteCard.hidden = true;
}

function hideLoadingSpinner() {
  loader.hidden = true;
  quoteCard.hidden = false;
}

loadQuotes();
