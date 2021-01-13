//Page + Buttons
var CheckWord = document.getElementById("CheckWord");
var Check = document.getElementById("Check");
var text = document.getElementById("Text");
var input = Check.value;
var word1 = words[Math.round(Math.random() * words.length)];

var container2 = document.getElementById("container2");

var Array = [];
var aantal_rijen = 5;
var aantal_letters = 5;

page();
       
function page() {
  createBoard(aantal_rijen, aantal_letters);
}
    
function createBoard(aantal_rijen, aantal_letters){
  for (var a = 1;a <(aantal_rijen + 1); a++) { 
    var rij = document.createElement("div");
    rij.id = "rij" + a;  
    container2.appendChild(rij);

    for (var i = 1;i <(aantal_letters + 1); i++) {
      var letter = document.createElement("div"); 
      letter.className = "letter";
      letter.id = "letter" + i + "rij" + a; 
      letter.innerHTML = i; 
      rij.appendChild(letter);
    }
  }
}

CheckWord.onclick = function(){
  CheckInput();
};

Check.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    CheckWord.click();
  }
});

function CheckInput() {
  input = Check.value;

  if(input.length == 0){
    alert('Een nummer is geen geldige invoer!');
  } else {
    input.charAt(a);
    
    
  }
}

