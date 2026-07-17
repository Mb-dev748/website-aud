function initNavToggle() {
  const menu = document.getElementById("nav-list");
  const button = document.getElementById("button-menu-mobile");

  button.addEventListener("click", () => {
    const swithMenu = menu.classList.toggle("nav-list--open");
    button.setAttribute("aria-expanded", swithMenu);
  });
}
