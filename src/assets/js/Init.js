function init() {
  document.querySelector('.features').style.setProperty('--line-height', `${document.querySelector('.features__control').offsetHeight}px`);
}

window.addEventListener('load', init);

window.addEventListener('resize', init);
