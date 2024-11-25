const burgermenu = document.getElementById("menu");
const navig = document.querySelector("nav");
burgermenu.addEventListener("click", () => {
  navig.classList.toggle("hidden");
});
