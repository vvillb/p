window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');

    var scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight) { // if we've scrolled past the height of the window (i.e., past the hero section)
        navbar.classList.add('scrolled');
      
    } else {
        navbar.classList.remove('scrolled');
    
    }
});
