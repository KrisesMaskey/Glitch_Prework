// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = new Array(); //= [2, 2, 4, 3, 2, 1, 2, 4];
var pattern1= [1, 2, 3, 4, 1, 2, 4, 4, 1, 2, 3, 4, 4, 4]
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistake = 0;
var timer; //timer object
var timeGiven = 10; //how much time to guess after clues stop
var timeRemaining = 0; //how much time the player has left


function randarray(){
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 4) + 1;
  }
}

function startGame(){
    //initialize game variables
    randarray();
    progress = 0;
    gamePlaying = true;
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
    mistake =0;
    adjustTries();
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    clearTimer();
}


// Sound Synthesis Functions
const freqMap = {
  1: 293.66,
  2: 311.13,
  3: 415.30,
  4: 391.995
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0
  let delay = nextClueWaitTime; //set delay to initial wait time
  clearTimeout(timer);
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
}
  timeRemaining = timeGiven;
  timer = setTimeout(function tick() {
    if (gamePlaying) {
      updateTimer();
      timer = setTimeout(tick, 1000); // (*)
    }
  }, delay);
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
 if(pattern[guessCounter] == btn){
    //Guess was correct!
   // reset the timer
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
        mistake = 0;
        adjustTries();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    mistake++;
    adjustTries();
    
    if (mistake==4){
      //Guess was incorrect
      //GAME OVER: LOSE!
      loseGame();
    }
  
  }
   
 }

function adjustTries() {
  document.getElementById("tries").innerHTML = 3 - mistake;
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

function clearTimer() {
  clearTimeout(timer);
  timeRemaining = 0;
  document.getElementById("count").innerHTML = "";
}
function updateTimer() {
    if (timeRemaining >= 0) {
      document.getElementById("count").innerHTML = timeRemaining;
      timeRemaining--;
    } else {
      loseGame();
    }
}