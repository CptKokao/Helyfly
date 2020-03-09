/* eslint-disable */
'use strict';

// polyfill swiper for IE11
if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
      value: function(search, rawPos) {
          var pos = rawPos > 0 ? rawPos|0 : 0;
          return this.substring(pos, pos + search.length) === search;
      }
  });
}

/* Слайдер для блока tab */
var gallerySwiper = new Swiper('.gallery__container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
});

/* Слайдер для блока map */
var mapSwiper = new Swiper('.map__slider-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.map__slider-swiper-button-next',
    prevEl: '.map__slider-swiper-button-prev',
  },
  pagination: {
    el: '.map__slider-swiper-pagination',
  },
});


/* Yandex карта */

ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.75897861, 37.61587440],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 13,
      controls: [],
      behaviors: ['drag']
  });

  var myPlacemark = new ymaps.Placemark([55.75897861, 37.61587440], 
    {balloonContent: 'Встречаемся тут!'}, 
    {preset: "islands#redIcon"}
  );

  // myPin.add(myPlacemark);
  myMap.geoObjects.add(myPlacemark);

  // Балун откроется в точке «привязки» балуна — т. е. над меткой.
  // myMap.balloon.open();
};

/* модальное окно */
var modal = document.querySelector('.modal');
var body = document.querySelector('body');
var heroBtn = document.querySelector('.hero__btn');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.modal__close');
var modalInput = document.querySelector('.modal [type="text"]');
var esc = 27;

/* открытие модального окна */
heroBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (modal.classList.contains('visually-hidden')) {
    modal.classList.remove('visually-hidden');
    overlay.classList.remove('visually-hidden');
    body.style.overflow = 'hidden';
    // modalInput.focus();
  } else {
    modal.classList.add('visually-hidden');
    overlay.classList.add('visually-hidden');
    body.style.overflow = 'auto';
  }
});

/* закрытие модального окна */
var closeModal = function closeModal(e) {
  modal.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
  body.style.overflow = 'auto';
};

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
window.addEventListener('keydown', function (e) {
  console.log(e)
  if (e.code === 'Escape' || e.keyCode === esc) {
    closeModal();
  }
});

/* маска формы телефона */
$("#tel").mask("8(999) 999-9999");
$("#date").mask("99.99.9999");
$("#card").mask("99999-9999-9999-9999");
$("#date-card").mask("99.9999");
$("#cvv").mask("999");
