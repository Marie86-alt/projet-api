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
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
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
    }
}

searchBtn.addEventListener("click", getMovie) //si l'utulisateur click ca lance la fonction getMovie
window.addEventListener("load", getMovie) //quand on recharge la page cela lance la fonction getoMovie