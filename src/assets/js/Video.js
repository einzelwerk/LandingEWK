import CC from './CustomCursor';

const video = document.querySelector('.video .video__src');
video.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    CC.setText('- sound');
  } else {
    video.muted = true;
    CC.setText('+ sound');
  }
});
