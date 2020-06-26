'use strict'

const app = () => {

  const DOMstring = {
    sound: document.querySelector('.music'),
    playBtn: document.querySelector('.play-btn'),
    outline: document.querySelector('.moving-outline circle'),
    soundBtns: Array.from(document.querySelectorAll('.sound-picker button')),
    displayTime: document.querySelector('.time-display'),
    selectTimeBtns: Array.from(document.querySelectorAll('.time-duration button'))
  };

  // Defalut duration 
  let duration = 600;

  // Get length of outline
  const outlineLength = DOMstring.outline.getTotalLength();

  // Stop and play sound
  const checkPlaying = (sound => {
    if (sound.paused) {
      sound.play();
      DOMstring.playBtn.src = './img/svg/pause.svg';
    } else {
      sound.pause();
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

  // Display Selected time
  DOMstring.selectTimeBtns.forEach(selectTimeBtn => {
    selectTimeBtn.addEventListener('click', () => {
      duration = selectTimeBtn.getAttribute("data-time");

      // Display text
      DOMstring.displayTime.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
    });
  });

  // Select sound
  DOMstring.soundBtns.forEach(soundBtn => {
    soundBtn.addEventListener('click', () => {
      // Change sound source
      DOMstring.sound.src = soundBtn.getAttribute('data-sound');

      // Change bg image with matched sound
      document.body.style.backgroundImage = `url("${soundBtn.getAttribute('data-image')}")`;

      // Play sound
      checkPlaying(DOMstring.sound);
    });
  });

  // Animate circle of play button 
  DOMstring.sound.ontimeupdate = () => {

    let currentTime = DOMstring.sound.currentTime;
    let elapsed = duration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    let progress = outlineLength - (currentTime / duration) * outlineLength;
    DOMstring.outline.style.strokeDashoffset = progress;

    // Animate text
    DOMstring.displayTime.textContent = `${minutes}:${seconds}`;

    // Reset when time is over
    if (currentTime >= duration) {
      DOMstring.sound.pause();
      DOMstring.sound.currentTime = 0;
      DOMstring.playBtn.src = './img/svg/play.svg';
    };
  };

};

app();



