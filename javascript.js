window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');

    var scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight) { // if we've scrolled past the height of the window (i.e., past the hero section)
        navbar.classList.add('scrolled');
      
    } else {
        navbar.classList.remove('scrolled');
    
    }
});

document.querySelectorAll(".tabs-accordion .tab-title").forEach(button => {
    button.addEventListener("click", () => {
      const activeButton = document.querySelector(".tabs-accordion .tab-title.active");
      activeButton.classList.remove("active");
      activeButton.nextElementSibling.style.maxHeight = 0;
      
      button.classList.add("active");
      button.nextElementSibling.style.maxHeight = "100vh";
    });
  });
  