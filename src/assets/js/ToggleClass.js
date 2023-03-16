class ToggleClass {
  constructor(triggerSelector, targetSelector) {
    this.triggers = document.querySelectorAll(triggerSelector);
    this.targets = document.querySelectorAll(targetSelector);
    this.handleClick = this.handleClick.bind(this);
    this.init();
  }

  init() {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener('click', this.handleClick);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick(event) {
    event.preventDefault();
    const targetSelector = event.currentTarget.dataset.trigger;
    const target = document.querySelector(`[data-target="${targetSelector}"]`);
    event.currentTarget.classList.toggle('active');
    target.classList.toggle('active');
  }
}

// eslint-disable-next-line no-unused-vars
const toggle = new ToggleClass('[data-trigger]', '[data-target]');
