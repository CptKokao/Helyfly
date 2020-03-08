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
var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
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
      controls: ['zoomControl'],
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