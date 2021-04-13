/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'With great power comes great responsibility.',
    source: 'Peter Benjamin Parker',
    citation: 'Spider-Man',
    year: 2002
  },
  {
    quote: 'It was Beauty killed the Beast.',
    source: 'Carl Denham',
    citation: 'King Kong',
    year: 2005
  },
  {
    quote: 'After all, tomorrow is another day!',
    source: 'Katie Scarlett O\'Hara',
    citation: 'Gone With the Wind',
    year: 1952
  },
  {
    quote: 'Roads? Where we\'re going we don\'t need roads.',
    source: 'Doc',
    // citation: 'Back to the Future',
    // year: 1985
  },
  {
    quote: `Hey. Don't ever let somebody tell you... 
            You can't do something. Not even me. 
            You got a dream... You gotta protect it. 
            People can't do somethin' themselves, 
            they wanna tell you you can't do it. 
            If you want somethin', go get it. 
            Period.`,
    source: 'Christopher "Chris" Paul Gardner',
    citation: 'The Pursuit of Happyness',
    year: 2007
  }
];

/**
 * Function that returns random quote from quote array
 * @returns {object} Randomly selected quote
 */
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

/**
 * Function that prints quote information in this page
 */
function printQuote() {
  const quote = getRandomQuote();

  // To add extra info, don't include </p> at the end
  let html = `
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;

  // Check if there are citation or year
  if (quote.citation !== undefined) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year !== undefined) {
    html += `<span class="citation">${quote.year}</span>`;
  }

  html += '</p>';

  document.querySelector('#quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);