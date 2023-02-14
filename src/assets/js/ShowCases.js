document.addEventListener('click', (e) => {
  if (e.target.closest('.js-cases-more')) {
    document.querySelectorAll('.cases__col').forEach((elem) => {
      elem.classList.add('show');
      setTimeout(() => {
        document.querySelector('.js-cases-more').remove();
      }, 100);
    });
  }
});
