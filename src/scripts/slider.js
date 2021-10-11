const imgWidth = 370; // width of image in slider
const imgAmount = 5 // number of images in the slider
const delay = 5000; // speed of automatic slide change

const moveOn = imgWidth * (imgAmount - 1);
let offset = 0;

const sliderLine = document.querySelector('.slider__line');

let interval = setInterval(() => {
  offset += imgWidth;
  if (offset > moveOn) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
}, delay);

document.querySelector('.slider__nav-prev--active')
  .addEventListener('click', function () {
    offset -= imgWidth;

    if (offset < 0) {
      offset = moveOn;
    }

    sliderLine.style.left = -offset + 'px';
  });

document.querySelector('.slider__nav-next--active')
  .addEventListener('click', function () {
    offset += imgWidth;

    if (offset > moveOn) {
      offset = 0;
    }

    sliderLine.style.left = -offset + 'px';
  });
