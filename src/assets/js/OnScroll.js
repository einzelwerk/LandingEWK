import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.footer',
//     start: 'top bottom',
//     markers: true,
//     onEnter: () => {
//       document.querySelector('.fixed-buttons').classList.remove('show');
//       console.log('enet');
//     },
//     onLeave: () => {
//       document.querySelector('.fixed-buttons').classList.add('show');
//       console.log('leave');
//     },
//   },
// });
