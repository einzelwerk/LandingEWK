const swipeIcon = `<svg width="68" height="40" viewBox="0 0 68 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_702_258)">
<path d="M43.9906 10.8335L52.0094 20.0002L43.9906 29.1668" stroke="#101010" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g clip-path="url(#clip1_702_258)">
<path d="M24.0094 10.8335L15.9906 20.0002L24.0094 29.1668" stroke="#101010" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_702_258">
<rect width="40" height="40" fill="white" transform="translate(68) rotate(90)"/>
</clipPath>
<clipPath id="clip1_702_258">
<rect width="40" height="40" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"/>
</clipPath>
</defs>
</svg>
`;

class CustomCursor {
  constructor() {
    this.cursor = document.createElement('div');
    this.cursor.classList.add('custom-cursor');
    document.body.appendChild(this.cursor);
  }

  showCursor() {
    this.cursor.classList.add('showed');
    document.body.style.cursor = 'none';
  }

  hideCursor() {
    this.cursor.classList.remove('showed');
    document.body.style.cursor = 'default';
  }

  setText(text) {
    this.cursor.innerHTML = text;
  }

  moveCursor(e) {
    this.cursor.style.left = `${e.clientX}px`;
    this.cursor.style.top = `${e.clientY}px`;
  }

  listener() {
    document.addEventListener('mousemove', (e) => {
      this.moveCursor(e);
    });
    document.addEventListener('pointermove', (e) => {
      this.moveCursor(e);
    });

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.video')) {
        this.showCursor();
        this.setText('+ sound');
      } else if (e.target.closest('.swiper:not(.creative-logos)')) {
        this.showCursor();
        this.setText(swipeIcon);
      } else {
        this.hideCursor();
      }
    });
  }
}

const CC = new CustomCursor();

CC.listener();

export default CC;
