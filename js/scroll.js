document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
  
    // Add the 'scrolled' class if the page is scrolled past 50px
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });