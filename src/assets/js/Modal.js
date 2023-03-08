/* eslint-disable class-methods-use-this */
import { gsap } from 'gsap';

class Modal {
  constructor(trigger, modal) {
    this.modal = modal;
    this.modalInner = document.querySelector(this.modal).querySelector('.modal');
    this.trigger = trigger;
    this.closeBtn = '.js-close-modal';
    this.state = false;
  }

  animation(target, reversed) {
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      target,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    );

    if (reversed) {
      tl.reverse(true);
    } else {
      tl.play();
    }
  }

  open() {
    this.animation(this.modal, false);
    this.state = true;
  }

  close() {
    this.animation(this.modal, true);
    this.state = false;
  }

  isOpen() {
    return this.state;
  }

  listener() {
    document.addEventListener('click', (e) => {
      if ((this.state && !e.target.closest('.modal')) || (this.state && e.target.closest(this.closeBtn))) {
        this.close();
      }
      if (!this.state && e.target.closest(this.trigger)) {
        this.open();
      }
    });
    document.addEventListener('keyup', (e) => {
      if (this.state && e.key === 'Escape') {
        this.close();
      }
    });
  }
}

const purchaseModal = new Modal('[data-modal="purchase-modal"]', '[data-modal-el="purchase-modal"]');
purchaseModal.listener();
const timerModal = new Modal('[data-modal="timer-modal"]', '[data-modal-el="timer-modal"]');
timerModal.listener();

const timerModalTimeout = () => {
  setTimeout(() => {
    if (!purchaseModal.isOpen()) {
      timerModal.open();
    } else {
      timerModalTimeout();
    }
  }, 10000);
};

window.addEventListener('load', () => {
  timerModalTimeout();
});
