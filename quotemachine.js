
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const { text, author } = getRandomQuote();
  document.getElementById('text').innerText = text;
  document.getElementById('author').innerText = author;
  document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(text)}" - ${encodeURIComponent(author)}`;
}

document.getElementById('new-quote').addEventListener('click', displayQuote);

// Load a random quote on initial load
displayQuote();



