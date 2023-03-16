/* eslint-disable no-new */
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

Array.prototype.forEach.call(
  document.querySelectorAll('.modal-purchase__inner'),
  (el) =>
    new SimpleBar(el, {
      autoHide: false,
    })
);
