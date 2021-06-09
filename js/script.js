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
        quote: `Those who don't believe in magic will never find it.`,
        source: `Roald Dahl`,
        citation: `The Minipins`,
        year: 1991
    },
    {
        quote: `Be yourself and people will like you.`,
        source: `Jeff Kinney`,
        citation: `Diary of a Wimpy Kid`,
        year: 2007
    },
    {
        quote: `It is better to be hated for what you are than to be loved for what you are not`,
        source: `André Gide`,
        citation: `Autumn Leaves`,
        year: 1950
    },
    {
        quote: `Sometimes weak and wan, sometimes strong and full of light. The moon understands what it means to be human.`,
        source: `Tahereh Mafi`,
        citation: `Shatter Me`,
        year: 2011
    },
    {
        quote: `The momet you doubt whether you can fly, you cease forever to be able to do it.`,
        source: `J.M. Barrie`,
        citation: `Peter Pan`,
        year: 1911
    },
    {
        quote: `Time you enjoy wasting is not wasted time.`,
        source: `Marthe Troly-Curtin`,
        citation: `Phrynette Married`,
        year: 1912
    },
    {
        quote: `When you can't find someone to follow, you have to find a way to lead by example.`,
        source: `Roxane Gay`,
        citation: `Bad Feminist`,
        year: 2014
    }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuotes(quotes) {
    let randomNumber = Math.floor( Math.random() * (quotes.length - 1) ) + 1;
    return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote() {
    let randomQuote = getRandomQuotes(quotes);
    let html = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
    `;
    if ('citation' in randomQuote) {
        html += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if ('year' in randomQuote) {
        html += `<span class="year">${randomQuote.year}</span>`;
    }
    html += `</p>`;
    document.getElementById('quote-box').innerHTML = html; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);