'use strict'

const app = () => {

  const DOMstring = {
    sound: document.querySelector('.music'),
    playBtn: document.querySelector('.play-btn'),
    outline: document.querySelector('.moving-outline circle'),
    video: document.querySelector('.video-container video'),
    soundBtn: Array.from(document.querySelectorAll('.sound-picker button')),
    displayTime: document.querySelector('.time-display'),
    selectTimeBtn: Array.from(document.querySelectorAll('.time-duration button')),

    bgImage: document.querySelector('.bg-image')
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

  // Display Selected time
  DOMstring.selectTimeBtn.forEach(option => {
    option.addEventListener('click', () => {
      duration = option.getAttribute("data-time");

      // Display text
      DOMstring.displayTime.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
    });
  });

  // Select sound
  DOMstring.soundBtn.forEach(sound => {
    sound.addEventListener('click', () => {
      DOMstring.sound.src = sound.getAttribute('data-sound');
      //DOMstring.bgImage.style. = sound.getAttribute('data-image');
      checkPlaying(DOMstring.sound);
    });
  });

  // Animate circle 
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
      DOMstring.video.pause();
    };
  };

};

app();