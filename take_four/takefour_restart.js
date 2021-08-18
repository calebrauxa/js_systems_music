const audioElement1 = document.querySelector('audio');

// web audio api setup 
const audioContext = new AudioContext();
const pipedAudio1 = audioContext.createMediaElementSource(audioElement1);
pipedAudio1.connect(audioContext.destination);

// dom elements 
const playPauseButton = document.querySelector('.playpause');
const stopButton = document.querySelector('.stop');
const progressBar = document.querySelector('.progressbar');
let positionDiv = document.querySelector('.p1'); // grab the position line div

let counter = 0;

let audioLength = audioElement1.duration; // audio loop lengths in seconds
let pxWidth = progressBar.offsetWidth; // width of player container divs   
let offsetAmount = Math.random() * audioLength;  // random starting time for each audio
let percentageComplete = (offsetAmount / audioLength); // percentage of audio loop completed AT START
let pixelsCompleteOfDiv = Math.floor(percentageComplete * pxWidth); // pixel position of position line div AT START


// PLAY/PAUSE functionality
playPauseButton.addEventListener('click', function() {

  // check if context is in suspended state (autoplay policy)
  if (audioContext.state === 'suspended') {
      audioContext.resume();
  }

  // play or pause track depending on state
  if (this.dataset.playing === 'false') {
      audioElement1.play();
      this.dataset.playing = 'true';
  } else if (this.dataset.playing === 'true') {
      audioElement1.pause();
      this.dataset.playing = 'false';
  }

}, false);




// STOP BUTTON 

audioOne.loop = true;




// STOP MUSIC
// stopButton.addEventListener('click', stopIt);
// function stopIt() {
//   audioOne.pause();
//   audioOne.currentTime = 0;
// }