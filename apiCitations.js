fetch("https://quote-garden.onrender.com/api/v3/quotes?limit=20")
  .then((serverResponse) => {
    return serverResponse.json();
  })
  .then((serverResponseInJSON) => {
    quotesArray = serverResponseInJSON.data;
    //Display a random quote on the page
    showRandomQuote();
  });
let quotesArray = [];
function showRandomQuote() {
  let index = Math.floor(Math.random() * quotesArray.length);
  let randomQuote = quotesArray[index].quoteText;
  let randomAuthor = quotesArray[index].quoteAuthor;
  document.querySelector(
    "#quote"
  ).innerHTML = `<div id="typewriterEffect">${randomQuote} </br></br> By: \n${randomAuthor}</div>`;
}
document.getElementById("buttonRandomQuote").addEventListener("click", () => {
  showRandomQuote();
});
