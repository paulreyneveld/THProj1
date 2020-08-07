/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// An array of quotes and their respective info (as objects) follows

let quotes = [
	{
	quote: "Only he who has seen better days and lives to see better days again knows their full value.",
	source: "Mark Twain",
	citation: "Notebook",
	year: 1898,
	srcLang: "English"
	},
	
	{
	quote: "I am always doing what I can’t do yet in order to learn how to do it.",
	source: "Vincent van Gogh",
	citation: "The Complete Letters of Vincent van Gogh",
	srcLang: "Dutch"
	},

	{
	quote: "We are made of star-stuff.",
	source: "Carl Sagan",
	citation: "The Cosmic Connection: An Extraterrestrial Perspective",
	year: 1973,
	srcLang: "English"
	},

	{
	quote: "Self-trust is the first secret of success.",
	source: "Ralph Waldo Emerson",
	citation: "Society and Solitude: Twelve Chapters",
	year: 1870,
	srcLang: "English"
	},
	
	{
	quote: "Pain is inevitable. Suffering is optional.",
	source: "Haruki Murakami",
	citation: "What I Talk About When I Talk About Running",
	srcLang: "Japanese"
	}
];

/**
 * Obtains and returns a random quote object from the hardcoded array of objects
 * @author Paul Reyneveld 
 * @return {object} - Randomly chosen quote object from array
 */

function getRandomQuote() {
	let randQuoteIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randQuoteIndex];
}

/**
 * Properly formats and prints randomly assigned quote object for HTML processing 
 * @author Paul Reyneveld
 * @return {object} - Formatted HTML assigned to appropriate DOM location 
 */

function printQuote() {
	let quoteObj = getRandomQuote();
	let html = '';

	html += `<p class="quote">${quoteObj.quote}</p>`;
	html += `<p class="source">${quoteObj.source}`;

	if (quoteObj.citation) {
		html += `<span class="citation">${quoteObj.citation}</span>`;
	}

	if (quoteObj.year) {
		html += `<span class="year">${quoteObj.year}</span>`;
	}

	// Extra Credit: Additional property displayed if existent
	if (quoteObj.srcLang) {
		html += `<span class="srcLang">, Language: ${quoteObj.srcLang}</span>`;
	}
	html += `</p>`;
	
	// Extra Credit: Change background color when quote is refreshed
	// Adapted this code from css-tricks.com
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = "#" + randomColor;

	return document.getElementById('quote-box').innerHTML = html; 

}

// Extra Credit: Change quotes on a timer
// I adapted this function from W3C Schools
// Passes a reference to printQuote for execution at three second intervals if 
// the click event isn't triggered instead

setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

