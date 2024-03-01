var parts = ["abdomen","thorax","head","left","right","nose","blank"];
var nextPartId = 0;
var answer = getAnswer();
var answerLetters = Array.from(answer);
var guessedLetters = makeBlanks();
var gameOver = false;
setup();

function getAnswer(){
 let words = ["rotten","cart","animal","grip","salt","consist","trite","minor","supply","dispensable","lethal","small","maid","untidy","marked","teeth","sugar","level","food","skillful","breathe","didactic","tramp","scrawny","kind","wistful","elderly","opposite","raspy","form","deep","terrible","difficult","guttural","delay","blind","daughter","need","perform","optimal","scatter","billowy","point","famous","middle","cute","lettuce","classy","puzzled","hypnotic","regret","parallel","substance","watch","gun","incandescent","glossy","handsome","known","seashore","launch","sip","melt","remain","laugh","morning","imaginary","worried","meeting","vengeful","pleasure","perfect","fear","cuddly","snotty","shelf","table","tank","tenuous","closed","chase","bathe","testy","rob","dirt","gullible","inexpensive","transport","descriptive","tick","acceptable","waste","cake","torpid","cemetery","train","clam","sparkle","makeshift","blush","check","tangible","horrible","potato","violent","bite","peace","shaggy","floor","unusual","ossified","adamant","tan","sassy","shrug","ripe","weary","education","secretary","recognise","grate","paltry","vagabond","melted","attractive","jellyfish","ambiguous","branch","nut","squealing","berry","swim","like","old","fruit","clean","event","wail","interest","moldy","skin","keen","pink","whispering","tongue","jazzy","mellow","prickly","evasive","distinct","reign","piquant","wandering","cooing","wild","hospitable","military","nostalgic","quilt","debt","defiant","develop","eggs","spiders","quartz","rice","act","office","pedal","confuse","competition","weight","tasty","dust","incredible","tawdry","eager","mend","aspiring","rush","physical","gleaming","chop","abstracted","caring","succinct","chunky","rare","ill-informed","humorous","madly","disillusioned","charge","annoyed","shut","boil","wide-eyed","system","kill","raise","delicate","trot","zany","stomach","class","toothsome","repulsive","legs","furry","irritate","apologise","mate","high-pitched","evanescent","cars","direful","apathetic","reminiscent","kindhearted","industrious","refuse","examine","bizarre","baby","toothbrush","marry","open","knee","squirrel","juicy","satisfying","stingy","pricey","wonderful","mask","futuristic","thank","teeny-tiny","spark","list","desire","alluring","pet","dinner","throne","type","rinse","room","size","crabby","incompetent","coal","accessible","unbiased","spicy","intelligent","beginner","mind","chicken","volatile","whirl","tin","complain","car","spectacular","pipe","bath","afraid","heady","camera","petite","trap","voice","humdrum","endurable","hard","multiply","spoil","hang","disgusting","rabbit","follow","steadfast","stone","mine","typical","tendency","trees","squalid","knock","rampant","veil","helpful","knowledge","loutish","engine","acidic","loaf","strengthen","cannon","bury","bloody","rebel","nutritious","top","sturdy","push","inform","spare","tricky","warn","meal","trains","pin","oafish","zippy","receive","superficial","curve","moaning","bird","thumb","gather","caption","income","various","found","umbrella","noxious","zipper","insect","fragile","adorable","theory","yellow","brawny","mass","vigorous","alert","obeisant","foot","force","stereotyped","prevent","challenge","dark","gifted","same","awake","naive","thing","aunt","eye","forgetful","influence","pizzas","mean","appreciate","macho","giants","puny","afternoon","smelly","pointless","lovely","hurry","chalk","attack","nappy","spy","suit","stranger","private","flesh","combative","savory","berserk","meaty","matter","calculator","deliver","steady","diligent","tough","harass","live","healthy","parched","mailbox","electric","iron","pinch","swanky","month","doll","bait","boast","grin","appliance","amazing","command","square","overt","help","tasteful","wrench","skate","birthday","attend","wonder","unnatural","uninterested","old-fashioned","snail","innate","trace","jaded","lie","zonked","squeeze","materialistic","pencil","delirious","boy","thankful","minute","bare","anxious","shoes","person","giraffe","beam","hanging","agreement","colorful","slim","taboo","heavenly","passenger","flowery","servant","exercise","elbow","remind","exultant","stay","jewel","babies","cook","twig","dirty","useful","travel","uncle","expensive","tearful","disturbed","sister","heavy","enter","ragged","unknown","chin","prose","subdued","magical","poised","bump","shiver","tight","lace","sick","agree","expansion","sincere","agreeable","glistening","frog","rescue","dear","disastrous","eight","cold","crayon","yielding","fork","soggy","nonchalant","crowded","plucky","tent","scary","lucky","scintillating","muscle","depressed","turkey","messy","possible","direction"];
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
  else if (nextPartId == 6) {
    youLose();
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
  guessButton.style.display="none";
  let feedback = document.createElement("p");
  feedback.setAttribute("id","feedback");
  feedback.innerHTML = "<h3>Guess my word!</h3>Enter a letter using the keyboard:";
  guesses.appendChild(feedback);
  let entryBox = document.createElement("input");
  entryBox.setAttribute("id","entryBox");
  entryBox.style.display="none";
  guesses.appendChild(entryBox);
  entryBox.addEventListener("keypress",function(event) {
    if (event.key ==="Enter") {
      event.preventDefault();
      document.getElementById("guessButton").click();
    }
  });
  makeKeyBoard();
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
    let nextOne = document.getElementById(nextPart);
    nextOne.style.display="block";
    nextPartId++;
  }
}

