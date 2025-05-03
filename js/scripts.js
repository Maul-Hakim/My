document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio Loaded!");

  // Smooth scrolling effect
  document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });
});
