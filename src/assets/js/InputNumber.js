const increment = document.querySelector('.js-increment-number');
const decrement = document.querySelector('.js-decrement-number');

increment.addEventListener('click', (e) => {
  const input = e.currentTarget.closest('.input-number').querySelector('input');
  input.stepUp();
});
decrement.addEventListener('click', (e) => {
  const input = e.currentTarget.closest('.input-number').querySelector('input');
  input.stepDown();
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.js-increment-number') || e.target.closest('.js-decrement-number')) {
    const input = e.target.closest('.input-number').querySelector('input');
    if (Number(input.value) === Number(input.max)) {
      increment.setAttribute('disabled', '');
    } else {
      increment.removeAttribute('disabled');
    }
    if (Number(input.value) === Number(input.min)) {
      decrement.setAttribute('disabled', '');
    } else {
      decrement.removeAttribute('disabled');
    }
  }
});
