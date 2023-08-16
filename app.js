let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');


const quotes = [
    {
        quote: "Although no one can go back amd make a brand new start anyone can start from now and make a brand new ending",
        author: "Carl Beard"
    },

    {
        quote: "Three can keep a secret, if two of them are dead.",
        author: "Benjamin Franklin"
    },
    {
        quote: "To be or not to be, that is the question.",
        author: "William Shakespeare"
    },
    {
        quote: "The way I see it, if you want the rainbow, you gotta put up with the rain",
        author: "Dolly Parton"
    },
    {
        quote: "Living is the art of getting used to what we didn't expect",
        author: "Eleanor C. Wood"
    },

]; 

btn.addEventListener('click', function(e) 
{
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;

}
);
