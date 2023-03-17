const counterSpan = document.querySelector('.js-counter');
const counterMax = parseInt(counterSpan.textContent, 10);

let counter = 0;

function animateCounter() {
  // eslint-disable-next-line no-plusplus
  counter++;
  const counterText = counter.toString().padStart(2, '0');
  counterSpan.textContent = counterText;
  if (counter < counterMax) {
    setTimeout(animateCounter, 100);
  }
}

animateCounter();
