/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * This array of objects holds inspirational quotes from books
 * that are displayed randomly on the page using the functions below.
 * 
 * Source for quotes: https://bookriot.com/short-inspirational-quotes/
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
        year: 2014,
        bookLink: `https://read.amazon.com/kp/embed?asin=B00G2AGV14&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_5C5G9QZCA225QYZ261S7`
    }
];


/**
 * This function chooses a random quote.
 *
 * @param {array} quotes - The array of quote objects.
 * @return {object} The random quote object.
 */
function getRandomQuote(quotes) {
    let randomNumber = Math.floor( Math.random() * (quotes.length - 1) ) + 1;
    return quotes[randomNumber];
}


/**
 * This function creates the HTML to display the randomly chosen quote.
 *
 * @param {array} quotes - The array of quote objects.
 * @return {string} The HTML code for the quote.
 */
function printQuote() {
    let randomQuote = getRandomQuote(quotes);
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
    if ('bookLink' in randomQuote) {
        html += `<a class="bookLink" href="${randomQuote.bookLink}">Click to read the book</a>`;
    }
    html += `</p>`;
    document.getElementById('quote-box').innerHTML = html; 
    // ADD CODE TO SET A RANDOM BACKGROUND COLOR
    //ADD AUTO REFRESH OF CODE AT 20 SECOND INTERVAL - use setInterval()
}


/***
 * Click event listener for the print quote button.
 * (This code came in the project file.)
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
