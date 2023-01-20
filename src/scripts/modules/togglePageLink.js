const indexPage = document.querySelectorAll(".js-link-index");
const bankruptcyPage = document.querySelectorAll(".js-link-bankruptcy");
const taxPage = document.querySelectorAll(".js-link-tax");
const mediationPage = document.querySelectorAll(".js-link-mediation");
const contactsPape = document.querySelectorAll(".js-link-contacts");

export const toggleColorLink = () => {
  const location = window.location.pathname;
  let currentLink;

  if (location === "/") {
    currentLink = indexPage;
  } else if (location === "/bankruptcy.html") {
    currentLink = bankruptcyPage;
  } else if (location === "/tax-disputs.html") {
    currentLink = taxPage;
  } else if (location === "/mediation.html") {
    currentLink = mediationPage;
  } else if (location === "/contacts-page.html") {
    currentLink = contactsPape;
  }

  currentLink.forEach((item) => {
    item.classList.toggle("is-active");
  });
};