function newgame() {

}

function makeKeyBoard() {
  let keyBoard = document.createElement("div");
  let guesses = document.getElementById("guesses");
  keyBoard.setAttribute("id","keyboard");
  guesses.appendChild(keyBoard);
  let alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  const keyletters = alphabet.split(',');
  for (let i =0; i <26; i++) {
    makeKey(keyletters[i]);
  }
}

function makeKey(letter) {
  let newKey = document.createElement("button");
  newKey.innerHTML = letter;
  newKey.setAttribute("id",letter);
  let keyBoard = document.getElementById("keyboard");
  newKey.addEventListener('click', myFunc, false);
  newKey.myParam = letter;
  function myFunc(evt) {
      keyGuess(evt.currentTarget.myParam);
  }
  keyBoard.appendChild(newKey);
}


function keyGuess(letter){
  let guesses = document.getElementById("guesses");
  let letters = document.getElementById("feedback");
  let letterBox =document.getElementById("entryBox");
    let message = "";
    if (checkLetter(letter) == true) {
      if (guessedLetters.join() == answerLetters.join()) {
        message = "You win! The answer was " + answer;
      }
      else {
        let goodKey = document.getElementById(letter);
        goodKey.style.backgroundColor="green";
        message = "Good guess! Your letters are now: <br>"+ guessedLetters;
      }
    }
    else {
      if (nextPartId == parts.length){
        message = "You lose! The answer was "+answer;
      }
      else {
        let badKey = document.getElementById(letter);
        badKey.style.backgroundColor="red";
        message = "Bad guess! Your letters are still: <br>"+ guessedLetters;
        badGuess();
      }
    }
    feedback.innerHTML = message;
  }

function youLose() {
  let endScreen = document.createElement("div");
  endScreen.setAttribute("id","endScreen");
  document.body.appendChild(endScreen);
  endScreen.innerHTML="<p>The answer was:<br> <em>" + answer+"</em>";
  let console = document.getElementById("console");
  console.style.display="none";
  endScreen.addEventListener("click", function() { 
    location.reload();
  }); 
  endScreen.location="https://695074ab-ab52-4c6d-8d24-e0fa1c07b565-00-2hsx9c4lzarq6.worf.replit.dev/";

}
