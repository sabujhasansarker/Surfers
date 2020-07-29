let nav = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("is-fixed");
  } else {
    nav.classList.remove("is-fixed");
  }
});
