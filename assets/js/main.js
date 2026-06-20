// Portfolio Ilyes Daabak — JS minimal (pas d'effets superflus)

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Ferme le menu mobile si on repasse en grand écran
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760 && nav) {
      nav.classList.remove("is-open");
    }
  });
});
