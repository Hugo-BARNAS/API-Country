let countryArray = [];
let global = [];
let country;
let resulatCountry;

function loadDoc() {
  let output
  const xhttp = new XMLHttpRequest()
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      country = JSON.parse(this.responseText);
      country.forEach(element => {
        output += '<span class="border border-secondary p-1 m-1">' + element.name + '</span>'
        console.log(element.name);
        global = element;
        countryArray.push(element.name);
        //console.log(countryArray);  
        //console.log(global);
      });

      document.querySelector("div").innerHTML = output
    }
  }
  xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true)
  xhttp.send()
}

function countrySelected() {
  //identifiation de l'imput
  country = document.getElementById("inputCountry").value;
  //passage de tous les pays dans le tableau
  for (let i = 0; i < countryArray.length; i++) {
    if (countryArray[i].includes(country)) {
      //intégration de la liste li
      let myLi = document.createElement("li");
      myLi.style.listStyle = "none";

      //dans mon nouveau li tu vas mettre le nom du pays qui a été trouvé
      myLi.innerHTML = countryArray[i];
      //J'identifie le ul que j'ai crée dans le html au niveau du js
      let myUl = document.getElementById("zoneTexte");
      //je dis au js que mon li est associé au ul (myLi est associé à mon myUl)
      myUl.appendChild(myLi);
      //console.log(countryArray[i]);
    }
  };
}







loadDoc()