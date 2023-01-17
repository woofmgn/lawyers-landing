export function mapInit() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [53.406213, 58.952408],
        zoom: 17,
        controls: ["geolocationControl", "zoomControl"],
      },
      {
        geolocationControlFloat: "none",
        geolocationControlPosition: {
          top: "355px",
          right: "10px",
        },
        zoomControlSize: "small",
        zoomControlFloan: "none",
        zoomControlPosition: {
          top: "280px",
          right: "10px",
        },
      }
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Наш офис",
        balloonContent: "Это красивая метка",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map/placemark.svg",
        iconImageSize: [102, 99],
        iconImageOffset: [-50, -120],
      }
    );
  myMap.geoObjects.add(myPlacemark);
}
