/* eslint-disable prefer-destructuring */
/* eslint-disable no-new */

class TabSwitcher {
  constructor(element) {
    this.element = element;
    this.tabs = this.element?.querySelectorAll('[role="tab"]');
    this.panels = this.element?.querySelectorAll('[role="tabpanel"]');

    if (this.element) {
      [this.currentTab] = this.element.querySelectorAll('[role="tab"]');
    }

    this.onTabSwitchCallback = null;

    this.init();
  }

  init() {
    // Add click and keydown event listeners to tabs
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', () => this.selectTab(tab));
      tab.addEventListener('keydown', (event) => this.handleTabKeydown(event, tab));
    });

    // Show initial tab panel
    this.showPanel(this.currentTab.getAttribute('aria-controls'));

    this.currentTab.style.setProperty('--desc-height', `${this.currentTab.querySelector('.features__description').offsetHeight}px`);
  }

  selectTab(tab) {
    if (tab !== this.currentTab) {
      this.hidePanel(this.currentTab.getAttribute('aria-controls'));
      this.showPanel(tab.getAttribute('aria-controls'));
      this.currentTab.setAttribute('aria-selected', false);
      this.currentTab.removeAttribute('tabindex');
      tab.setAttribute('aria-selected', true);
      tab.setAttribute('tabindex', 0);
      this.currentTab = tab;
    }
    if (typeof this.onTabSwitchCallback === 'function') {
      this.onTabSwitchCallback(this.currentTab);
    }
  }

  handleTabKeydown(event, tab) {
    const { key } = event;
    const index = Array.from(this.tabs).indexOf(tab);

    if (key === 'ArrowLeft' || (key === 'ArrowUp' && index > 0)) {
      this.selectTab(this.tabs[index - 1]);
      this.currentTab = this.tabs[index - 1];
      this.currentTab.focus();
      event.preventDefault();
    } else if (key === 'ArrowRight' || (key === 'ArrowDown' && index < this.tabs.length - 1)) {
      this.selectTab(this.tabs[index + 1]);
      this.currentTab = this.tabs[index + 1];
      this.currentTab.focus();
      event.preventDefault();
    } else if (key === 'Home') {
      this.selectTab(this.tabs[0]);
      this.currentTab = this.tabs[0];
      this.currentTab.focus();
      event.preventDefault();
    } else if (key === 'End') {
      this.selectTab(this.tabs[this.tabs.length - 1]);
      this.currentTab = this.tabs[this.tabs.length - 1];
      this.currentTab.focus();
      event.preventDefault();
    }
  }

  showPanel(id) {
    const panel = this.element.querySelector(`#${id}`);
    panel.setAttribute('aria-hidden', false);
  }

  hidePanel(id) {
    const panel = this.element.querySelector(`#${id}`);
    panel.setAttribute('aria-hidden', true);
  }

  getTab(index) {
    return this.tabs[index];
  }

  // eslint-disable-next-line class-methods-use-this
  onTabSwitch(callback) {
    this.onTabSwitchCallback = callback;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const featuresTabs = new TabSwitcher(document?.querySelector('.js-features-tab'));
  if (featuresTabs) {
    featuresTabs.onTabSwitch(() => {
      const elem = document.querySelector('.features__button[aria-selected="true"]');
      const height = elem.querySelector('.features__description').offsetHeight;
      document.querySelectorAll('.features__button').forEach((btn) => {
        btn.style.setProperty('--desc-height', '0');
      });
      elem.style.setProperty('--desc-height', `${height}px`);
    });
  }
});
