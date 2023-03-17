import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ paused: true });
tl.from('.fixed-buttons', {
  duration: 0.25,
  autoAlpha: 0,
});
document.querySelectorAll('.section').forEach((show) => {
  ScrollTrigger.create({
    trigger: show,
    start: 'top bottom',
    end: 'bottom bottom',
    onEnter: () => {
      tl.play();
    },
    onLeave: () => {
      tl.reverse();
    },
    onEnterBack: () => {
      tl.play();
    },
    onLeaveBack: () => {
      tl.reverse();
    },
  });
});
