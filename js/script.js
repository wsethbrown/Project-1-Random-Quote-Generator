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

var quotes = [
  {
      quote: "That's no moon.",
      source: 'Obi-Wan Kenobi',
      citation: 'Star Wars',
      year: "1979",
      tags: "movie"
  },
  {
      quote: "Hold a true friend with both hands.",
      source: 'Nigerian Proverb',
      citation: null,
      year: null,
      tags: "saying"
  },
  {
      quote: "Drama is life with the dull bits cut out.",
      source: 'Alfred Hitchcock',
      citation: null,
      year: null,
      tags: "saying"
  },
  {
      quote: "My wife's jealousy is getting ridiculous. The other day she looked at my calendar and wanted to know who May was.",
      source: 'Rodney Dangerfield',
      citation: null,
      year: null,
      tags: ["saying, comedy"]
  },
  {
      quote: "True humility is not thinking less of yourself; it is thinking of yourself less.",
      source: 'C.S. Lewis',
      citation: 'Mere Christianity',
      year: "1952",
      tags: ["saying, advice"]
  }
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let quote = Math.floor(Math.random() * quotes.length) //Create a random number using length of quotes array as ceiling for the random number
  // console.log(quotes[quote].tags)
  // console.log(quote, quotes[quote]) *** Uncomment to test if quote is creating a random number and applying it to the array
  return quotes[quote]
}


//Auto-refreshed quotes on an interval of 10 seconds
let refresh = setInterval(printQuote, 10000)

// Create a random background color using 256 as the ceiling to not go out of RGB's bounds. Include in printQuote
// so that it's called everytime a quote is generated through the event handler
function rbc() {
  let color = () => Math.floor(Math.random() * 256);
  let bgColor = `rgb(${color()}, ${color()}, ${color()})`

  document.body.style.background = bgColor;
  }


/***
 * `printQuote` function
***/
function printQuote() {
  let quote = getRandomQuote() //call the getRandomQuote() function and assign the random quote generated to variable
  let printOut = `<p class="quote">${quote.quote}</p> <p class="source">${quote.source}` //Create HTML base to be displayed via Javascript
  if (quote.citation) { //Add citation from quotes array if there is one
    printOut += `<span class="citation">${quote.citation}</span>`
  }
  if (quote.year) { //Add year from quotes array if there is one
    printOut += `<span class="year"> ${quote.year}</span>`
  }
  if (quote.tags) {
    printOut += `<span class="tags">, ${quote.tags}</span>`
  }
  printOut += "</p>" //Whether there is a citation or year, add ending </p> to the printOut variable

  rbc();
  document.getElementById('quote-box').innerHTML = printOut //add the printOut variable's HTML to the DOM
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);