/* eslint-disable import/no-unresolved */
import Swiper, { FreeMode, Pagination, Autoplay, EffectCreative, Mousewheel } from 'swiper';
import 'swiper/css';

import breakpoints from './MatchMedia';

const defaultOptions = {
  mousewheel: {
    forceToAxis: true,
  },
};

class Sliders {
  static reviewsSlider() {
    const root = document.querySelector('.reviews-wrapper');
    const sliderInstance = new Swiper(root, {
      ...defaultOptions,
      modules: [Pagination, FreeMode],
      init: false,
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: root?.querySelector('.custom-slider-pagination'),
        type: 'bullets',
      },
    });

    sliderInstance.init();
  }

  static showroomSlider() {
    const settings = window.matchMedia(breakpoints.isDesktop).matches
      ? {
          modules: [Autoplay, FreeMode, Mousewheel],
          loop: true,

          spaceBetween: 24,

          slidesPerView: 4,

          autoplay: {
            enabled: true,
            delay: 1000,
            disableOnInteraction: false,
          },
          breakpoints: {
            1720: {
              slidesPerView: 6,
            },
          },
        }
      : {
          modules: [EffectCreative],
          slidesPerView: 1.1,
          spaceBetween: 24,
          effect: 'creative',
          creativeEffect: {
            prev: {
              translate: ['-10%', 0, -1],
              scale: 0.7,
            },
            next: {
              translate: ['103%', 0, 0],
            },
          },
        };

    const root = document.querySelector('.js-showroom-slider');
    const sliderInstance = new Swiper(root, {
      ...settings,
      ...defaultOptions,
    });

    sliderInstance.init();
  }

  static creativeLogoSlider() {
    const root = document.querySelector('.js-creative-logo');
    const sliderInstance = new Swiper(root, {
      ...defaultOptions,
      modules: [FreeMode, Autoplay],
      init: false,
      slidesPerView: 2.2,

      loop: true,
      freeMode: true,
      spaceBetween: 8,
      autoplay: {
        delay: 1000,

        disableOnInteraction: false,
      },
    });

    if (window.matchMedia(breakpoints.isMobile).matches) {
      sliderInstance.init();
    }
  }
}

function slidersInit() {
  Sliders.reviewsSlider();
  Sliders.showroomSlider();
  Sliders.creativeLogoSlider();
}

document.addEventListener('DOMContentLoaded', () => {
  slidersInit();
});

window.addEventListener('resize', () => {
  setTimeout(() => {
    slidersInit();
  }, 1000);
});
