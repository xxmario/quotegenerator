const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitterBtn");
const newQuoteButton = document.getElementById("newQuoteBtn");
let allQuotes = [];

function newQuote() {
  const quoteId = Math.floor(Math.random() * allQuotes.length);
  console.log(quoteId);
  console.log(allQuotes[quoteId].text);
  quoteText.innerText = allQuotes[quoteId].text;
  allQuotes[quoteId].author.length > 0
    ? (quoteAuthor.innerText = allQuotes[quoteId].author)
    : (quoteAuthor.innerText = "Unknown");
  console.log(allQuotes[quoteId]);
}
async function loadQuotes() {
  try {
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

loadQuotes();
