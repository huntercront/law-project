(function() {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://api-maps.yandex.ru/2.1/?apikey=93fece7a-9fe4-47c6-80de-eaea41ec7d4a&lang=ru_RU';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
    po.addEventListener('load', function(e) {

        ymaps.ready(function() {
            var myMap = new ymaps.Map('map', {
                    center: [55.74113506899871, 37.502785499999966],
                    zoom: 15,
                    controls: ['zoomControl'],
                    behaviors: ['drag']
                }),


                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="background-color: #414141; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: '<div class="hint-map">Москва, ул. Барклая, д.8, оф. 443 </div>',
                }, {


                    iconLayout: 'default#image',

                    iconImageHref: '../img/map-pin/map-pin.svg',

                    iconImageSize: [60, 60],
                    iconImageOffset: [-45, -55]
                });

            myMap.geoObjects
                .add(myPlacemark)
                // myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
                // myMap.panes.get('ground').getElement().style.opacity = "0.1";
        });


    });
})();