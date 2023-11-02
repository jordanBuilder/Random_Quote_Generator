const btnElement = document.getElementById('btn');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const apiURL = "https://api.quotable.io/random";


async function getQuote()
{   /*
    const response = fetch(apiURL).then((res) => res.json());*/
    try {
        btnElement.innerHTML = "Loading...";
        btnElement.disabled = true;
        quoteElement.innerHTML = "Updating...";
        authorElement.innerHTML = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        console.log(quoteAuthor);
        quoteElement.innerHTML = quoteContent;
        authorElement.innerHTML = "~ " + quoteAuthor;
        btnElement.innerHTML = "Get a quote";
        btnElement.disabled = false;
    } catch (error) {
        console.log(error);
        quoteElement.innerHTML = "An error happened, try again later ! ";
        authorElement.innerHTML = "An error happened, try again later ! ";
        btnElement.disabed = false;
    }
}

getQuote();

btnElement.addEventListener('click',getQuote);