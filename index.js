var drumAudioMap = new Map();
drumAudioMap.set("w", new Audio('sounds/crash.mp3'));
drumAudioMap.set("a", new Audio('sounds/kick-bass.mp3'));
drumAudioMap.set("s", new Audio('sounds/snare.mp3'));
drumAudioMap.set("d", new Audio('sounds/tom-1.mp3'));
drumAudioMap.set("j", new Audio('sounds/tom-2.mp3'));
drumAudioMap.set("k", new Audio('sounds/tom-3.mp3'));
drumAudioMap.set("l", new Audio('sounds/tom-4.mp3'));

// Detect clicked key
$(".drum").click(function(event) {
  playAudio(event.currentTarget.innerHTML);
  addAnimation(event.currentTarget.innerHTML);
});

// Detect pressed key
$(document).keydown(function(event) {
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
  var activeButton = $("." + key);
  activeButton.addClass("pressed");

  setTimeout(function() {
    activeButton.removeClass("pressed");
  }, 100);
}
