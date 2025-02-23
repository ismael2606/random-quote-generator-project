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
quotes = [{quote: "Do what you can, with what you have, where you are.", source: "Theodore Roosevelt"}, 
          {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", source: "Nelson Mandela"},       
          {quote: "You may say I'm a dreamer, but I'm not the only one.", source: "John Lennon" }, 
          {quote: "It's not our abilities that show what we truly are... it is our choices.", source: "J.K. Rowling" , citation: " Harry Potter and the Chamber of Secrets" }, 
          {quote:  "I have a dream that one day this nation will rise up and live out the true meaning of its creed.", source: "Martin Luther King Jr." , year: 1963 }
         ];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}



/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let htlmString = `<p class="quote">${randomQuote.quote}</p>
                    <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    htlmString += ` <span class="citation">${randomQuote.citation}</span></p>`;
  }
  if (randomQuote.year) {
    htlmString += ` <span class="year">${randomQuote.year}</span></p>`;
  }
  document.getElementById('quote-box').innerHTML = htlmString; 
}



function randomBackgroundColor() {
  let colorPicker = () => Math.floor(Math.random() * 256);
  document.querySelector('body').style.backgroundColor = `rgb(${colorPicker()}, ${colorPicker()}, ${colorPicker()})` 
} 

// Display random background color when printing new quote
document.getElementById('load-quote').addEventListener("click", randomBackgroundColor, false);

//Prints a new quote at intervals of 10secs
setInterval(printQuote, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);