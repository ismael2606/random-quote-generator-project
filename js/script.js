/******************************************
Project - A Random Quote Generator
******************************************/


//quotes array with source, citation, and tags properties.
quotes = [{quote: "Do what you can, with what you have, where you are.", source: "Theodore Roosevelt"}, 
          {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", source: "Nelson Mandela"},       
          {quote: "Some people graduate with honors, I am just honored to graduate." , source: " John McEnroe", tags: "humor"}, 
          {quote: "It's not our abilities that show what we truly are... it is our choices.", source: "J.K. Rowling" , citation: " Harry Potter and the Chamber of Secrets" }, 
          {quote:  "I have a dream that one day this nation will rise up and live out the true meaning of its creed.", source: "Martin Luther King Jr." , year: 1963 }
         ];


/**
 * Returns a random number as index using the quotes array.
 * @return {number} The random number value.
 */
function getRandomQuote() {
  // store random index number
  let randomNumber = Math.floor(Math.random() * quotes.length);
  //returns random object from the quotes array
  return quotes[randomNumber];
}



/**
 * Creates HTML string to display new quote.
 */
function printQuote() {
  // store index number from quotes array into randomQuote variable
  let randomQuote = getRandomQuote();
  // build HTML string with the quote and source property values
  let htlmString = `<p class="quote">${randomQuote.quote}</p>
                    <p class="source">${randomQuote.source}`;

  // checks whether the citation, year and tags property exists and concatenate the contents to htmlString variable
  if (randomQuote.citation) {
    htlmString += `<span class="citation">${randomQuote.citation}</span></p>`;
  }
  if (randomQuote.year) {
    htlmString += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tags) {
    htlmString += `<span class="year">${randomQuote.tags}</span></p>`
  }
  //Insert final quote on the page
  document.getElementById('quote-box').innerHTML = htlmString; 
}


/**
 * Generate ramdom background color
 */
function randomBackgroundColor() {
  //Returns number between 0-255 as RGB color value
  let colorPicker = () => Math.floor(Math.random() * 256);
  //Styles with random RGB color the 'body' element
  document.querySelector('body').style.backgroundColor = `rgb(${colorPicker()}, ${colorPicker()}, ${colorPicker()})` 
} 

//Changes background color after clicking the "show quote" button
document.getElementById('load-quote').addEventListener("click", randomBackgroundColor, false);

//Prints a new quote at intervals of 10 secs
setInterval(printQuote, 10000);

//Changes background color at invervals of 10 secs
setInterval(randomBackgroundColor, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);