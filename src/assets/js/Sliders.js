/* eslint-disable import/no-unresolved */
import Swiper, { FreeMode, Pagination, Autoplay, EffectCreative } from 'swiper';
import 'swiper/scss';
import breakpoints from './MatchMedia';

const defaultOptions = {
  mousewheel: {
    forceToAxis: true,
  },
};

class Sliders {
  static featuresSlider() {
    const root = document.querySelector('.features-wrapper');
    const sliderInstance = new Swiper(root, {
      ...defaultOptions,
      modules: [Pagination, Autoplay],
      init: false,
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 1500,
      autoplay: {
        delay: 4000,
      },
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
      ...defaultOptions,
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

  static showroomSlider() {
    let settings;
    if (window.matchMedia(breakpoints.isDesktop).matches) {
      settings = {
        modules: [Autoplay],
        loop: true,
        spaceBetween: 24,

        speed: 3000,
        slidesPerView: 4,
        autoplay: {
          enabled: true,
          delay: 1,
          disableOnInteraction: false,
        },
      };
    } else {
      settings = {
        modules: [EffectCreative],
        init: false,

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
    }
    const root = document.querySelector('.js-showroom-slider');
    const sliderInstance = new Swiper(root, {
      ...defaultOptions,
      ...settings,
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
  Sliders.featuresSlider();
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
