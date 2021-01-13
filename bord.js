//Page + Buttons
page();
       
function page() {
  createButtons(25);
}
    
function createButtons(amount){
  for (var a = 1;a <(amount + 1); a++) { 
     var button = document.createElement("button"); 
     button.classList.add("button")
     button.id = "button" + a; 
     button.innerHTML = input; 
     container.appendChild(button);
  }
}

//---------------------------------------------------------------------------------------------------------------------------\\

//Check word
var CheckWord = document.getElementById("CheckWord");
var Check = document.getElementById("Check");
var text = document.getElementById("Text");
var input = (Check.value);

var Array = [];

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
  input = (Check.value);
  text.innerHTML = '';

  if(isNaN(input)){
    text.innerHTML = input;
  } else {
    alert('Een nummer is geen geldige invoer!');
  }
}

//---------------------------------------------------------------------------------------------------------------------------\\

//Change button color
