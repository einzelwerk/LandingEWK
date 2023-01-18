document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
