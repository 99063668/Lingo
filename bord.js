//Variabelen
var CheckWord = document.getElementById("CheckWord");
var Check = document.getElementById("Check");
var text = document.getElementById("Text");
var input = Check.value;
var word1 = words[Math.round(Math.random() * words.length)];

var container2 = document.getElementById("container2");

var Array = [];
var aantal_rijen = 5;
var aantal_letters = 5;
var rij_nummer = 1;

page();
       

//Load + style page
function page() {
  document.body.style.backgroundColor = "grey";
  document.getElementById("container").style.backgroundColor = "rgb(103, 235, 63)";
  document.getElementById("container2").style.backgroundColor = "white";

  createBoard(aantal_rijen, aantal_letters);
}
   

//Make rows
function createBoard(aantal_rijen, aantal_letters){
  for (var a=1; a<(aantal_rijen + 1); a++) { 
    var rij = document.createElement("div");
    rij.id = "rij" + a;  
    container2.appendChild(rij);

    for (var i=1;i <(aantal_letters + 1); i++) {
      var letter = document.createElement("div"); 
      letter.className = "letter";
      letter.id = "letter" + i + "rij" + a; 
      letter.innerHTML = i; 
      rij.appendChild(letter);
    }
  }
}

//HTML elements
function createElement(element, id, words){
  var letters = document.createElement(element); 
  letters.id = id; 
  if (words != undefined && words != "") {
    letters.innerHTML = words; 
  }
  rij.appendChild(letter);  
}


//Check word button
CheckWord.onclick = function(){
  CheckInput();
};


//Enterkey
Check.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    CheckWord.click();
  }
});

"honde"
//Check the user input
function CheckInput() {
  input = Check.value;
  /*console.log(CheckInput);*/
  if(isNaN(input)){
    for (var i=0; i<word1.length; i++){
      var letter2 = word1.charAt(i);
      var letter = input.charAt(i);
      document.getElementById("letter" + (i + 1) + "rij" + rij_nummer).innerHTML = letter;
    }
    rij_nummer++;
  } else {
    alert('Een nummer is geen geldige invoer!'); 
  }
}
