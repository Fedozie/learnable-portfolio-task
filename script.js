const menuBtn = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-menu');
const themeIcon = document.querySelector('.theme-icon');
const icon = document.querySelector('.material-icons');
const buttons = document.querySelectorAll('button');
const nextSlide = document.querySelector('.next-slide');
const items = document.querySelectorAll('.item-link')

//Event Listener for toggling menu bar on mobile devices
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.getElementsByTagName('body')[0].classList.toggle('stop-scrolling');
    nextSlide.classList.toggle('hidden');
})

//Event Listener for theme change
themeIcon.addEventListener('click', () => {
    if(icon.innerHTML === "light_mode"){
        icon.innerHTML = "dark_mode";
        icon.style.color = "#09343D";
        document.querySelector('body').classList.add('light')
    }else{
        icon.innerHTML = "light_mode";
        icon.style.color = "#CFCFCF";
        document.querySelector('body').classList.remove('light')
    }
})

//Event Listener for listening for click events for each item on the nav bar
items.forEach((item) => {
    item.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.getElementsByTagName('body')[0].classList.remove('stop-scrolling');
        nextSlide.classList.remove('hidden');
    })
})