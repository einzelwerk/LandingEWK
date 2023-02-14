import CC from './CustomCursor';

const video = document.querySelector('.video .video__src');

document.addEventListener('click', (e) => {
  if (e.target.closest('.js-toggle-sound')) {
    if (video.muted) {
      video.muted = false;
      video.closest('.video').querySelector('button').innerHTML = '<svg width="40" height="40"><use href="sprite.svg#off-sound_sprite"></use> </svg>';
      CC.setText('- sound');
    } else {
      video.muted = true;
      video.closest('.video').querySelector('button').innerHTML = '<svg width="40" height="40"><use href="sprite.svg#on-sound_sprite"></use> </svg>';
      CC.setText('+ sound');
    }
  }
});
