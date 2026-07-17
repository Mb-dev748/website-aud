function loadComponents(selector, archivo) {
  return fetch(archivo)
    .then((res) => res.text())
    .then((html) => {
      document.querySelector(selector).innerHTML = html;
    });
}

loadComponents("#header-placeholder", "components/header.html").then(() => {
  initNavToggle();
});

loadComponents("#footer-placeholder", "components/footer.html").then(() => {
  //the future funtion to call footer
});
