document.getElementById("buttonRandomQuote").addEventListener("click",()=>{
    fetch("https://quote-garden.onrender.com/api/v3/quotes?limit=5")
    .then(quote => { return quote.json()})
    .then((responseQuotesInJson) => {

    const quote =
        responseQuotesInJson.data[Math.round(Math.random() * 4)];
        
      const quotes = responseQuotesInJson.data;
    //   for (let quote of quotes){
    //     const div = document.createElement("div");
    //     div.classList.add("quote");
    //     div.innerHTML = quote.quoteText;
    //     document.getElementById("quotes").appendChild(div);
    //   }
      quotes.forEach((quote) => {
        const div = document.createElement("div");
        div.classList.add("quote");
        div.innerHTML = quote.quoteText;
        document.getElementById("quotes").appendChild(div);
       
      });
    });
})


// let text = responseQuotesInJson.data[0].quoteText;
// let author = responseQuotesInJson.data[0].quoteAuthor;
