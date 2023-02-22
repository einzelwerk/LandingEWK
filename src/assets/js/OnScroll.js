window.addEventListener('scroll', () => {
  if (window.scrollY > document.querySelector('section:first-child').offsetHeight) {
    document.querySelector('.footer__btn').classList.add('show');
  } else {
    document.querySelector('.footer__btn').classList.remove('show');
  }
});
