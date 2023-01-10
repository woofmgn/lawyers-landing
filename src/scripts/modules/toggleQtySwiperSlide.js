import { Swiper } from "../libs.js";

export const toggleQtySwiperSlideTeam = () => {
  let qtySlide = 3;
  if (window.innerWidth > 769) {
    qtySlide = 3;
    const swiperTeam = new Swiper(".um-team__swiper", {
      slidesPerView: qtySlide,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".um-team__swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".um-team__swiper-btn_type_next",
        prevEl: ".um-team__swiper-btn_type_prev",
      },
    });
    return swiperTeam;
  } else if (window.innerWidth < 769 && window.innerWidth > 450) {
    qtySlide = 2;
    const swiperTeam = new Swiper(".um-team__swiper", {
      slidesPerView: qtySlide,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".um-team__swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".um-team__swiper-btn_type_next",
        prevEl: ".um-team__swiper-btn_type_prev",
      },
    });
    return swiperTeam;
  } else if (window.innerWidth < 450) {
    qtySlide = 1;
    const swiperTeam = new Swiper(".um-team__swiper", {
      slidesPerView: qtySlide,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".um-team__swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".um-team__swiper-btn_type_next",
        prevEl: ".um-team__swiper-btn_type_prev",
      },
    });
    return swiperTeam;
  }
};

export const toggleQtySwiperSlideCertificate = () => {
  let qtySlide = 5;
  if (window.innerWidth > 769) {
    qtySlide = 5;
    const swiperCertificate = new Swiper(".um-certificate__swiper", {
      slidesPerView: qtySlide,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".um-certificate__swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".um-certificate__swiper-btn_type_next",
        prevEl: ".um-certificate__swiper-btn_type_prev",
      },
    });
    return swiperCertificate;
  } else if (window.innerWidth < 769 && window.innerWidth > 600) {
    qtySlide = 4;
    const swiperCertificate = new Swiper(".um-certificate__swiper", {
      slidesPerView: qtySlide,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".um-certificate__swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".um-certificate__swiper-btn_type_next",
        prevEl: ".um-certificate__swiper-btn_type_prev",
      },
    });
    return swiperCertificate;
  } else if (window.innerWidth < 600 && window.innerWidth > 500) {
    qtySlide = 3;
    const swiperCertificate = new Swiper(".um-certificate__swiper", {
      slidesPerView: qtySlide,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".um-certificate__swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".um-certificate__swiper-btn_type_next",
        prevEl: ".um-certificate__swiper-btn_type_prev",
      },
    });
    return swiperCertificate;
  } else if (window.innerWidth < 500) {
    qtySlide = 2;
    const swiperCertificate = new Swiper(".um-certificate__swiper", {
      slidesPerView: qtySlide,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".um-certificate__swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".um-certificate__swiper-btn_type_next",
        prevEl: ".um-certificate__swiper-btn_type_prev",
      },
    });
    return swiperCertificate;
  }
};
