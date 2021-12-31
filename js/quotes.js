const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
    {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
  ];

  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
quote.classList.add("quote");

author.innerText = todaysQuote.author;
author.classList.add("author");
