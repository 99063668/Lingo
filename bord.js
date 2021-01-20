//Variabelen
var CheckWord = document.getElementById("CheckWord");
var Check = document.getElementById("Check");
var text = document.getElementById("Text");
var input = Check.value;
var word1 = words[Math.round(Math.random() * words.length)];
console.log(word1);
var container2 = document.getElementById("container2");

const aantal_rijen = 5;
var aantal_letters = word1.length;
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


//Check the user input
function CheckInput() {
  input = Check.value;
  if(rij_nummer > aantal_rijen){
    alert('U heeft geen pogingen meer om te raden!'); 

  }else if(input.length != word1.length){
    alert('Geen geldige invoer! Alleen '+ word1.length+' letter woorden zijn toegestaan.'); 

  /*}else if(input.length == null){
    alert("Ongeldige poging! Voer een woord in.");*/

  }else if(input.length == word1.length) {
    for (var i=0; i<word1.length; i++){
      var letter2 = word1.charAt(i);
      var letter = input.charAt(i);
      copy = word1;

      document.getElementById("letter" + (i + 1) + "rij" + rij_nummer).innerHTML = letter;

      if(input == word1){
        document.getElementById("letter" + (i + 1) + "rij" + rij_nummer).style.backgroundColor= "green";
      }

      else if(letter == letter2){
        document.getElementById("letter" + (i + 1) + "rij" + rij_nummer).style.backgroundColor= "green";
        copy = copy.replace(letter, "");
      }
      else if(copy.includes(letter)){
        document.getElementById("letter" + (i + 1) + "rij" + rij_nummer).style.backgroundColor = "yellow";
        copy = copy.replace(letter, "");
      }else{
        document.getElementById("letter" + (i + 1) + "rij" + rij_nummer).style.backgroundColor = "red";
      }
    }
  }
  /*for (var i = 0; i < word1.length; i++) {
    
    // for (var a = 0; a< word1.length; a++) {
    //   if(word1 != "" && word1 == input){
    //     document.getElementById("letter" + (i + 1) + "rij" + rij_nummer).style.backgroundColor = "yellow";
    //   }
    // }
  }*/
  rij_nummer++;
}
  
//Show first letter
ShowLetter(0);
function ShowLetter(index_letter){
  for (var i = 0; i <aantal_rijen; i++) {
    var letter2 = word1.charAt(index_letter);
    document.getElementById("letter" + (index_letter + 1) + "rij" + (i + 1)).innerHTML = letter2;
  }
}
