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
  { qty, gap },
  { swiperSelector, paginSelector, btnNextSelector, btnPrevSelector }
) => {
  const swiper = new Swiper(swiperSelector, {
    slidesPerView: qty,
    spaceBetween: gap,
    slidesPerGroup: 1,
    loop: false,
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
  const slideSettings = {
    qty: 3,
    gap: 39,
  };

  if (window.innerWidth > 1023) {
    slideSettings.qty = 3;
    slideSettings.gap = 39;
    const newSwiperTeam = createSwiper(slideSettings, SwiperTeamSeggings);

    return newSwiperTeam;
  } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
    slideSettings.qty = 2;
    slideSettings.gap = 20;
    const newSwiperTeam = createSwiper(slideSettings, SwiperTeamSeggings);

    return newSwiperTeam;
  } else if (window.innerWidth < 768) {
    slideSettings.qty = 1;
    const newSwiperTeam = createSwiper(slideSettings, SwiperTeamSeggings);

    return newSwiperTeam;
  }
};

export const toggleQtySwiperSlideCertificate = () => {
  const slideSettings = {
    qty: 5,
    gap: 31,
  };

  if (window.innerWidth > 1023) {
    slideSettings.qty = 5;
    slideSettings.gap = 31;
    const newSwiperCertificate = createSwiper(
      slideSettings,
      SwiperCertificateSeggings
    );

    return newSwiperCertificate;
  } else if (window.innerWidth < 1024 && window.innerWidth > 767) {
    slideSettings.qty = 4;
    slideSettings.gap = 20;
    const newSwiperCertificate = createSwiper(
      slideSettings,
      SwiperCertificateSeggings
    );

    return newSwiperCertificate;
  } else if (window.innerWidth < 768 && window.innerWidth > 500) {
    slideSettings.qty = 3;
    slideSettings.gap = 20;
    const newSwiperCertificate = createSwiper(
      slideSettings,
      SwiperCertificateSeggings
    );

    return newSwiperCertificate;
  } else if (window.innerWidth < 768 && window.innerWidth > 300) {
    slideSettings.qty = 2;
    slideSettings.gap = 20;
    const newSwiperCertificate = createSwiper(
      slideSettings,
      SwiperCertificateSeggings
    );

    return newSwiperCertificate;
  }
};

if (window.location.href === "http://localhost:3000/") {
  const swiperTeam = toggleQtySwiperSlideTeam();
  const swiperCertificate = toggleQtySwiperSlideCertificate();

  swiperTeam.slideNext();
  swiperCertificate.slideNext();
}

// const swiperTeam = toggleQtySwiperSlideTeam();
// const swiperCertificate = toggleQtySwiperSlideCertificate();

// swiperTeam.slideNext();
// swiperCertificate.slideNext();
