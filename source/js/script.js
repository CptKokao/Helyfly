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