import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.js-show-cards',

      start: 'top center',
      end: '+=500',
      scrub: 4,
    },
  });
  tl.to('.js-show-cards', {
    yPercent: -15,
    stagger: 0.1,
  });
});
