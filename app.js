'use strict'

const app = () => {

  const DOMstring = {
    sound: document.querySelector('.music'),
    playBtn: document.querySelector('.play-btn'),
    outline: document.querySelector('.moving-outline circle'),
    video: document.querySelector('.video-container video'), // Check
    soundBtn: Array.from(document.querySelectorAll('.sound-picker button')),
    displayTime: document.querySelector('.time-display'),
    selectTimeBtn: Array.from(document.querySelectorAll('.time-duration button')),
  };

  // Defalut duration 
  let duration = 600;

  // Get length of outline
  const outlineLength = DOMstring.outline.getTotalLength();

  // Stop and play sound
  const checkPlaying = (sound => {
    if (sound.paused) {
      sound.play();
      //DOMstring.video.play();
      DOMstring.playBtn.src = './img/svg/pause.svg';
    } else {
      sound.pause();
      //DOMstring.video.pause();
      DOMstring.playBtn.src = './img/svg/play.svg';
    };
  });

  // Animate outline of play button 
  DOMstring.outline.style.strokeDasharray = outlineLength;
  DOMstring.outline.style.strokeDashoffset = outlineLength;

  // Play sound
  DOMstring.playBtn.addEventListener('click', () => {
    checkPlaying(DOMstring.sound);
  });

};

app();


