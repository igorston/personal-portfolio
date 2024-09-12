const navButton = document.getElementById("navButton");
const navMenu = document.getElementById("navMenu");
const menu = document.getElementById("menu");

navButton.addEventListener("click", function (event) {
  event.stopPropagation();
  if (navMenu.style.display === "none") {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
});

window.addEventListener("click", function (event) {
  event.stopPropagation();
  if (!menu.contains(event.target)) {
    navMenu.style.display = "none";
  }
});

window.onscroll = function () {
  showBackToTopButton();
};

function showBackToTopButton() {
  const btn = document.getElementById("backToTopBtn");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
