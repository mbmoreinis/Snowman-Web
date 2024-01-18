var parts = ["abdomen","thorax","head","left","right","nose","lose"];
var nextPartId = 0;
var answer = getAnswer();
var answerLetters = Array.from(answer);
var guessedLetters = makeBlanks();
var gameOver = false;
setup();

function getAnswer(){
 let words = ["beast","operation","impress","hearing","melodic","inlay","scorch","fascinated","fight","statement","unhealthy","exchange","befall","changeable","terrible","show","equable","begin","submit","rambunctious","make","stingy","dedicate","sing","baby","like","jump","kind","muscle","guide","goldfish","idiotic","wide-eyed","scarf","reduce","error","tangible","aded","owntown","spy","difficult","rattle","increase","polish","delightful","talk","truculent","marvelous","view"];
 let index = Math.floor(Math.random()*words.length);
 let answer = words[index];
 console.log(answer);
 return answer;
}

function makeBlanks(){
 let blanks = answerLetters.length;
 let underScores = [];
 for (let i=0; i<answerLetters.length; i++) {
   underScores.push("_");
  }
 return underScores;
}

function checkBackground() {
  let snowman = document.getElementById("snowman");
  if (nextPartId == 4) {
   snowman.classList.add("yellowshift");
  }
  else if (nextPartId == 5) {
   snowman.classList.add("redshift");	
  }
}

function setup(){
  let snowman = document.getElementById("snowman");
  snowman.style.backgroundImage = "url('images/snow.jpg')";
  snowman.style.backgroundRepeat = "no-repeat";
  snowman.style.backgroundSize = "cover";
  snowman.style.backgroundColor = "C6D1D3";
  let guesses = document.getElementById("guesses");
  guesses.style.border="none"; 
  let guessButton = document.createElement("input");
  guessButton.setAttribute("id","guessButton");
  guessButton.addEventListener("click", simpleGuess);
  guessButton.innerHTML = "Guess";
  guesses.appendChild(guessButton); 
  //guessButton.	style.display="none";
  let feedback = document.createElement("p");
  feedback.setAttribute("id","feedback");
  feedback.innerHTML = "Enter a letter";
  guesses.appendChild(feedback);
  let entryBox = document.createElement("input");
  entryBox.setAttribute("id","entryBox");
  guesses.appendChild(entryBox);
  entryBox.addEventListener("keypress",function(event) {
    if (event.key ==="Enter") {
      event.preventDefault();
      document.getElementById("guessButton").click();
    }
  });
}


function simpleGuess(){
      let guesses = document.getElementById("guesses");
      let letters = document.getElementById("feedback");
    let letterBox =document.getElementById("entryBox");
    let letter = letterBox.value;
    letterBox.value="";
      let message = "";
      if (checkLetter(letter) == true) {
        if (guessedLetters.join() == answerLetters.join()) {
          message = "You win! The answer was " + answer;
        }
        else {
          message = "Good guess! Your letters are now: <br>"+ guessedLetters;
        }
      }
      else {
        if (nextPartId == parts.length){
          message = "You lose! The answer was "+answer;
        }
        else {
          message = "Bad guess! Your letters are still: <br>"+ guessedLetters;
          badGuess();
        }
      }
      feedback.innerHTML = message;
    }		


function checkLetter(letter){
  let goodLetter = false;
  for(let index = 0;index < answerLetters.length;index++){
    if (answerLetters[index] == letter){
      goodLetter = true;
      guessedLetters[index] = letter;
    }
  }
  return goodLetter;
}

function playSnowman(){
  setup();
  let letter = "";
  while (gameOver == false){
    letter = prompt("Guess a letter");
    if (checkLetter(letter) == true){
      alert(guessedLetters);
    }
    else {
    alert("Bad guess! "+guessedLetters);
    badGuess();
    if (nextPartId == parts.length){
      alert("You lose! The answer was "+answer);
      gameOver = true;
    }
  }
  }		
}

function badGuess(){
  if (nextPartId < parts.length) {
    let nextPart = parts[nextPartId];
  checkBackground();
    let next = document.getElementById(nextPart);
    next.style.display="block";
    nextPartId++;
  }
}

function newgame() {

}

