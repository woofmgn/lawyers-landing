const scrollPageEnabled = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

const scrollPageDisabled = () => {
  const scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
};

export { scrollPageEnabled, scrollPageDisabled };
