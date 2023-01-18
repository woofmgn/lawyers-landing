export function mapInit() {
  // Создание экземпляра карты и его привязка к созданному контейнеру.
  var myMap = new ymaps.Map(
      "map",
      {
        center: [53.407, 58.952408],
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
    // Создание макета балуна на основе Twitter Bootstrap.
    MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="popover top">' +
        '<a class="popover__close" href="#"></a>' +
        '<div class="arrow"></div>' +
        '<div class="popover__inner">' +
        "$[[options.contentLayout observeSize]]" +
        "</div>" +
        '<div class="popover__placemark"></div>' +
        "</div>",
      {
        /**
         * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
         * @function
         * @name build
         */
        build: function () {
          this.constructor.superclass.build.call(this);

          this._$element = $(".popover", this.getParentElement());

          this.applyElementOffset();

          this._$element
            .find(".popover__close")
            .on("click", $.proxy(this.onCloseClick, this));
        },

        /**
         * Удаляет содержимое макета из DOM.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
         * @function
         * @name clear
         */
        clear: function () {
          this._$element.find(".close").off("click");

          this.constructor.superclass.clear.call(this);
        },

        /**
         * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
         * @function
         * @name onSublayoutSizeChange
         */
        onSublayoutSizeChange: function () {
          MyBalloonLayout.superclass.onSublayoutSizeChange.apply(
            this,
            arguments
          );

          if (!this._isElement(this._$element)) {
            return;
          }

          this.applyElementOffset();

          this.events.fire("shapechange");
        },

        /**
         * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
         * @function
         * @name applyElementOffset
         */
        applyElementOffset: function () {
          this._$element.css({
            left: -(this._$element[0].offsetWidth / 2),
            top: -(
              this._$element[0].offsetHeight +
              this._$element.find(".arrow")[0].offsetHeight
            ),
          });
        },

        /**
         * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
         * @function
         * @name onCloseClick
         */
        onCloseClick: function (e) {
          e.preventDefault();

          this.events.fire("userclose");
        },

        /**
         * Используется для автопозиционирования (balloonAutoPan).
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
         * @function
         * @name getClientBounds
         * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
         */
        getShape: function () {
          if (!this._isElement(this._$element)) {
            return MyBalloonLayout.superclass.getShape.call(this);
          }

          var position = this._$element.position();

          return new ymaps.shape.Rectangle(
            new ymaps.geometry.pixel.Rectangle([
              [position.left, position.top],
              [
                position.left + this._$element[0].offsetWidth,
                position.top +
                  this._$element[0].offsetHeight +
                  this._$element.find(".arrow")[0].offsetHeight,
              ],
            ])
          );
        },

        /**
         * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
         * @function
         * @private
         * @name _isElement
         * @param {jQuery} [element] Элемент.
         * @returns {Boolean} Флаг наличия.
         */
        _isElement: function (element) {
          return element && element[0] && element.find(".arrow")[0];
        },
      }
    ),
    // Создание вложенного макета содержимого балуна.
    MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
      '<h3 class="popover__title">$[properties.balloonHeaderOne]</h3>' +
        '<p class="popover__content">$[properties.balloonContentOne]</p>' +
        '<h3 class="popover__title">$[properties.balloonHeaderTwo]</h3>' +
        '<p class="popover__content">$[properties.balloonContentTwo]</p>' +
        '<h3 class="popover__title">$[properties.balloonHeaderThree]</h3>' +
        '<p class="popover__content">$[properties.balloonContentThree]</p>'
    ),
    // Создание метки с пользовательским макетом балуна.
    myPlacemark = (window.myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        balloonHeaderOne: "Адрес",
        balloonContentOne: "ул. Лесопарковая д.93/1, офис 2",
        balloonHeaderTwo: "Телефон",
        balloonContentTwo: "+7 (908) 826-70-50",
        balloonHeaderThree: "Почта",
        balloonContentThree: "regiontc174@gmail.com",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map/placemark.svg",
        iconImageSize: [102, 99],
        iconImageOffset: [-50, 15],
        balloonShadow: true,
        balloonLayout: MyBalloonLayout,
        balloonContentLayout: MyBalloonContentLayout,
        balloonPanelMaxMapArea: 0,
        // Не скрываем иконку при открытом балуне.
        hideIconOnBalloonOpen: true,
        // И дополнительно смещаем балун, для открытия над иконкой.
        balloonOffset: [-200, -300],
      }
    ));

  myMap.geoObjects.add(myPlacemark);
}
