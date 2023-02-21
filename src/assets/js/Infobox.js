const infobox = document.querySelectorAll('.buyers-infobox');
let counter = 0;
const ticker = setInterval(() => {
  infobox[counter].classList.add('show');
  setTimeout(() => {
    infobox[counter - 1].classList.remove('show');
  }, 4000);

  if (!infobox[counter]) {
    clearInterval(ticker);
  }
  counter += 1;
}, 20000);
