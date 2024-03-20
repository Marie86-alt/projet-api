fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(response => {
  return response.json()})
  .then(result =>{
        //console.log(result)
        let meal=result.meals[0]
        //let specificationList=document.getElementById("listSpecification").innerHTML
        document.getElementById("listSpecification").innerHTML+=`<li>${meal.strMeal}</li>`
        document.getElementById("listSpecification").innerHTML+=`<li>${meal.strCategory}</li>`
        document.getElementById("listSpecification").innerHTML+=`<li>${meal.strArea}</li>`
        document.getElementById("image").innerHTML=`<img src="${meal.strMealThumb}"/>`
        document.getElementById("instruction").innerHTML=`${meal.strInstructions}`      
      })