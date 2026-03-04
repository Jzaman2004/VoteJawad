const stickyNav = document.getElementById("stickyNav");
const backToTop = document.getElementById("backToTop");
const hero = document.querySelector(".hero");

const onScroll = () => {
  const triggerPoint = hero ? hero.offsetHeight * 0.6 : 300;
  const isPastTrigger = window.scrollY > triggerPoint;

  stickyNav?.classList.toggle("visible", isPastTrigger);
  backToTop?.classList.toggle("show", window.scrollY > 500);
};

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("load", onScroll);

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
