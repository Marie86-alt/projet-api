function splitParagraphIntoSentences(paragraph) {
  return paragraph.match(/[^\.!\?]+[\.!\?]+/g);
}

function displaySteps(sentences) {
  let currentStep = 0;
  document.getElementById("nextStepButton").style.display= "block"

function displayNextStep() {
          if (currentStep < sentences.length) {
          document.getElementById('instruction').textContent +=  sentences[currentStep] ;
          currentStep++;
      } else {
          document.getElementById('nextStepButton').style.display = 'none';
          document.getElementById("instruction").textContent += `\n Bon appétit`

      }
  }
  displayNextStep();
  
  document.getElementById('nextStepButton').addEventListener('click', displayNextStep);
}

document.getElementById("recipeButton").addEventListener("click",() =>{
   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(response => {
return response.json()})
.then(result =>{
    // console.log(result)
      let meal=result.meals[0]
      document.getElementsByClassName("repasTemplate")[0].style.display="none"
      document.getElementById("recipeName").innerHTML+=`Name of the dish: ${meal.strMeal}`
      document.getElementById("recipeType").innerHTML+=`Type of the dish: ${meal.strCategory}`
      for (country of countriesAdjective){
        if(country === meal.strArea){
          document.getElementById("recipeOrigin").innerHTML=`Origin: ${meal.strArea}`
        }
      }
      document.getElementById("image").innerHTML=`<img src="${meal.strMealThumb}" alt="Image of recipe mainly based on" ${meal.strIngredient1}/>`
      let instructions = meal.strInstructions
      const sentences = splitParagraphIntoSentences(instructions);
      displaySteps(sentences);
     })
  })

    const countriesAdjective = [
      "Afghan",
      "Albanian",
      "Algerian",
      "Andorran",
      "Angolan",
      "Antiguan",
      "Argentine",
      "Armenian",
      "Australian",
      "Austrian",
      "Azerbaijani",
      "Bahamian",
      "Bahraini",
      "Bangladeshi",
      "Barbadian",
      "Belarusian",
      "Belgian",
      "Belizean",
      "Beninese",
      "Bhutanese",
      "Bolivian",
      "Bosnian",
      "Motswana",
      "Brazilian",
      "Bruneian",
      "Bulgarian",
      "Burkinabe",
      "Burundian",
      "Cabo Verdean",
      "Cambodian",
      "Cameroonian",
      "Canadian",
      "Central African",
      "Chadian",
      "Chilean",
      "Chinese",
      "Colombian",
      "Comorian",
      "Congolese",
      "Congolese",
      "Costa Rican",
      "Croatian",
      "Cuban",
      "Cypriot",
      "Czech",
      "Danish",
      "Djiboutian",
      "Dominican",
      "Dominican",
      "Timorese",
      "Ecuadorian",
      "Egyptian",
      "Salvadoran",
      "Equatorial Guinean",
      "Eritrean",
      "Estonian",
      "Swazi",
      "Ethiopian",
      "Fijian",
      "Finnish",
      "French",
      "Gabonese",
      "Gambian",
      "Georgian",
      "German",
      "Ghanaian",
      "Greek",
      "Grenadian",
      "Guatemalan",
      "Guinean",
      "Guinea-Bissauan",
      "Guyanese",
      "Haitian",
      "Honduran",
      "Hungarian",
      "Icelandic",
      "Indian",
      "Indonesian",
      "Iranian",
      "Iraqi",
      "Irish",
      "Israeli",
      "Italian",
      "Ivorian",
      "Jamaican",
      "Japanese",
      "Jordanian",
      "Kazakhstani",
      "Kenyan",
      "I-Kiribati",
      "Kosovar",
      "Kuwaiti",
      "Kyrgyzstani",
      "Laotian",
      "Latvian",
      "Lebanese",
      "Basotho",
      "Liberian",
      "Libyan",
      "Liechtensteiner",
      "Lithuanian",
      "Luxembourgish",
      "Malagasy",
      "Malawian",
      "Malaysian",
      "Maldivian",
      "Malian",
      "Maltese",
      "Marshallese",
      "Mauritanian",
      "Mauritian",
      "Mexican",
      "Micronesian",
      "Moldovan",
      "Monegasque",
      "Mongolian",
      "Montenegrin",
      "Moroccan",
      "Mozambican",
      "Burmese",
      "Namibian",
      "Nauruan",
      "Nepalese",
      "Dutch",
      "New Zealander",
      "Nicaraguan",
      "Nigerien",
      "Nigerian",
      "Macedonian",
      "Norwegian",
      "Omani",
      "Pakistani",
      "Palauan",
      "Palestinian",
      "Panamanian",
      "Papua New Guinean",
      "Paraguayan",
      "Peruvian",
      "Filipino",
      "Polish",
      "Portuguese",
      "Qatari",
      "Romanian",
      "Russian",
      "Rwandan",
      "Kittitian",
      "Saint Lucian",
      "Vincentian",
      "Samoan",
      "Sammarinese",
      "São Toméan",
      "Saudi Arabian",
      "Senegalese",
      "Serbian",
      "Seychellois",
      "Sierra Leonean",
      "Singaporean",
      "Slovak",
      "Slovenian",
      "Solomon Islander",
      "Somali",
      "South African",
      "South Korean",
      "South Sudanese",
      "Spanish",
      "Sri Lankan",
      "Sudanese",
      "Surinamese",
      "Swedish",
      "Swiss",
      "Syrian",
      "Taiwanese",
      "Tajikistani",
      "Tanzanian",
      "Thai",
      "Togolese",
      "Tongan",
      "Trinidadian",
      "Tunisian",
      "Turkish",
      "Turkmen",
      "Tuvaluan",
      "Ugandan",
      "Ukrainian",
      "Emirati",
      "British",
      "American",
  ];
  