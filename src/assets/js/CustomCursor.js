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
      } else if (e.target.closest('.swiper')) {
        this.showCursor();
        this.setText('Swipe');
      } else {
        this.hideCursor();
      }
    });
  }
}

const CC = new CustomCursor();

CC.listener();

export default CC;
