import { Swiper } from "../libs.js";

const SwiperTeamSeggings = {
  swiperSelector: ".um-team__swiper",
  paginSelector: ".um-team__swiper-pagination",
  btnNextSelector: ".um-team__swiper-btn_type_next",
  btnPrevSelector: ".um-team__swiper-btn_type_prev",
};

const SwiperCertificateSeggings = {
  swiperSelector: ".um-certificate__swiper",
  paginSelector: ".um-certificate__swiper-pagination",
  btnNextSelector: ".um-certificate__swiper-btn_type_next",
  btnPrevSelector: ".um-certificate__swiper-btn_type_prev",
};

const createSwiper = (
  newQty,
  { swiperSelector, paginSelector, btnNextSelector, btnPrevSelector }
) => {
  const swiper = new Swiper(swiperSelector, {
    slidesPerView: newQty,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: paginSelector,
      clickable: true,
    },
    navigation: {
      nextEl: btnNextSelector,
      prevEl: btnPrevSelector,
    },
  });

  return swiper;
};

export const toggleQtySwiperSlideTeam = () => {
  let qtySlide = 3;

  if (window.innerWidth > 1023) {
    qtySlide = 3;
    const newSwiperTeam = createSwiper(qtySlide, SwiperTeamSeggings);

    return newSwiperTeam;
  } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
    qtySlide = 2;
    const newSwiperTeam = createSwiper(qtySlide, SwiperTeamSeggings);

    return newSwiperTeam;
  } else if (window.innerWidth < 768) {
    qtySlide = 1;
    const newSwiperTeam = createSwiper(qtySlide, SwiperTeamSeggings);

    return newSwiperTeam;
  }
};

export const toggleQtySwiperSlideCertificate = () => {
  let qtySlide = 5;

  if (window.innerWidth > 1023) {
    qtySlide = 5;
    const newSwiperCertificate = createSwiper(
      qtySlide,
      SwiperCertificateSeggings
    );

    return newSwiperCertificate;
  } else if (window.innerWidth < 1024 && window.innerWidth > 767) {
    qtySlide = 4;
    const newSwiperCertificate = createSwiper(
      qtySlide,
      SwiperCertificateSeggings
    );

    return newSwiperCertificate;
  } else if (window.innerWidth < 768 && window.innerWidth > 300) {
    qtySlide = 2;
    const newSwiperCertificate = createSwiper(
      qtySlide,
      SwiperCertificateSeggings
    );

    return newSwiperCertificate;
  }
};
