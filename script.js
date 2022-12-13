const quoteCard = document.getElementById("quoteCard");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitterBtn");
const newQuoteButton = document.getElementById("newQuoteBtn");
const loader = document.getElementById("loader");
let allQuotes = [];

function newQuote() {
  loading();
  const quoteId = Math.floor(Math.random() * allQuotes.length);
  quoteText.innerText = allQuotes[quoteId].text;
  quoteAuthor.innerText = "Unknown";
  if (allQuotes[quoteId].author) {
    quoteAuthor.innerText = allQuotes[quoteId].author;
  }
  completeLoad();
}
async function loadQuotes() {
  try {
    loading();
    const quotesAPI = "https://type.fit/api/quotes";
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

function loading() {
  loader.hidden = false;
  quoteCard.hidden = true;
}

function completeLoad() {
  loader.hidden = true;
  quoteCard.hidden = false;
}

loadQuotes();
