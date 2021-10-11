document.querySelector('.nav__burger')
  .addEventListener('click', function () {
    document.querySelector('.nav-mobile')
      .classList.toggle('nav-mobile--show');
  });

document.querySelector('.nav-mobile__close')
  .addEventListener('click', function () {
    document.querySelector('.nav-mobile')
      .classList.toggle('nav-mobile--show');
  });

document.querySelector('body')
  .addEventListener('click', function (event) {
    if (
      event.target.className !== 'nav__burger' &&
      event.target.className !== 'nav-mobile__items' &&
      event.target.className !== 'nav-mobile__item' &&
      event.target.className !== 'nav-mobile__link' &&
      event.target.className !== 'nav-mobile__social' &&
      event.target.className !== 'nav-mobile__social-row' &&
      event.target.className !== 'nav-mobile__social-img'
    ) {
      document.querySelector('.nav-mobile')
        .classList.remove('nav-mobile--show');
    };

    if (
      event.target.className === 'nav-mobile'
    ) {
      document.querySelector('.nav-mobile')
        .classList.add('nav-mobile--show');
    };
  });
