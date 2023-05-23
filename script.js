document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("myDropdown").classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".nav-link");
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    });
  });
});
