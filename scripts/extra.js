document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".md-nav__item");
  
    navItems.forEach(item => {
      const link = item.querySelector(".md-nav__link");
  
      if (link && link.textContent.trim() === "Hidden Tabs") {
        item.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".md-nav__item");
  
    navItems.forEach(item => {
      const link = item.querySelector(".md-nav__link");
  
      if (link && link.textContent.trim() === "Higher Hidden Tabs") {
        item.style.display = "none";
      }
    });
  });