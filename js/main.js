
const navbar = document.getElementById('nav');
const logo = document.getElementById('logo');
const navItem = document.querySelectorAll('.nav-link');


window.addEventListener('scroll', () => {
    if (window.scrollY > 680) {
        navbar.classList.add('sc');
        logo.classList.remove('text-white'); 
        logo.classList.add('text-black');
        
        navItem.forEach(navItem => {
            navItem.classList.remove('text-white');
            navItem.classList.add('link-scroll');
        });
    } else {
        navbar.classList.remove('sc');
        logo.classList.remove('text-black');
        logo.classList.add('text-white');
        
        navItem.forEach(navItem => {
            navItem.classList.remove('link-scroll');
            navItem.classList.add('text-white');
        });

    }
});






