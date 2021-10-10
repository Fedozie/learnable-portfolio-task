const menuBtn = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-menu');
const themeIcon = document.querySelector('.theme-icon');
const icon = document.querySelector('.material-icons')

//Event Listener for toggling menu bar on mobile devices
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
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