// You don't need any API key to use this API http://api.forismatic.com/api/1.0/
// Get Quote from API


/* we have 5 Ids 
 quote-contianer --> 
 quote -> Quote itself, to change 
 author -> Author ID
 new-quote -> buttons on click, generate new quote 
 twitter -> twitter button 
*/
// elements that we want to change and play around with, 
// we assigned them a const vari

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


async function getQuote(){
    // by using local web-address, calling the API will not work, so by calling a proxy, will let you get around 

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'


    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'; 

    // try catch statement 

    try{

        const response  = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        // if author is unknow    
        if (data.quoteAuthor === ''){
            authorText.innerText = 'Unknow Author';
        }else {
            authorText.innerText = data.quoteAuthor; 
        }

        // reduce font size for long quote 

        if (data.quoteText.length > 50){
            quoteText.classList.add('long-quote');
        }else {
            quoteText.classList.remove('long-quote');
        }

        quoteText.innerText = data.quoteText;  

    } catch (erro){
        getQuote();

    }

}

// On load run 
getQuote();