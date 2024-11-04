const menuList = document.querySelector('.menu-list');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const bar1 = document.querySelector('.bar1');
const bar3 = document.querySelector('.bar3');

hamburgerMenu.addEventListener('click', function() {
    menuList.classList.toggle('opened');
    this.classList.toggle('cross');
    
    if (menuList.classList.contains('opened')) {
        // Menu is opened
        bar1.style.backgroundColor = "red";
        bar3.style.backgroundColor = "red";
        hamburgerMenu.style.transform = 'translateX(14vw)'; // No translate needed, it's already on the left
    } else {
        // Menu is closed
        bar1.style.backgroundColor = "black";
        bar3.style.backgroundColor = "black";
        hamburgerMenu.style.transform = 'translateX(0)'; // Keep it on the left when closed
    }
});
