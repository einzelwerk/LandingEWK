/* eslint-disable import/no-unresolved */
import Swiper, { Pagination } from 'swiper';
import 'swiper/scss';
import breakpoints from './MatchMedia';

class Sliders {
  static featuresSlider() {
    const root = document.querySelector('.features-wrapper');
    const sliderInstance = new Swiper(root, {
      modules: [Pagination],
      init: false,
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: root.querySelector('.custom-slider-pagination'),
        type: 'bullets',
      },
    });
    if (window.matchMedia(breakpoints.isDesktop).matches) {
      sliderInstance.init();
    }
  }

  static reviewsSlider() {
    const root = document.querySelector('.reviews-wrapper');
    const sliderInstance = new Swiper(root, {
      modules: [Pagination],
      init: false,
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: root.querySelector('.custom-slider-pagination'),
        type: 'bullets',
      },
    });

    sliderInstance.init();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Sliders.featuresSlider();
  Sliders.reviewsSlider();
});
