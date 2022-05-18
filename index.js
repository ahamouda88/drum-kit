var drumButtons = document.querySelectorAll(".drum");
var drumAudioMap = new Map();
drumAudioMap.set("w", new Audio('sounds/crash.mp3'));
drumAudioMap.set("a", new Audio('sounds/kick-bass.mp3'));
drumAudioMap.set("s", new Audio('sounds/snare.mp3'));
drumAudioMap.set("d", new Audio('sounds/tom-1.mp3'));
drumAudioMap.set("j", new Audio('sounds/tom-2.mp3'));
drumAudioMap.set("k", new Audio('sounds/tom-3.mp3'));
drumAudioMap.set("l", new Audio('sounds/tom-4.mp3'));

// Dectect clicked button
for(var i=0 ; i<drumButtons.length ; i++) {
  drumButtons[i].addEventListener("click", function() {
    playAudio(this.innerHTML);
    addAnimation(this.innerHTML);
  });
}

// Detect pressed key
document.addEventListener("keydown", function(event) {
  playAudio(event.key);
  addAnimation(event.key);
});

function playAudio(key){
  var audio = drumAudioMap.get(key);
  if(audio == undefined) {
    console.log("Audio not found");
  } else {
    audio.play();
  }
};

function addAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
