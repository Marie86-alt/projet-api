let movieName = document.getElementById("movie-name")
let searchBtn = document.getElementById("search-btn")
let result = document.getElementById("result")
let key = "9c816b33"
let getMovie = () =>{
    let movieNameR = movieName.value 
    let url = `http://www.omdbapi.com/?t=${movieNameR}&apiKey=${key}`;
    //si le champ est un input vide 

    if(movieNameR.length <= 0) {
        result.innerHTML = `<h3 class="msg">Merci d'entrer un nom de film</h3>`

    }
    else {
        fetch(url) //('http://www.omdbapi.com/?i=tt3896198&apikey=9c816b33')
    .then(Response => Response.json())
    .then((data) => { //si le film est dans la base de données
    
        if(data.Response == "True"){
            result.innerHTML =`
            <div class ="info">
                <div>
                <h2>${data.Title}</h2>
                <div class="rating"> 
                <img src="img/etoile.png" alt="star">
                <h4>${data.imdbRating}<h4>
                </div>

                <div class="détails">
                <span>${data.Rated}</span>
                <span>${data.Year}</span>
                <span>${data.Runtime}</span>
                </div>

                <div class="genre">
                <div>${data.Genre/* .split(",").join("</div><div>") */}</div>
                </div>

                <div class"content">
                <h3>Box Office:</h3>
                <p>${data.BoxOffice}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
                </div>

            </div>


                <img src=${data.Poster} class="poster"
                </div>
                `

            
        }
        //si le film n'est pas dans la base de données
        else{
            result.innerHTML = `<h3 class="msg>${data.error}</h3>`//pour ajouter de html
        }

    }).catch(() => {
        result.innerHTML = `<h3 class=msg">il ya une erreur </h3>`
// aide a capturer les erreurs 
    })
}}

  const wordCloudContainer = document.getElementById("word-cloud");
   const genres = [];
   const genreCounts = {};
   
   const countGenres = (movies) => {
       movies.forEach(movie => {
           const movieGenres = movie.Genre.split(", ");
           movieGenres.forEach(genre => {
               if (!genreCounts[genre]) {
                   genreCounts[genre] = 1;
               } else {
                   genreCounts[genre]++;
               }
           });
       });
   };
   
   const generateWordCloudHTML = () => {
       const sortedGenres = Object.keys(genreCounts).sort((a, b) => genreCounts[b] - genreCounts[a]);
       const maxCount = genreCounts[sortedGenres[0]];
       const minCount = genreCounts[sortedGenres[sortedGenres.length - 1]];
   
       const html = sortedGenres.map(genre => {
           const fontSize = (genreCounts[genre] - minCount) / (maxCount - minCount) * 15 + 10;
           return `<span class="word" style="font-size: ${fontSize}px">${genre}</span>`;
       }).join("");
     document.getElementById("word-cloud-title").innerHTML= "Most popular movie genres:"
     wordCloudContainer.innerHTML =  html
   };
   
   const movies = [
       { Genre: "Action, Adventure, Fantasy" },
       { Genre: "Action, Adventure" },
       { Genre: "Drama, Romance" },
       { Genre: "Comedy" },
       { Genre: "Action, Adventure, Sci-Fi" },
       { Genre: "Drama" },
       { Genre: "Comedy, Drama" },
       { Genre: "Action, Crime, Drama" },
       { Genre: "Adventure, Family, Fantasy" },
       { Genre: "Animation, Adventure, Comedy" }
   ];
   
   countGenres(movies);
   generateWordCloudHTML();

searchBtn.addEventListener("click", getMovie) 
window.addEventListener("load", getMovie) 

   // Récupérer les données de votre API et les stocker dans un tableau
   const boxOfficeData = [
    { Title: "Avatar", boxOffice: 785221649 },
    { Title: "Avengers: Endgame", boxOffice: 858373000 },
    { Title: "Aquaman", boxOffice: 335104314 },
    { Title: "woman king", boxOffice: 67328130 },
    { Title: "dune", boxOffice: 1671713208 },
    { Title: "The Lion King (2019)", boxOffice: 422783777 },
    { Title: "The Avengers", boxOffice: 623357910 },
    { Title: "Furious 7", boxOffice: 353007020 },
    { Title: "top gun", boxOffice: 180258178 },
    { Title: "Black Panther", boxOffice: 700426566 },
    
];


// Extraire les noms des films et les recettes de box-office pour créer les étiquettes et les données du graphique
const labels = boxOfficeData.map(entry => entry.Title);
const data = boxOfficeData.map(entry => entry.boxOffice);

// Créer le graphique à barres avec Chart.js
const ctx = document.getElementById('boxOfficeChart').getContext('2d');
const boxOfficeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Box Office',
            data: data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Couleur de fond des barres
            borderColor: 'rgba(255, 99, 132, 1)', // Couleur des bordures des barres
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Axe Y commence à 0
            }
        }
    }
});
searchBtn.addEventListener("click", getMovie) 
window.addEventListener("load", getMovie) 