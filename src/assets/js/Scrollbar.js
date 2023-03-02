/* eslint-disable no-new */
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

Array.prototype.forEach.call(
  document.querySelectorAll('.modal'),
  (el) =>
    new SimpleBar(el, {
      autoHide: false,
    })
);
